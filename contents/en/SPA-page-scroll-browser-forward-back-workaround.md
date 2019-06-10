---
subject: 'A Workaround for offset re-location in Single-Page Apps'
time: 1436500401017
location: 'New York'
---

It's a shared view that a single-page application (SPA) offers users better experience. However, in order to gain the benefits, developers have to take care of a lot of details ourselves. Browser's navigation (back/forward) is one of them.

Web applications often provide linkable, bookmarkable, shareable URLs for important locations in the app. In an SPA, either [HTML5 History API](https://css-tricks.com/using-the-html5-history-api/) or hash fragments (`#page`) is used to provide these permalinks. When a `popstate` or `hashchange` event is triggered, a listener function is executed, changing some part of the page instead of loading another page. A typical way (using jQuery) to replace content of the page when a route is matched is like this:

```javascript
var $container = $('#container');
...
// when some route is matched
var view = new AnotherPage();
$container.html(view.render().el);
```

## The problem

Here's the problem: if content in `el` is bigger than window height, user can scroll down to a certain position. The next time `el` replace content of `$container`, the browser stays at that position. We should tell the browser to go back to the top, just like when it loads a new page. The code is pretty simple:

```javascript
window.scrollTo(0, 0)
```

And then browser always scroll to top whenever a route is matched and the content is replaced.

It works perfectly, until the user clicks the back/forward button. In this case, the browser is supposed to scroll back to where it was before. Actually it still does so, but `window.scrollTo(0, 0)` tells it to go to the top. You will probably notice that the browser goes back to where it was at first and after a galance it scrolls to the top again.

I have tried many different ways to solve this problem. A straight-forward idea is to calculate the correct position instead of 0. I even implenmented a histroy manager toolkit to keep track of all history visits and positions. However, it turns out the best way is the opposite:

Only run `scrollTo` when it's necessary.

Here's how: [https://github.com/mondaychen/mondaychen.github.io/blob/master/js/app/history-position.js](https://github.com/mondaychen/mondaychen.github.io/blob/master/js/app/history-position.js)

## Explanation

I use a variable `lastUserJump` to store the url/fragment from links. For example, when the user clicks `<a href="#page">Page Link</a>`, `lastUserJump` is set to `"page"`. Then I have:

```javascript
$container.html(el)
// jump to top if needed
if (historyManager.isUserJump(Backbone.history.fragment)) {
  window.scrollTo(0, 0)
}
```

Only when the new URL equals `lastUserJump`, tell browser to scroll to top. Since back/forward buttons do not set `lastUserJump`, it will allow the browser to position correctly.

## Still not good enough!

Now theoretically it is perfect: it goes to the top when the user clicks on a link, and stays at the right position when the user clicks back/forward buttons (or keyboard control; anything not links). However, `el` could be very long, and scroll offsets can be big numbers. If the earlier offset is bigger than current window height, the browser can not jump to the correct position. One way to avoid this is the following:

```javascript
// make body long enough to help browser jump to the right position
$body.css('min-height', '99999px')
// set dom
$container.html(el)
// jump to top if needed
if (historyManager.isUserJump(Backbone.history.fragment)) {
  window.scrollTo(0, 0)
}
// after 0.1s set min-height to a normal value
// hopefully no one will notice that
_.delay(function() {
  $body.css('min-height', '450px')
}, 100)
```

Finally you can have it: a website that runs faster, and still have nice navigation experience.
