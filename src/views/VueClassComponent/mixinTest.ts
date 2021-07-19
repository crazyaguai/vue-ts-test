import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class mixinTest extends Vue {
  created(): void{
    console.log('mixin created');
  }
}
