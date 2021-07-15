<template>
  <div class="container">
    <div>app test child</div>
    <div>
      <button @click="changeVuexData">修改 vuex 数据</button>
    </div>
    <div>
      模拟表单数据:{{formData}}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AppTestChild extends Vue {
  @Prop() readonly formData!: any

  changeVuexData():void{
    this.$store.commit('changeKeysData', { key: 'appVal2', val: 'new app val2' });
  }
}
</script>

<style lang="css">
</style>
