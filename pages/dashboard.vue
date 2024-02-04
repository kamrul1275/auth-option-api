<template>
    <div>
<h1>Welcome Dashboard page</h1>
<button @click="counter.increment">Count:{{ counter.count }}</button>

    </div>
</template>

<script setup>

const counter= useCounterStore();



</script>

<style lang="scss" scoped>

</style>