<template>
  <div class="parent">
    <h3>This is the parent component</h3>
    <app-child></app-child>
    <app-child></app-child>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppChild from "./Child.vue";

@Component({
  components: { AppChild }
})
export default class AppParent extends Vue {
  created() {
    console.log("Parent store: ", this.$store);
  }
}
</script>

