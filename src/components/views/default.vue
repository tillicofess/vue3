<template>
  <div class="min-h-screen bg-[#FBF9F6] px-4 md:flex lg:px-8">
    <Header />
    <div>
      <content />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import content from "@/components/content.vue";
import Header from "../header/header.vue";
</script>
<style scoped></style>
