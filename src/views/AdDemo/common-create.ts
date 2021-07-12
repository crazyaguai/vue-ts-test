import { VNode, CreateElement } from 'vue';
import { Vue, Component } from 'vue-property-decorator';
import isEqual from 'lodash/isEqual';
import cloneDeep from 'lodash/cloneDeep';

// 缓存prop，避免由于prop的引用发生变化而触发render
const propsCache: any = {};

const desctryContextFactory = (func: any) => (...args: any[]) => func.call(null, ...args);

@Component
export default class CommonCreate extends Vue {
  // store中的state
  get state(): any {
    return {};
  }

  // store中的getters
  get getters(): any {
    return {};
  }

  renderModules(h: CreateElement, initModules = {}): VNode {
    const { getters, state } = this;
    const getRenderList = (modules: any) => {
      const modulesComponent: any = [];
      Object.keys(modules).forEach((componentKey: string) => {
        const module = modules[componentKey];
        let children: any = null;
        if (module?.children) {
          children = getRenderList(module?.children);
        }

        const configProps = module.props || {};
        const componentProps = module.component.options?.props || module.component?.props || {};
        propsCache[componentKey] = propsCache[componentKey] || {};
        Object.keys(configProps).forEach((propsKey) => {
          if (propsKey in componentProps) {
            const getConfigProps = configProps[propsKey];
            if (typeof getConfigProps === 'function') { // 由 state、getter生成数据
              const propsValue = getConfigProps(state, getters);
              console.log('123', propsValue);
              if (typeof propsValue === 'object') { // 返回对象数据
                const cachePropsVal = propsCache[componentKey][propsKey]; // 已缓存的数据
                if (cachePropsVal && isEqual(cachePropsVal, propsValue)) { // 缓存对象数据没有改变，不更新
                  return;
                }
                // 使用propsCache缓存，防止propsValue生成新的对象，导致引用变化更新
                // cloneDeep，防止直接更新props对象，导致propsCache缓存数据改变
                // Vue.observable，添加响应式，保证修改对象相关值后，视图更新，即直接更新props对象，可以更新视图
                propsCache[componentKey][propsKey] = Vue.observable(cloneDeep(propsValue));
                // propsCache[componentKey][propsKey] = cloneDeep(Vue.observable(propsValue)); // 项目使用方案
              } else if (typeof propsValue === 'function') {
                propsCache[componentKey][propsKey] = desctryContextFactory(propsValue);
              } else {
                propsCache[componentKey][propsKey] = propsValue;
              }
            } else {
              propsCache[componentKey][propsKey] = getConfigProps;
            }
          } else {
            console.warn(`组件中不存在module中的props${propsKey}`);
          }
        });

        modulesComponent.push(h(module.component, {
          props: {
            ...propsCache[componentKey],
          },
        }, children));
      });
      return modulesComponent;
    };
    const res: any = getRenderList(initModules);
    return res;
  }
}
