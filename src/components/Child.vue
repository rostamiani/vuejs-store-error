<template>
  <div class="child">I'm a child component</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class AppChild extends Vue {
  created() {
    console.log("Child store: ", this.$store);
  }
}
</script>

<style scoped>
.child {
  margin: 10px;
  padding: 10px;
  border: 1px solid gray;
}
</style>
