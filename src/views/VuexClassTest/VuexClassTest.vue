<template>
  <div>
    <h3>vuex-class test</h3>
    <div>
      {{totalCount}}
    </div>
    <div>
      {{totalCountAddOne}}
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue, Component,
} from 'vue-property-decorator';
import {
  State, Getter, Action, Mutation,
} from 'vuex-class';

@Component
export default class VuexClassTest extends Vue {
  @State('totalCount') totalCount!: string

  @Getter('totalCountAddOne') totalCountAddOne!: number

  @Mutation('setTotalCount') setTotalCount!: (d: number)=>void

  @Action('changeTotalCount') changeTotalCount!: (d: number)=>void

  mounted(): void{
    this.setTotalCount(3);
    this.changeTotalCount(5);
  }
}
</script>

<style>
</style>
