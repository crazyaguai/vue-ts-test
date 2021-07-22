<template>
  <div class="container">
    <h3>my com 1</h3>
    <div>
      <span>{{config.data.my_test_data}}</span>
      <input v-model="config.data.my_test_data" @input="changeMyTestData" type="text">
      {{myTestDataInfo}}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import myCom1Store from '../store/myCom1Store';

@Component
export default class MyCom1 extends Vue {
  @Prop() config!: any

  changeMyTestData(e: InputEvent & { target: HTMLInputElement }): void {
    myCom1Store.$emit('my_test_data.validate', e.target.value);
  }

  get myTestDataInfo(): any {
    return myCom1Store.my_test_data;
  }
}
</script>

<style lang="css">
</style>
