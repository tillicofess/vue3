<template>
  <div
    class="fixed flex gap-3 bg-gray-200 max-sm:left-0 max-sm:right-0 max-sm:items-center max-sm:p-4 sm:bottom-0 sm:top-0 sm:w-32 sm:flex-col sm:max-lg:top-0 sm:max-lg:py-4 lg:py-8"
  >
    <span
      v-if="$route.path === '/'"
      class="flex select-none text-3xl font-bold sm:hidden"
      >Start.</span
    >
    <span
      v-if="$route.path === '/aiChat'"
      class="flex select-none text-3xl font-bold sm:hidden"
      >aiChat</span
    >
    <span
      v-if="$route.path === '/login'"
      class="flex select-none text-3xl font-bold sm:hidden"
      >login</span
    >
    <router-link
      to="/"
      class="cursor-pointer select-none text-3xl font-bold decoration-indigo-500 decoration-4 hover:line-through max-sm:hidden"
      :class="{ 'text-emerald-500': $route.path === '/' }"
      >Start.
    </router-link>
    <router-link
      to="/aiChat"
      class="cursor-pointer select-none text-3xl font-bold decoration-indigo-500 decoration-4 hover:line-through max-sm:hidden"
      :class="{ 'text-emerald-500': $route.path === '/aiChat' }"
      >aiChat
    </router-link>
    <div class="flex flex-1 justify-end">
      <a
        class="cursor-pointer select-none text-3xl font-bold decoration-indigo-500 decoration-4 hover:line-through sm:hidden"
        @click="store.toggleShow"
        >Work</a
      >
    </div>
    <footer class="max-sm:hidden">
      <div class="mb-16 grid gap-3">
        <router-link
          to="/login"
          class="cursor-pointer select-none text-3xl font-bold decoration-indigo-500 decoration-4 hover:line-through"
          :class="{ 'text-emerald-500': $route.path === '/login' }"
          >Login
        </router-link>
        <router-link
          to="/"
          class="cursor-pointer select-none text-3xl font-bold decoration-indigo-500 decoration-4 hover:line-through"
          :class="{ 'text-emerald-500': $route.path === '/setting' }"
          >Setting
        </router-link>
      </div>
      <div class="pb-2">
        <h2 class="text-2xl">Contact</h2>
        <h2 class="text-xl">us</h2>
      </div>
      <div>
        <div>ArtMind团队</div>
        <div class="break-all pr-4">2820668705@qq.com</div>
      </div>
    </footer>
    <modal />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { store } from "../../../store.js";
import modal from "../modal/modal.vue";
</script>

<style scoped>
@import "../../assets/components/header.css";
</style>
