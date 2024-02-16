<template>
  <div>
    <!-- begin 2 -->
    <div class="flex flex-col gap-4 lg:gap-8">
      <article class="flex items-end gap-4 lg:gap-8">
        <div class="rounded-br-3xl bg-slate-600 md:w-2/3">
          <router-link to="/tutorialChat" class=" select-none">
            <img src="../assets/img/2.jpg" class="max-w-full rounded-br-3xl" />
          </router-link>
        </div>
        <div class="w-1/3 min-w-[100px] max-md:hidden">
          <div class="mb-2">
            <h2 class="text-2xl">aiChat</h2>
            talk to AI Image
          </div>
          <div>
            <div class="flex">Click on the picture to enter the tutorial</div>
            <router-link
              to="/aiChat"
              class="underline decoration-sky-500 decoration-4"
              >Click here to enter the function</router-link
            >
          </div>
        </div>
      </article>
      <!-- begin 3 -->
      <article class="flex items-end gap-4 lg:gap-8">
        <div class="w-1/3 min-w-[100px] max-md:hidden">
          <div class="mb-2">
            <h2 class="text-2xl">aiChat</h2>
            talk to AI Image
          </div>
          <div>
            <div class="flex">Click on the picture to enter the tutorial</div>
            <router-link
              to="/aiChat"
              class="underline decoration-pink-500 decoration-4"
              >Click here to enter the function</router-link
            >
          </div>
        </div>
        <div class="rounded-l-3xl bg-slate-600 md:w-2/3">
          <a class="cursor-pointer select-none">
            <img src="../assets/img/3.png" class="max-w-full rounded-l-3xl" />
          </a>
        </div>
      </article>
      <!-- begin 4 -->
      <article class="flex items-end gap-4 lg:gap-8">
        <div class="rounded-tr-3xl bg-slate-600 md:w-2/3">
          <a class="cursor-pointer select-none">
            <img src="../assets/img/5.png" class="max-w-full rounded-tr-3xl" />
          </a>
        </div>
        <div class="w-1/3 min-w-[100px] max-md:hidden">
          <div class="mb-2">
            <h2 class="text-2xl">aiChat</h2>
            talk to AI Image
          </div>
          <div>
            <div class="flex">Click on the picture to enter the tutorial</div>
            <router-link
              to="/aiChat"
              class="underline decoration-indigo-500 decoration-4"
              >Click here to enter the function</router-link
            >
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
</script>
