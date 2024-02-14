<template>
  <div
    class="flex flex-col gap-4 py-4 max-sm:pt-20 sm:max-lg:pl-40 lg:gap-8 lg:py-8 lg:pl-64"
  >
    <!-- begin 1 -->
    <!-- <article class="flex items-center gap-4 lg:gap-8">
      <div class="w-1/3 min-w-[100px] max-md:hidden">
        <div class="mb-2">
          <h2 class="text-2xl">AI-Chat</h2>
          talk to AI Image
        </div>
        <div class="flex flex-col">
          <router-link to="/tutorialChat" class="hover:line-through"
            >Click on the picture to enter the tutorial</router-link
          >
          <router-link to="/aiChat" class="hover:line-through"
            >Click here to enter the function</router-link
          >
        </div>
      </div>
      <div class="bg-slate-600 md:w-2/3 rounded-3xl">
        <a class="cursor-pointer select-none">
          <img
            src="../assets/img/0797.png"
            class="max-w-full rounded-3xl"
          />
        </a>
      </div>
    </article> -->
    <!-- begin 2 -->
    <article class="flex items-end gap-4 lg:gap-8">
      <div class="rounded-br-3xl bg-slate-600 md:w-2/3">
        <a class="cursor-pointer select-none">
          <img src="../assets/img/2.jpg" class="max-w-full rounded-br-3xl" />
        </a>
      </div>
      <div class="w-1/3 min-w-[100px] max-md:hidden">
        <div class="mb-2">
          <h2 class="text-2xl">AI-Chat</h2>
          talk to AI Image
        </div>
        <div>
          <div class="flex">Click on the picture to enter the tutorial</div>
          <router-link to="/aiChat" class="decoration-sky-500 underline decoration-4"
            >Click here to enter the function</router-link
          >
        </div>
      </div>
    </article>
    <!-- begin 3 -->
    <article class="flex items-end gap-4 lg:gap-8">
      <div class="w-1/3 min-w-[100px] max-md:hidden">
        <div class="mb-2">
          <h2 class="text-2xl">AI-Chat</h2>
          talk to AI Image
        </div>
        <div>
          <div class="flex">Click on the picture to enter the tutorial</div>
          <router-link to="/aiChat" class="decoration-pink-500 underline decoration-4"
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
          <h2 class="text-2xl">AI-Chat</h2>
          talk to AI Image
        </div>
        <div>
          <div class="flex">Click on the picture to enter the tutorial</div>
          <router-link
            to="/aiChat"
            class="decoration-indigo-500 underline decoration-4"
            >Click here to enter the function</router-link
          >
        </div>
      </div>
    </article>
  </div>
</template>
<script setup>
import { ref } from "vue";
</script>
