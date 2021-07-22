<template>
  <div class="container">
    <slot name="s1" />
    <slot name="s2" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Father extends Vue {
}
</script>

<style lang="css">
</style>
