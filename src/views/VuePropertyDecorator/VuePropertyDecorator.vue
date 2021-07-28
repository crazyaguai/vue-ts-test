<template>
  <div class="container">
    <h3>vue-property-decortor test</h3>
    <div>.sync test={{syncdata}}</div>
    <div>modelData={{modelData}}</div>
    <Child
      :title="'child component'"
      :syncdata.sync="syncdata"
      v-model="modelData"
      @on-data-change="getChangeData"
    />
  </div>
</template>

<script lang="ts">
import {
  Vue, Component, Watch, Provide, ProvideReactive,
} from 'vue-property-decorator';
import Child from './components/Child.vue';

@Component({
  components: {
    Child,
  },
})
export default class VuePropertyDecortor extends Vue {
  syncdata = 1

  modelData = 2

  @Watch('modelData')
  onModelDataChange(val: number, oldVal: number): void {
    console.log(val, oldVal);
  }

  @Provide() provideData: any = {
    a: {
      b: 1,
    },
  }

  @ProvideReactive() prData = '123'

  mounted(): void {
    setTimeout(() => {
      this.provideData = '123';
      this.prData = '456';
    }, 2000);
  }

  getChangeData(d: number): void{
    console.log(d);
  }
}
</script>

<style lang="css">
</style>
