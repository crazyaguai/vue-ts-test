<template>
  <div class="container">
    <h3>slot test</h3>
    <Father>
      <template v-slot:s1>
        <div>slot 1</div>
      </template>
      <template v-slot:s2>
        <div>slot 2</div>
      </template>
    </Father>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Father from './components/Father.vue';

@Component({
  components: {
    Father,
  },
})
export default class SlotTest extends Vue {
}
</script>

<style lang="css">
</style>
