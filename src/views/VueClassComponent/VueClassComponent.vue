<template>
  <div class="container">
    <h3>vue class component</h3>
    <h4>{{pageTitle}}</h4>
    <div>
      <span>计数count={{count}}</span>
      <button @click="addCount">+1</button>
    </div>
    <div>
      <span>计算属性count+1={{comCount}}</span>
      <button @click="comCount=1">set comCount 1</button>
    </div>
    <div>
      refs使用
      <input type="text" ref="inputRef">
    </div>
    <ChildComponent v-bind:parent-title="pageTitle"></ChildComponent>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Route } from 'vue-router';
import Component from 'vue-class-component';
import Log from '../../utils/decorator/log';
import Watch from '../../utils/decorator/watch';
import ChildComponent from './ChildComponent.vue';

// 添加vue router生命周期
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);

// 使用Component装饰器
// eslint-disable-next-line no-use-before-define
@Component<VueClassComponent>({
  components: {
    ChildComponent,
  },
  watch: {
    count(oldVal, val) {
      console.log(oldVal, val, this.count);
    },
  },
})
export default class VueClassComponent extends Vue {
  /**
   * 定义data
   * 1. 属性方式定义
   * 2. 使用data hook定义，可能会导致this获取时ts报错
   */

  // data hook 定义data
  data(): any {
    return {
      pageTitle: 'test vue-class-component',
    };
  }

  count = 1

  /**
   * watch decorator使用
   */

  @Watch('count')
  watchCountChange(val: number, oldVal: number): void {
    console.log('watch decorator', val, oldVal, this.count);
  }

  /**
   * 定义computed
   */
  get comCount(): number {
    return this.count + 1;
  }

  set comCount(val: number) {
    console.log(`set comCount:${val}`);
    this.count = val - 1;
  }

  /**
   * refs使用
   */
  $refs!: {
    inputRef: HTMLInputElement
  }

  /**
   * 定义方法
   */
  @Log
  addCount(e: Event): void {
    console.log(`click event:${e}`);
    this.count += 1;
  }

  // 生命周期created
  created(): void {
    console.log('created');
    this.$watch('count', (val, oldVal) => {
      console.log(`count change:${oldVal}=>${val}`);
    });
  }

  // 生命周期mounted
  mounted(): void{
    console.log('mounted');
    console.log(this.$refs.inputRef);
  }

  // 生命周期beforeRouteEnter
  beforeRouteEnter(to: Route, from: Route, next: ()=>any): void {
    console.log('beforeRouteEnter');
    next();
  }
}
</script>

<style>
</style>
