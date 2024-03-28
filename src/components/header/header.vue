<template>
  <div
    class="fixed left-0 right-0 z-20 flex items-center justify-between bg-white px-4 py-3"
    :class="{ ' shadow-md': isShadow }"
  >
    <div class="p-1 text-xl tracking-widest">
      <router-link to="/" class="">Art Mind</router-link>
    </div>
    <!-- begin default -->
    <div class="flex items-center gap-4 max-sm:hidden">
      <!-- begin chat -->
      <router-link to="/startFun" class="hover:text-purple-400"
      :class="{ 'hidden': $route.path === '/startFun' }">
        <v-icon name="hi-book-open" class="mx-2" />
        <span>{{ $t("docs") }}</span>
      </router-link>
      <!-- begin function -->
      <router-link
        to="/startFun"
        target="_blank"
        class="hover:text-purple-400"
      >
        <v-icon name="hi-puzzle" class="mx-2" />
        <span>{{ $t("function") }}</span>
      </router-link>
      <router-link
        to="/login"
        class="rounded-3xl bg-black px-8 py-1 text-white"
      >
        <span>{{ $t("login in") }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isShadow = ref(false);

const handleScroll = () => {
  const bottomOffset =
    document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
  isShadow.value =
    bottomOffset < document.documentElement.scrollHeight - window.innerHeight;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
@import "../../assets/components/modal.css";
</style>
