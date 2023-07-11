<template>
  <CreateReg />
  <TestList/>
</template>

<script>
import CreateReg from './components/CreateReg.vue'
import TestList from './components/TestList.vue';

export default {
  name: 'App',
  components: {
    CreateReg,
    TestList
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
  background: black;
  color: white;
  border: 0;
  border-radius: 3px

}
input {
  height: 1.5rem;
}
</style>
