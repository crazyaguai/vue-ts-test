<template>
  <div class="container">
    <h3>ad demo 2</h3>
    <div v-for="(module,index) in modules" :key="index">
      <component
        :is="module.ref"
        :modules="modules"
        :config="module"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import getCreativeModules from './modules/modules';

const modules = getCreativeModules();

const components: any = {};

// 遍历模块，加载模块组件
Object.keys(modules).forEach((moduleName) => {
  components[moduleName] = modules[moduleName].module;
});

@Component({
  components,
})
export default class AdDemo2 extends Vue {
  modules = []

  created(): void {
    this.modules = modules;
  }
}
</script>

<style lang="css">
</style>
