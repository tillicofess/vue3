<template>
  <div class="flex min-h-screen bg-gray-200 px-4 lg:px-8">
    <Header />
    <div
      class="my-4 flex min-h-screen flex-1 flex-col max-sm:pt-16 sm:ml-32 lg:my-8"
    >
      <content />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import content from "@/components/homeP.vue";
import Header from "../header/header.vue";
</script>
<style scoped></style>
