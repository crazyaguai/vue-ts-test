import { VNode, CreateElement } from 'vue';
import { Component, Mixins } from 'vue-property-decorator';
import CommonCreate from './common-create';
import initModules from './modules';

@Component
export default class AdDemo extends Mixins(CommonCreate) {
  title = 'AD DEMO'

  get getters(): any {
    return this.$store.getters;
  }

  get state(): any {
    return this.$store.state;
  }

  render(h: CreateElement): VNode {
    return (
      <div>
        {h('h1', this.title)}
        {this.renderModules(h, initModules)}
      </div>
    );
  }

  mounted() : void {
    this.initRelation(initModules);
  }
}
