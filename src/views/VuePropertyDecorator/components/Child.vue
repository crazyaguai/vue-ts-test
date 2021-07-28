<template>
  <div class="container">
    <h4>{{title}}</h4>
    <div>
      <button @click="addSData">+1 {{sdata}}</button>
    </div>
    <div>
      <!-- {{modelData}} -->
      {{mData}}
      <input type="number" v-model="mData">
    </div>
    <div>
      {{provideData}}
    </div>
    <div>
      {{prData}}
    </div>
    <div>
      <button @click="onDataChange">emit click</button>
    </div>
    <div>
      <input type="text" ref="myInputRef">
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue, Component, Prop, PropSync, Model, ModelSync, Inject, InjectReactive, Emit, Ref,
} from 'vue-property-decorator';

@Component
export default class Child extends Vue {
  @Prop({
    type: String,
    default: 'title text',
    required: true,
    validator: (v) => typeof v === 'string',
  }) readonly title!: string

  // @Prop(String) readonly title: string | undefined // 不使用非空断言，需要设置undefined属性
  // @Prop(String) readonly title!: string // 使用!非空断言操作符

  @PropSync('syncdata', { default: 1 }) sdata!: number

  addSData(): void{
    // this.$emit('update:syncdata', this.sdata + 1);
    this.sdata += 1;
  }

  // @Model('changeModelData', { default: 1 }) modelData!: number

  @ModelSync('modelData', 'changeModelData', { default: 1 }) mData!: number

  // mounted(): void{
  //   setTimeout(() => {
  //     this.$emit('changeModelData', 3);
  //   }, 1000);
  // }

  // @Inject() provideData!: any

  @Inject({ from: 'provideData', default: 'default data' }) provideData!: any

  @InjectReactive() prData!: string

  @Emit()
  onDataChange(): any {
    // return 1;
    return Promise.resolve(2);
  }

  // @Ref() inputRef!: HTMLInputElement
  @Ref('myInputRef') inputRef!: HTMLInputElement

  mounted(): void{
    this.inputRef.focus();
  }
}
</script>

<style lang="css">
</style>
