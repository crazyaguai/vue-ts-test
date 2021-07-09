import { VNode, CreateElement, VNodeChildren } from 'vue';
import {
  Vue, Component, Prop, PropSync, Emit, Model, Watch, Inject, Ref,
} from 'vue-property-decorator';
import ATVModel from './ATVModel.vue';
import TsxComponent from './TsxComponent';

const childProps = Vue.extend({
  // props声明使用Vue.extend
  props: {
    test2: Array,
  },
});

@Component
export default class Child extends childProps {
  title = '子组件';

  vm1 = '@VModel old val';

  /**
   * props声明
   * 需要设置undefined，不能赋值，readonly test1 = '123'，会报错
   * 使用@Prop({ default: 'default value' })设置默认值
   */
  @Prop({ default: 'default value' }) readonly test1!: string;

  @PropSync('p1', { type: String }) syncp1!: string;

  /**
   * 自定义v-module
   * 'change-m1'事件，通过this.$emit或者@emit方式触发
   */
  @Model('change-m1', { type: String }) readonly m1!: string

  /**
   * 自定义事件替代this.$emit
   */
  @Emit('my-event')
  myEvent(val: string): string {
    return val;
  }

  /**
   * inject接受数据
   */
  @Inject('provideData') readonly provideData!: []

  /**
   * watch
   */
  @Watch('m1')
  onM1Change(val: string, oldVal: string): void {
    console.log('m1 change', val, oldVal);
  }

  /**
   * @ref使用
   */
  @Ref() readonly inputRef!: HTMLInputElement

  clickFun(): void {
    this.syncp1 = '456';
    // this.myEvent('456');
    this.$emit('change-m1', 'new v-module val');
  }

  vm1Change(val: string): void {
    this.vm1 = val;
  }

  renderDiv(h:CreateElement, text: unknown): VNode {
    return h('div', {}, [text as VNode]);
  }

  mounted(): void {
    console.log('inputRef', this.inputRef);
    setTimeout(() => {
      this.inputRef.focus();
    }, 1000);
  }

  render(h: CreateElement): VNode {
    return h('div', {}, [
      this.title,
      h(
        'div',
        {
          on: {
            click: this.clickFun,
          },
          style: {
            background: 'yellow',
          },
        },
        [
          this.renderDiv(h, 'child component'),
          this.renderDiv(h, this.test1),
          this.renderDiv(h, this.test2),
          this.renderDiv(h, this.syncp1),
          this.renderDiv(h, this.m1),
          this.renderDiv(h, this.provideData),
          this.renderDiv(h, this.vm1),
          this.renderDiv(h, [
            '@ref test',
            h('input', {
              ref: 'inputRef',
            }, []),
          ]),
          this.renderDiv(h, h(ATVModel, {
            props: {
              value: this.vm1,
            },
            on: {
              input: this.vm1Change,
            },
          })),
          h(TsxComponent, {}),
        ] as VNodeChildren,
      ),
    ]);
  }
}
