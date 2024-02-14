<template>
  <div
    class="fixed flex w-full gap-2 bg-gray-200 max-sm:items-center max-sm:p-4 sm:w-40 sm:flex-col sm:max-lg:top-4 lg:top-8"
  >
    <header class="sm:mb-4">
      <div class="flex items-center">
        <span
          v-if="$route.path === '/'"
          class="flex select-none text-3xl font-bold text-gray-400"
          >start.</span
        >
        <span
          v-if="$route.path === '/aiChat'"
          class="flex select-none text-3xl font-bold text-gray-400"
          >aiChat</span
        >
        <span
          v-if="$route.path === '/login'"
          class="flex select-none text-3xl font-bold text-gray-400"
          >login</span
        >
        <span
          v-if="$route.path === '/tutorialChat'"
          class="flex select-none text-3xl font-bold text-gray-400"
          >tutorialChat</span
        >
      </div>
    </header>
    <div>
      <router-link
        to="/"
        class="cursor-pointer text-2xl decoration-indigo-500 decoration-4 hover:line-through select-none"
        :class="{ 'text-gray-400': $route.path === '/' }"
        >start.
      </router-link>
    </div>
    <div>
      <a
        class="cursor-pointer text-2xl decoration-indigo-500 decoration-4 hover:line-through select-none"
        @click="store.toggleShow"
        >work</a
      >
    </div>
    <!-- <div><a class="cursor-pointer text-2xl" @click="togglecheck">light</a></div>
    <input
      ref="checkboxRef"
      type="checkbox"
      value="light"
      class="theme-controller toggle hidden"
    /> -->
    <footer class="bottom-0 w-40 pb-4 max-sm:hidden sm:fixed lg:pb-8">
      <div class="mb-16 grid gap-2">
        <router-link
          to="/login"
          class="cursor-pointer text-2xl decoration-indigo-500 decoration-4 hover:line-through select-none"
          :class="{ 'text-gray-400': $route.path === '/login' }"
          >login
        </router-link>
        <router-link
          to="/"
          class="cursor-pointer text-2xl decoration-indigo-500 decoration-4 hover:line-through select-none"
          :class="{ 'text-gray-400': $route.path === '/setting' }"
          >setting
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
