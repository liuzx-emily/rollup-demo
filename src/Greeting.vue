<template>
  <section class="greeting">
    {{ text }}
    <input type="button" :value="count" @click="count++" />
  </section>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  text: { type: String, default: "hello" },
});
const count = ref(0);
</script>
<style lang="scss" scoped>
.greeting {
  border: 1px solid red;
  input[type="button"] {
    background: yellow;
    border: 1px solid orange;
  }
}
</style>
