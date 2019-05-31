<template>
  <section class="container">
    <div>
      <h1>{{ lang }}</h1>
      <ul>
        <li></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lang: this.$route.params.lang
    }
  }
}
</script>
