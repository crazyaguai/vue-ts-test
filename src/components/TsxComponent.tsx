import { VNode, CreateElement } from 'vue';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TsxComponent extends Vue {
  name = 'vue tsx 组件'

  inputVal = 'jsx v-module test'

  jsxClick(): void {
    console.log('jsx click');
  }

  render(h: CreateElement): VNode {
    console.log(h);
    return (
      <div>
        <div>{this.name}</div>
        <div>
          <input type="text" vModel={this.inputVal} />{this.inputVal}
        </div>
        <div>
          {/* <button vOn:click={this.jsxClick}>jsx click</button> */}
        </div>
      </div>
    );
  }
}
