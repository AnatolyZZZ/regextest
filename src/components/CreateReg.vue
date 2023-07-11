<template>
  <div class="creation">
    <div :class="['container', 'flex', 'gap1']">
      <input 
        :class="'name'"
        @change="setName($event.target.value)"
        v-model="getCurrent.name"
      >
      <input
       :class="'rule'"
        @change="setRule($event.target.value)"
        v-model="getCurrent.rule">
      <button :class="'btn'">Save</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "CreateReg",
    methods: {...mapActions(['setName', 'setRule'])},
    computed: mapGetters(['getCurrent'])
}
</script>

<style>
  .creation {
    margin-bottom: 1rem;
  }
</style>