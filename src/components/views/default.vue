<template>
  <div class="flex min-h-screen">
    <Header />
    <div class="flex min-h-screen flex-1 flex-col" :class="{
      'sm:ml-0': !store.sidebarCollapsed,
      'sm:ml-40': store.sidebarCollapsed,
    }">
      <content />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { store } from "../../../store.js";

import content from "@/components/homeP.vue";
import Header from "../header/header.vue";
</script>
<style scoped></style>
