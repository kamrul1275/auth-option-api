<template>
    <div>
<!-- <h1>Welcome Dashboard page</h1> -->
<!-- <button @click="counter.increment">Count:{{ counter.count }}</button> -->
<h2>Hello.... {{ auth.getUser.name }}</h2>

Token:{{ token.getToken }} <br>
Status: {{ token.getStatus }}

    </div>
</template>

<script setup>

// const counter= useCounterStore();
const token = useTokenStore();
const auth = useAuthStore();

</script>

<style lang="scss" scoped>

</style>