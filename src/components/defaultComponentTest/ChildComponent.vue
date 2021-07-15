<template>
  <div class="container">
    <div>child component val</div>
    <div>props val:{{data1}}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ChildComponent extends Vue {
  @Prop() data1!: string;

  @Prop() a!: number;

  @Prop() b!: number;

  mounted(): void {
    console.log(this.a);
    console.log(this.b);
  }
}
</script>

<style lang="css">
</style>
