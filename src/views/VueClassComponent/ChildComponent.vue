<template>
  <div class="container">
    <h3>child component</h3>
    <div>props data:{{parentTitle}}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';
import mixinTest from './mixinTest';

// 添加vue router生命周期
Component.registerHooks([
]);

/**
 * 定义组件peops
 * 1. 使用vue.extend定义类型
 * 2. 使用 class ChildComponent extends ChildProps 方式继承props配置
 */
const ChildProps = Vue.extend({
  props: {
    parentTitle: String,
  },
});

@Component({
})
export default class ChildComponent extends mixins(ChildProps, mixinTest) {
}
</script>

<style>
</style>
