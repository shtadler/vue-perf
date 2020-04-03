<template>
    <div>
        <component :is="tabName" />
        <button @click="toogle()">Change the tab</button>
    </div>
</template>

<script>
import Ok from './ok.vue'
import Not from './not.vue'

export default {
    components: { Ok, Not },
    data() {
        return { tabName: 'Ok' }
    },
    methods: {
        toogle() {
            this.tabName = this.tabName === 'Ok' ? 'Not' : 'Ok'
        }
    }
}
</script>

<style>

</style>