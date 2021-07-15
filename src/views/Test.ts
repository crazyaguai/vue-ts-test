import { VNode, CreateElement } from 'vue';
import { Vue, Component } from 'vue-property-decorator';
import Child from '@/components/Child';
import DefaultComponentTest from '@/components/defaultComponentTest/index.vue';

@Component({
  components: { Child },
})
export default class Test extends Vue {
  title = 'old title';

  test1 = 'old props test';

  changePropData(): void {
    console.log('123');
    this.test1 = 'new props test';
  }

  render(h: CreateElement, ctx: undefined): VNode {
    console.log(ctx);
    return h('div', {}, [
      this.test1,
      // h(Child, { props: { test1: this.test1 } }),
      h('button', { on: { click: this.changePropData } }, ['chengePropData']),
      h(DefaultComponentTest, {}, []),
    ]);
  }
}
