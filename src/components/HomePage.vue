<template>
    <header class="container flex">
        <router-link to="/string">Enter testing string and make test</router-link>
    </header>
    <h2>Enter rules for testing</h2>
    <CreateReg />
    <TestList/>
</template>

<script>
import CreateReg from './CreateReg.vue'
import TestList from './TestList.vue';

export default {
    name : "HomePage",
    components : {
        CreateReg,
        TestList
    }
}
</script>

<style>

</style>