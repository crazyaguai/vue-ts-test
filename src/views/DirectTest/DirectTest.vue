<template>
  <div class="container">
    <h3>direct test</h3>
    <div>
      <button @click="toggleInput">toggle</button><button @click="addCount">add</button>
      <input type="text" v-if="showInput" v-model="count" v-direct-test="">
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue, Component,
} from 'vue-property-decorator';

@Component
export default class DirectTest extends Vue {
  showInput = true

  count = 1

  addCount(): void{
    this.count += 1;
  }

  toggleInput(): void{
    this.showInput = !this.showInput;
  }
}
</script>

<style lang="css">
</style>
