<template>
  <div class="container">
    app test
    <div>{{count}}</div>
    <div>{{p1}}</div>
    <div>{{p2}}</div>
    <div>{{p3}}</div>
    <div>
      <button @click="count++">add count</button>
      <button @click="changeS1Val">chenge state s1 val</button>
      <button @click="changeP3Val">chenge state p3 val</button>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AppTest extends Vue {
  count = 0

  @Prop({ type: String }) readonly p1!: string

  @Prop() readonly p2!: any

  @Prop() p3!: any

  changeS1Val(): void {
    this.$store.commit('chengS1');
  }

  changeP3Val(): void {
    this.p3.a.b = '1';
  }
}
</script>

<style lang="css">
</style>
