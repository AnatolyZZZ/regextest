<template>
  <div class="testlist">
    <div v-for="test in getTests" :key="test[0]" class=" flex container gap1">
        <div class="name testdisplay">{{test[0]}}</div>
        <div class="rule testdisplay">{{test[1]}}</div>
        <button class="btn">Edit</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "TestList",
    computed: mapGetters(['getTests'])
}
</script>
 
<style>
 .testdisplay {
    margin-top: 0.2rem;
    background: lightblue;
    border: 1px dotted gray;
 }
</style>