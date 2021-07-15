import { VueConstructor } from 'vue';

export default {
  install(Vue: VueConstructor): void {
    Vue.mixin({
      props: ['componentKeys'],
      created(this: any): void {
        const keys = this.componentKeys || [];
        keys.forEach((k: any) => {
          this.$watch(k, (val: any) => {
            this.$store.commit('changeKeysData', { key: k, val });
          }, {
            deep: true,
          });
          this.$watch(`$store.state.keysData.${k}`, (val: any) => {
            this[k] = val;
          }, {
            immediate: true,
            deep: true,
          });
        });
      },
    });
  },
};
