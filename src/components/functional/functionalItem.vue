<template functional>
    <div class="item">
        <span v-if="props.active"></span>
        <i v-else></i>
    </div>
</template>

<script>
export default {
    props: [ 'active' ]
}
</script>

<style scoped>
    .item {
        width: 30px;
        border: 3px solid white;
    }
    span, i {
        display: block;
        width: 27px;
        height: 27px;
    }
    span {
        background: #ebedf0;
    }
    i {
        background: #c6e48b;
    }
</style>