import { VNode, CreateElement } from 'vue';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TsxComponent extends Vue {
  name = 'vue tsx 组件'

  render(h: CreateElement): VNode {
    console.log(h);
    return <div>{this.name}</div>;
  }
}
