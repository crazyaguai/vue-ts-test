<template>
  <div class="container">
    <div>{{title}}</div>
    <div>{{test1}}</div>
    <div>{{test2}}</div>
    <div>{{name}}</div>
    <div>{{p1}}</div>
    <div>{{m1}}</div>
    <div v-if="showStatus">v-if test</div>
    <Child
      :test1="test1"
      :test2="test2"
      :p1="p1"
      v-model="m1"
      v-on:update:p1="changeP1"
    ></Child>
    <div>
      ref test<input ref="input">
    </div>
    <div>
      <button @click="changeData">changeData</button>
    </div>
    <div>
      <button @click="name='set computed val'">set Computed val</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import Child from '@/components/Child';
import { Route } from 'vue-router';
import Log from '../utils/decorator/log';

// 添加vue router生命周期
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);

@Component({
  // 组件引入
  components: { Child },
  // 监听watch
  watch: {
    test1(val: string) {
      console.log(`watch test1 change:${val}`);
    },
  },
})
export default class Test extends Vue {
  // data数据声明
  title = 'old title';

  test1 = '123';

  test2 = [1, 2, 3];

  showStatus = true;

  p1 = 'p1 text';

  m1 = 'v-module val';

  /**
   * provide生成数据
   */
  @Provide() provideData = this.test2;

  // 计算属性
  get name(): string {
    return `计算属性展示${this.test1}`;
  }

  // 计算属性赋值
  set name(val: string) {
    this.test1 = val;
  }

  /**
   * $refs使用
   * !非空断言，忽略null和undefined
   * 注意类型注释，不是值
   */
  $refs!: {
    input: HTMLInputElement
  }

  /**
   * 事件绑定
   * 不能使用箭头函数
   */
  @Log
  changeData(): void {
    this.test1 = 'new props test';
    this.test2.push(4);
    this.showStatus = false;
  }

  changeP1(v: string): void{
    this.p1 = v;
  }

  // 生命周期
  mounted(): void {
    console.log('mounted');
    console.log(this.$refs);
    this.$refs.input.focus();
  }

  // vue router生命周期
  beforeRouteEnter(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteEnter');
    next();
  }
}
</script>

<style>
  .container div {
    margin: '20px'
  }
</style>
