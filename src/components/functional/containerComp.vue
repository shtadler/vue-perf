<template functional>
    <div class="container">
        <A v-if="props.isOk"/>
        <div v-else class="some-content-around">
            <B />
        </div>
    </div>
</template>

<script>
export default {
  props: ['isOk'],
  components: {
    A: true,
    B: true,
  }
}
</script>

<style>

</style>