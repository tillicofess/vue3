<template>
  <div
    class="fixed z-10 flex overflow-x-hidden sm:bottom-0 sm:top-0 sm:flex-col sm:py-8 sm:max-lg:top-0"
    :class="{
      'sm:w-16': !store.sidebarCollapsed,
      'sm:w-40': store.sidebarCollapsed,
    }"
  >
    <div class="mb-4 flex w-16 justify-center text-emerald-500 max-sm:hidden">
      <a class="cursor-pointer select-none" @click="store.toggleSidebar"
        ><v-icon
          name="bi-grid-fill"
          class="h-10 w-10 rounded-full p-2 hover:bg-white"
      /></a>
    </div>
    <!-- begin default -->
    <router-link
      to="/"
      class="text-md mx-2 flex h-12 cursor-pointer select-none items-center gap-4 whitespace-nowrap rounded-3xl max-sm:hidden"
      :class="{
        'bg-emerald-300': $route.path === '/',
        'text-white': $route.path === '/',
        'text-emerald-500': $route.path !== '/',
      }"
      ><v-icon name="hi-home" class="w-16" />
      <span
        :class="{
          hidden: !store.sidebarCollapsed,
        }"
        >{{ $t("home") }}</span
      >
    </router-link>
    <!-- begin chat -->
    <router-link
      to="/tutorialChat"
      class="text-md mx-2 flex h-12 cursor-pointer select-none items-center gap-4 whitespace-nowrap rounded-3xl max-sm:hidden"
      :class="{
        'bg-emerald-300': $route.path === '/tutorialChat',
        'text-white': $route.path === '/tutorialChat',
        'text-emerald-500': $route.path !== '/tutorialChat',
      }"
      ><v-icon name="hi-book-open" class="w-16" />
      <span
        :class="{
          hidden: !store.sidebarCollapsed,
        }"
        >{{ $t("docs") }}</span
      >
    </router-link>
    <!-- begin function -->
    <a
      class="text-md mx-2 flex h-12 cursor-pointer select-none items-center gap-4 whitespace-nowrap text-emerald-500 max-sm:hidden"
      :class="{ hidden: store.show === true }"
      @click="store.toggleShow"
      ><v-icon name="hi-puzzle" class="w-16" /><span
        :class="{
          hidden: !store.sidebarCollapsed,
        }"
        >{{ $t("function") }}</span
      ></a
    >
    <a
      class="text-md mx-2 flex h-12 cursor-pointer select-none items-center gap-4 whitespace-nowrap text-purple-500 max-sm:hidden"
      :class="{ hidden: store.show === false }"
      @click="store.toggleShow"
      ><v-icon name="hi-puzzle" class="w-16" /><span
        :class="{
          hidden: !store.sidebarCollapsed,
        }"
        >{{ $t("close") }}</span
      ></a
    >
    <!-- begin setting -->
    <router-link
      to="/setting"
      class="text-md mx-2 flex h-12 cursor-pointer select-none items-center gap-4 whitespace-nowrap rounded-3xl max-sm:hidden"
      :class="{
        'bg-emerald-300': $route.path === '/setting',
        'text-white': $route.path === '/setting',
        'text-emerald-500': $route.path !== '/setting',
      }"
      ><v-icon name="hi-cog" class="w-16" />
      <span
        :class="{
          hidden: !store.sidebarCollapsed,
        }"
        >{{ $t("setting") }}</span
      >
    </router-link>
    <!-- begin data -->
    <router-link
      to="/data"
      class="text-md mx-2 flex h-12 cursor-pointer select-none items-center gap-4 whitespace-nowrap rounded-3xl max-sm:hidden"
      :class="{
        'bg-emerald-300': $route.path === '/data',
        'text-white': $route.path === '/data',
        'text-emerald-500': $route.path !== '/data',
      }"
      ><v-icon name="hi-desktop-computer" class="w-16" />
      <span
        :class="{
          hidden: !store.sidebarCollapsed,
        }"
        >{{ $t("data") }}</span
      >
    </router-link>
    <div class="flex flex-1 justify-end"></div>
    <modal />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { store } from "../../../store.js";
import modal from "../modal/modal.vue";
</script>

<style scoped>
@import "../../assets/components/modal.css";
</style>