<template>
  <div class="item">
      {{result}}
  </div>
</template>

<script>
export default {
  props: ['random'],
  computed: {
    base () {
      return 360
    },
    result () {
      let result = this.random * 100
    //   const base = this.base;
      for (let i = 0; i < 1000; i++) {
        result += Math.sqrt(Math.cos(Math.sin(this.base))) + this.base * this.base + this.base + this.base * 2 + this.base * 3
      }
      return result
    },
  },
}
</script>
<style scoped>
    .item {
        width: 200px;
        background: #c6e48b;
        border: 3px solid white;
    }
</style>