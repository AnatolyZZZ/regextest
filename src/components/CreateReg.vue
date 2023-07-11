<template>
  <form class="creation" @submit="onSubmit">
    <div :class="['container', 'flex', 'gap1']">
      <div class="name">Rule name</div>
      <div class="rule">Rule</div>
      <div class="btn"></div>
    </div>
    <div :class="['container', 'flex', 'gap1']">
      <input 
        :class="'name'"
        @change="setName($event.target.value)"
        :value="getCurrent.name"
      >
      <input
       :class="'rule'"
        @change="setRule($event.target.value)"
        :value="getCurrent.rule">
      <button type='submit' :class="['btn', 'btn-black']">Save</button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "CreateReg",
    methods: {
      ...mapActions(['setName', 'setRule', 'setTest']),
      onSubmit (e) {
        e.preventDefault();
        this.setTest();
      }
    },
    computed: mapGetters(['getCurrent'])
}
</script>

<style>
  .creation {
    margin-bottom: 1rem;
  }
</style>