<template>
    <div>
        <h1>Hello not ok</h1>
        <span>Result is: {{biiiggggCalculation()}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return { base: 360 }
    },
    methods: {
        biiiggggCalculation () {
            let data = 0
            for (let i = 0; i < 3000000; i++) {
                data += 10 + (Math.tan(this.base)*Math.random())*(Math.tan(this.base) + Math.random()) / Math.sinh(Math.sin(this.base) * Math.tan(Math.random() * Math.random() * 100))
            }
            return data
        },
    },
}
</script>

<style>

</style>