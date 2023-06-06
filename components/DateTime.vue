<template>
  <span>{{ str }}</span>
</template>

<script>
function twoDigit(num) {
  num = num | 0
  return (num / 100).toFixed(2).split('.')[1]
}
function formatTime(time) {
  if (!time) {
    return null
  }
  const date = new Date(time)
  return (
    '' +
    twoDigit(date.getMonth() + 1) +
    '/' +
    twoDigit(date.getDate()) +
    '/' +
    date.getFullYear() +
    ' ' +
    twoDigit(date.getHours()) +
    ':' +
    twoDigit(date.getMinutes()) +
    ':' +
    twoDigit(date.getSeconds())
  )
}
export default {
  name: 'DateTime',
  props: {
    time: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    str() {
      if (!this.time) {
        return ''
      }
      return formatTime(this.time)
    },
  },
}
</script>
