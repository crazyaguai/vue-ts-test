<template>
  <div class="container">
    <div>vue component 原生组件测试</div>
    <component :is="'ChildComponent'" :data1="data1" v-bind="objData"></component>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ChildComponent from './ChildComponent.vue';

@Component({
  components: { ChildComponent },
})
export default class DefaultComponentTest extends Vue {
  data1 = '123'

  objData = { a: 3, b: 4 }
}
</script>

<style lang="css">
</style>
