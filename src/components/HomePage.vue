<template>
    <router-link to="/string">Enter testing string</router-link>
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