<template>
  <router-view></router-view>
</template>

<script>
 import { mapActions } from 'vuex';
// import TestList from './components/TestList.vue';
// import router from './router';

export default {
  name: 'App',
  components: {
    // CreateReg,
    // TestList
  },
  methods: {...mapActions(['setAllTests'])},
  mounted () {
    const testsjson = localStorage.getItem('tests');
    const tests = JSON.parse(testsjson);
    this.setAllTests(new Map(tests))
    // console.log(tests)
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.name {
  width: 30%;
}
.rule {
  width: 70%;
}
.container {
  margin: 0 auto;
  width: 80%;
  max-width: 1100px;
}
.flex {
  display: flex;
}
.gap1 {
  gap: 1rem;
}
.btn {
  width: 7rem;
  color: white;
  border: 0;
  border-radius: 3px
}
.btn-del {
    background: red;
 }
 .btn-black {
    background-color: black;
 }
input {
  height: 1.5rem;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
