<template>
  <div id="logo">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="121.12px"
      height="111.782px"
      viewBox="0 0 121.12 111.782"
      enable-background="new 0 0 121.12 111.782"
      xml:space="preserve"
    >
      <path
        d="M30.146,51.223v60.56H0V0.267l60.293,42.152L121.12,0v29.346L60.293,74.433L30.146,51.223z"
        class="p1"
      ></path>
      <polygon
        points="121.12,37.884 121.12,111.783 90.972,111.783 90.972,60.027"
        class="p2"
      ></polygon>
    </svg>
  </div>
</template>

<style lang="scss">
@import '~/plugins/theme.scss';

#logo {
  height: auto;
  text-align: center;
  margin: 20px auto;
}
#logo svg {
  height: 80px;
  display: block;
  margin: 0 auto;
  fill: $primary;
}
#logo .p2 {
  transition: all 0.3s;
}
#logo:hover .p2 {
  fill: $accent;
}
</style>
