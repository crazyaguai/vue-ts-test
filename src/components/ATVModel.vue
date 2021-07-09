<template>
  <div class="container">
    {{mm1}}
    <button @click="mm1='new @vModel val'">change @vModel val</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, VModel } from 'vue-property-decorator';

@Component
export default class ATVModel extends Vue {
  @VModel({ type: String }) mm1!: string
}
</script>

<style lang="css">
</style>
