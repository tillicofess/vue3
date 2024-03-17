<template>
  <transition :duration="550" name="nested">
    <div
      v-if="store.show"
      class="fixed left-4 right-0 top-0 z-20 overflow-y-auto"
      :class="{
        'sm:left-16': !store.sidebarCollapsed,
        'sm:left-40': store.sidebarCollapsed,
      }"
    >
      <button
        @click="store.toggleShow"
        class="absolute left-4 top-8 text-gray-500 hover:text-gray-700 focus:outline-none sm:hidden"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <div class="mr-4 flex min-h-screen flex-col bg-white">
        <div class="mt-4 flex"></div>
        <div
          class="mb-4 flex flex-1 rounded-3xl bg-emerald-300 bg-opacity-80 backdrop-blur-lg"
        >
          <div class="ml-8 mt-8 flex w-1/2 flex-col gap-8">
            <router-link
              to="/aiChat"
              target="_blank"
              class="cursor-pointer select-none text-3xl text-black decoration-indigo-500 decoration-4 hover:text-white"
              >{{ $t("chat") }}
            </router-link>
            <div>1</div>
            <div>1</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import { store } from "../../../store.js";
</script>

<style scoped>
/* Your scoped styles go here */
@import "../../assets/components/modal.css";
</style>
