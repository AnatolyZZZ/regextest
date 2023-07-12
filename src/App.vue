<template>
  <router-view></router-view>
</template>

<script>
 import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
  },
  methods: {...mapActions(['setAllTests'])},
  mounted () {
    const testsjson = localStorage.getItem('tests');
    const tests = JSON.parse(testsjson);
    this.setAllTests(new Map(tests))
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
header {
  padding-bottom: 2rem;
  text-transform: uppercase;
}
header a {
  color: rgb(50, 50, 50)
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
