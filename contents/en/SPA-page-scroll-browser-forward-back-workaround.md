It's a shared view that a single-page application (SPA) offers users better experience. However, in order to gain the benefits, developers have to take care of a lot of details ourselves. Browser's navigation (back/forward) is one of them.

Web applications often provide linkable, bookmarkable, shareable URLs for important locations in the app. In an SPA, either [HTML5 History API](https://css-tricks.com/using-the-html5-history-api/) or hash fragments (`#page`) is used to provide these permalinks. When a `popstate` or `hashchange` event is triggered, a listener function is executed, changing some part of the page instead of loading another page. A typical way (using jQuery) to replace content of the page when a route is matched is like this:

<code data-gist-id="352a1d80e6f681d7dc90" data-gist-hide-footer="true" data-gist-hide-line-numbers="true" data-gist-show-spinner="true" data-gist-line="1-5"></code>

## The problem

Here's the problem: if content in `el` is bigger than window height, user can scroll down to a certain position. The next time `el` replace content of `$container`, the browser stays at that position. We should tell the browser to go back to the top, just like when it loads a new page. The code is pretty simple:

<code data-gist-id="352a1d80e6f681d7dc90" data-gist-hide-footer="true" data-gist-hide-line-numbers="true" data-gist-show-spinner="true" data-gist-line="7"></code>


And then browser always scroll to top whenever a route is matched and the content is replaced.

It works perfectly, until the user clicks the back/forward button. In this case, the browser is supposed to scroll back to where it was before. Actually it still does so, but `window.scrollTo(0, 0)` tells it to go to the top. You will probably notice that the browser goes back to where it was at first and after a galance it scrolls to the top again.

I have tried many different ways to solve this problem. A straight-forward idea is to calculate the correct position instead of 0. I even implenmented a histroy manager toolkit to keep track of all history visits and positions. However, it turns out the best way is the opposite:

Only run `scrollTo` when it's necessary.

Here's how: [https://github.com/mondaychen/mondaychen.github.io/blob/master/js/app/history-position.js](https://github.com/mondaychen/mondaychen.github.io/blob/master/js/app/history-position.js)

## Explanation

I use a variable `lastUserJump` to store the url/fragment from links. For example, when the user clicks `<a href="#page">Page Link</a>`, `lastUserJump` is set to `"page"`. Then I have:

<code data-gist-id="352a1d80e6f681d7dc90" data-gist-hide-footer="true" data-gist-hide-line-numbers="true" data-gist-show-spinner="true" data-gist-line="9-13"></code>

Only when the new URL equals `lastUserJump`, tell browser to scroll to top. Since back/forward buttons do not set `lastUserJump`, it will allow the browser to position correctly.

## Still not good enough!

Now theoretically it is perfect: it goes to the top when the user clicks on a link, and stays at the right position when the user clicks back/forward buttons (or keyboard control; anything not links). However, `el` could be very long, and scroll offsets can be big numbers. If the earlier offset is bigger than current window height, the browser can not jump to the correct position. One way to avoid this is the following:

<code data-gist-id="352a1d80e6f681d7dc90" data-gist-hide-footer="true" data-gist-hide-line-numbers="true" data-gist-show-spinner="true" data-gist-line="15-27"></code>

Finally you can have it: a website that runs faster, and still have nice navigation experience.