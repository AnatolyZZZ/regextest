<template>
    <router-link to="/">Enter rules for testing</router-link>
  <div>Enter string</div>
  <div class="container flex gap1">
    <input
    @change="setString($event.target.value)"
    :value="getString"
    style="width : 100%"
    >
    <button class="btn btn-black" @click="Test()">Make tests</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import router from '../router'

export default {
    name : "StringEnter",
    computed: mapGetters(['getString', 'getTests']),
    methods: {
        ...mapActions(['setString', 'setResult']),
        Test () {
            const result = [];
            if (this.getString == '') {
                alert("String should not be empty")
            } else {
                console.log(this.getString);
                console.log(this.getTests);
                this.getTests.forEach((value, key) => {
                    result.push({testname: key, result : this.TestOne(value)})
                });
                console.log(result);
                this.setResult(result);
                router.push('/result')
            }
        },
        TestOne (test) {
            
            const re = new RegExp(test);
            console.log(re)
            return re.test(this.getString)
        }
    }
}
</script>

<style>

</style>