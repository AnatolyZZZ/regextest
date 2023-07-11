<template>
  <div class="testlist">
    <div v-for="test in getTests" :key="test[0]" class="testdisplay">
        <div class="flex container gap1">
            <div class="name">{{test[0]}}</div>
            <div class="rule">{{test[1]}}</div>
            <button class="btn btn-black" @click="setEdit(test[0])">Edit</button>
            <button class="btn btn-del" @click="deleteTest(test[0])">Delete</button>
        </div>

    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "TestList",
    computed: mapGetters(['getTests']),
    methods: {...mapActions(['deleteTest', 'setEdit'])}
}
</script>
 
<style>
 .testdisplay {
    margin-top: 0.2rem;
    /* background: lightblue;
    border: 1px dotted gray; */
 }
</style>