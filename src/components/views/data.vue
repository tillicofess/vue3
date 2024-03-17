<template>
    <div class="flex min-h-screen">
      <Header />
      <div
        class="flex flex-1 flex-col"
        :class="{
          'sm:ml-16': !store.sidebarCollapsed,
          'sm:ml-40': store.sidebarCollapsed,
        }"
      >
        <div class="mt-4"></div>
        <div class="mb-4 flex flex-1 rounded-3xl bg-white">
          <!-- begin:content -->
          <div></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { store } from "../../../store.js";
  import Header from "../header/header.vue";
  </script>
  
  <style></style>