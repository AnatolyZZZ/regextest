<template>
    <header class="container flex gap1">
        <router-link to="/">Enter rules for testing</router-link>
    </header>
  <h2>Enter testing string</h2>
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
                this.getTests.forEach((value, key) => {
                    result.push({testname: key, result : this.TestOne(value)})
                });
                this.setResult(result);
                router.push('/result')
            }
        },
        TestOne (test) {
            // thirst check if user entered regex with / in the begining end in the end
             if (test.length > 1) {
                if (test[0] ==='/' && test[test.length - 1]) {
                    test = test.slice(1, test.length - 1);
                    console.log('I assume that user can use regex with or without \'/\' in begining and the end')
                }
            }
            const re = new RegExp(test);
            // console.log(re)
            return re.test(this.getString)
        }
    }
}
</script>

<style>

</style>