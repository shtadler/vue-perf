<template>
  <section>
    <h1>Functional components</h1>
    <div class="list">
      <Item v-for="i in list" :key="i.id" :active="i.active" />
    </div>
  </section>
</template>

<script>
import Item from './functionalItem'

export default {
  name: 'functional',
  components: {
    Item
  },
 created () {
    this.count = 500
    this.counter = 1
    this.generate()
  },
  data(){
    return { list: [] }
  },
  methods: {
    generate () {
      const data = []
      for (let i = 0; i < this.count; i++) {
        data.push({id: ++this.counter, active: Math.random() > 0.5})
      }
      this.list = data
      requestAnimationFrame(this.generate)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80vw;
  margin: 0 auto;
}
</style>
