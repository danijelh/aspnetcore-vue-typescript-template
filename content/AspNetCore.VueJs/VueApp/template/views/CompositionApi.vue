<template>
  <div>
    <div class="container">
      <h1 class="title">
        {{ pageTitle }}
      </h1>
      <h2 class="subtitle">Using Vue 3 composition API in Vue 2.</h2>
      <div class="content">
        <p>
          Vue 3 recently reached stable release. However I wouldn't yet
          recommend it for a production use as libraries and other dependencies
          still need to reach stability.
        </p>
        <p>
          This component showcases how you can use Vue 3 composition API with
          Vue 2.
        </p>
        <a
          @click.prevent.stop="changeTitle"
          class="button is-primary is-small shadow"
        >
          Change title
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Using Vue 3 composition API with Vue 2
import { ref, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    let pageTitle = ref("Composition API");

    function changeTitle() {
      pageTitle.value = "Composition API is awesome!";
    }

    return {
      pageTitle,
      changeTitle,
    };
  },
});
</script>

<style scoped>
</style>