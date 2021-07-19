import { VNode } from 'vue';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class VueRenderJsx extends Vue {
  count = 1

  inputVal = '123'

  addCount(e: Event): void {
    console.log(e);
    this.count += 1;
  }

  inputBlur(e: Event): void {
    console.log(e);
  }

  inputChange(e: Event & { target: HTMLInputElement }): void {
    console.log(e);
    this.inputVal = e.target.value;
  }

  $refs!: {
    inputRef: HTMLInputElement
  }

  mounted(): void {
    console.log(this.$refs.inputRef);
  }

  render(): VNode {
    const inputConfig = {
      on: {
        blur: this.inputBlur,
        input(): void{
          console.log('input event');
        },
      },
    };
    return (
      <div>
        <div>
          <span>{this.count}</span>
          <button onClick={this.addCount}>+1</button>
        </div>
        <div>
          <span>{this.inputVal}</span>
          <input type="text" value={this.inputVal} onInput={this.inputChange} ref="inputRef" {...inputConfig} />
        </div>
        <div domPropsInnerHTML="123"></div>
      </div>
    );
  }
}
