<template>
    <div>
      <keep-alive :key="uid">
        <component :is="tabName" />
      </keep-alive>
        <button @click="toogle">Change the tab</button>
    </div>
</template>

<script>
import Ok from './ok.vue'
import Not from './not.vue'

export default {
    components: { Ok, Not },
    data() {
        return { uid: 1, tabName: 'Ok', myUsers: [] }
    },
    methods: {
        // setUsers() {
        //   // Promise.then().then().then()
        //   queue.add((done) => {
        //     done();
        //   })
        // },
        // async fetchChunks() {
        //   // pseudo code
        //   // 1000 items
        //   const users = await fetch('users');
        //   // [[100], [100], [100]]
        //   chunks(users, 100).forEach(element => {
        //     // element [...100]

        //     queue.add((done) => {
        //       // should be only one
        //       requestAnimationFrame(() => {
        //         this.myUsers.push(element)
        //         done();
        //       })
              
        //     })

        //   });
        // },

        toogle() {
            this.fetchChunks();

            this.tabName = this.tabName === 'Ok' ? 'Not' : 'Ok'
        }
    }
}
</script>

<style>

</style>