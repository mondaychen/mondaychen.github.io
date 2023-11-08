<template>
  <section class="container">
    <div>
      <div class="portrait"><img src="/pic/portrait.jpg" /></div>
      <h1 class="name">Mengdi "Monday" Chen | 陈蒙迪</h1>
      <blockquote>
        <p>Has a programmer Buddha-nature or not?</p>
        <p>Mu.</p>
      </blockquote>
      <p class="social-links">
        <a
          href="https://github.com/mondaychen"
          target="_blank"
          class="flaticon flaticon-github"
        ></a>
        <a
          href="https://twitter.com/mengdi_en"
          target="_blank"
          class="flaticon flaticon-twitter"
        ></a>
        <a
          href="http://linkedin.com/in/mengdi"
          target="_blank"
          class="flaticon flaticon-linkedin"
        ></a>
        <a
          href="http://www.douban.com/people/monday/"
          target="_blank"
          class="flaticon flaticon-douban"
        ></a>
        <a
          href="https://www.facebook.com/monday.chen"
          target="_blank"
          class="flaticon flaticon-facebook"
        ></a>
      </p>
      <h2>Recent work</h2>
      <ul class="experience-list">
        <li>
          <md-icon>ads_click</md-icon>
          <div class="desc">
            <a href="https://twitter.com/mengdi_en/status/1721965940680565166">
              WebWand
            </a>
            - Vision AI-powered Autonomous Web Agent
          </div>
        </li>
        <li>
          <md-icon>all_inbox</md-icon>
          <div class="desc">
            <a href="https://github.com/mondaychen/file_organizer">
              File Organzier
            </a>
            - AI-powered assistant to organize files on your computer.
          </div>
        </li>
      </ul>
      <h2>Open Source Contributions</h2>
      <ul class="experience-list">
        <li>
          <md-icon>code</md-icon>
          <div class="desc">
            <a href="https://github.com/facebook/react">React</a> - The library
            for web and native user interfaces
          </div>
        </li>
        <li>
          <md-icon>code</md-icon>
          <div class="desc">
            <a href="https://github.com/facebookexperimental/Recoil">Recoil</a>
            - Experimental state management library for React apps
          </div>
        </li>
      </ul>
      <h2>Experience</h2>
      <ul class="experience-list">
        <li>
          <md-icon>work</md-icon>
          <div class="desc">AI Engineer @ Normal Computing (2023-now)</div>
        </li>
        <li>
          <md-icon>work</md-icon>
          <div class="desc">Software Engineer @ Meta (Facebook) (2019-2023)</div>
        </li>
        <li>
          <md-icon>work</md-icon>
          <div class="desc">Software Engineer @ FreeWheel (2016-2019)</div>
        </li>
        <li>
          <md-icon>work</md-icon>
          <div class="desc">Intern @ ActionIQ (2015)</div>
        </li>
        <li>
          <md-icon>school</md-icon>
          <div class="desc">
            Master of Information Science @ Cornell Univeristy (2014-2015)
          </div>
        </li>
        <li>
          <md-icon>work</md-icon>
          <div class="desc">Frontend Engineer @ Douban Read (2012-2013)</div>
        </li>
        <li>
          <md-icon>school</md-icon>
          <div class="desc">
            Bachelor of Digital Media Arts @ Communication Univeristy of China
            (2008-2012)
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '~/plugins/theme-variables.scss';

.container {
  max-width: 800px;
}

.name {
  font-size: 1.75em;
  font-weight: 500;
}
.portrait {
  float: right;
  margin: 0 40px 0 10px;
  img {
    border: 3px solid #eceff1;
    border-radius: 999px;
  }
}
@media only screen and (max-width: 992px) {
  .portrait {
    float: none !important;
    text-align: center;
  }
}

blockquote {
  margin: 20px 0;
  padding-left: 1rem;
  border-left: 5px solid $primary;
}

.social-links {
  padding: 20px 0;
  a {
    margin-right: 12px;
    box-shadow: 0 0 4px $primary;
    border-radius: 999px;
    font-size: 56px;
    &:hover {
      text-decoration: none;
      color: $accent !important;
      box-shadow: 0 0 5px $accent;
    }
  }
}

.experience-list {
  padding-left: 0;
  list-style-type: none;
  li {
    clear: both;
    line-height: 1.75em;
  }
  i {
    float: left;
    margin-top: -1px;
  }
  .desc {
    margin-left: 30px;
  }
}
</style>
