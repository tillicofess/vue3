<template>
  <div
    class="fixed flex w-full gap-4 bg-[#FBF9F6] max-sm:items-center max-sm:p-4 sm:w-40 sm:flex-col sm:max-lg:top-4 lg:top-8"
  >
    <header>
      <div class="flex items-center">
        <span class="flex text-2xl font-bold">start.</span>
      </div>
    </header>
    <div>
      <a class="hover:text- cursor-pointer text-2xl" @click="store.toggleShow"
        >all</a
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
import { ref, watch } from "vue";
import { store } from "../../../store.js";
import modal from "../modal/modal.vue";
// const checkboxRef = ref(null);
// const togglecheck = () => {
//   checkboxRef.value.click();
// };
</script>

<style scoped>
@import "../../assets/components/header.css";
</style>
