import { VNode, CreateElement, VNodeChildren } from 'vue';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class VueRenderCreateElement extends Vue {
  count = 1

  inputVal = '123'

  addCount(e: Event): void {
    console.log(e);
    this.count += 1;
  }

  inputBlur(e: Event): void {
    console.log(e);
  }

  $refs!: {
    inputRef: HTMLInputElement
  }

  mounted(): void {
    console.log(this.$refs.inputRef);
  }

  render(h: CreateElement): VNode {
    return h('div', {}, [
      h('h3', 'test render with createElement'),
      h('div', {}, ['count=', this.count] as VNodeChildren),
      h('button', {
        on: {
          click: this.addCount,
        },
      }, 'count+1'),
      h('br'),
      h('div', this.inputVal),
      h('input', {
        ref: 'inputRef',
        attrs: {
          placeholder: '请输入',
          value: this.inputVal,
        },
        on: {
          blur: this.inputBlur,
          input: (e: any) => {
            this.inputVal = e?.target?.value;
          },
        },
        style: {
          color: '#afafaf',
        },
      }),
    ]);
  }
}
