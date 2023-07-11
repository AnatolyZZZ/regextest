<template>
  <router-link to="/">Enter rules for testing</router-link>
  <router-link to="/string">Enter string</router-link>
  <h1>Testing results</h1>
  <div class="">
    <table class="container">
      <thead>
        <th>Test name</th>
        <th>Test result</th>
      </thead>
      <tbody>
          <tr v-for="elt in result" :key='elt.testName'>
            <td>{{elt.testname}}</td>
            <td :class="[elt.result ? 'pass' : 'fail']">{{elt.result ? 'PASS' : "FAIL"}}</td>
          </tr>
      </tbody>
    </table>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      result : []
    }
  },
  created() {
    this.result = this.getResult();
    console.log(this.getResult())
    console.log(this.result)
  },
  name : "ResultPage",
  methods : {...mapGetters(['getResult'])},
}
</script>

<style>
  .pass {
    color: green
  }
  .fail {
    color: red
  }
</style>