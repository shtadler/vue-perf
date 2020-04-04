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
    // toooo much time to ex
    result () {
      let result = this.random * 100
      const myBase = this.base;

    //   const base = this.base;
      for (let i = 0; i < 1000; i++) {
        result += Math.sqrt(Math.cos(Math.sin(myBase))) + myBase * myBase + myBase + myBase * 2 + myBase * 3
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