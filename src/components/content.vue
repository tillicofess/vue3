<template>
  <div class="flex flex-col gap-4 max-sm:pt-20 lg:gap-8 sm:max-lg:pl-40 lg:pl-64 py-4 lg:py-8">
    <!-- begin 1 -->
    <article class="flex items-center gap-4 lg:gap-8">
      <div class="w-1/3 min-w-[100px] max-md:hidden">
        <div class="mb-2">
          <h2 class="text-2xl">AI-Chat</h2>
          talk to AI Image
        </div>
        <div>
          <div class="flex">Click on the picture to enter the tutorial</div>
          <router-link to="/aichat"
            >Click here to enter the function</router-link
          >
        </div>
      </div>
      <div class="bg-slate-600 md:w-2/3">
        <a class="cursor-pointer">
          <img
            src="../assets/img/0797.png"
            class="max-w-full"
          />
        </a>
      </div>
    </article>
    <!-- begin 2 -->
    <article class="flex items-center gap-4 lg:gap-8">
      <div class="bg-slate-600 md:w-2/3">
        <a class="cursor-pointer">
          <img
            src="../assets/img/2.jpg"
            class=" max-w-full"
          />
        </a>
      </div>
      <div class="w-1/3 min-w-[100px] max-md:hidden">
        <div class="mb-2">
          <h2 class="text-2xl">AI-Chat</h2>
          talk to AI Image
        </div>
        <div>
          <div class="flex">Click on the picture to enter the tutorial</div>
          <div class="flex">Click here to enter the function</div>
        </div>
      </div>
    </article>
        <!-- begin 3 -->
        <article class="flex items-center gap-4 lg:gap-8">
      <div class="w-1/3 min-w-[100px] max-md:hidden">
        <div class="mb-2">
          <h2 class="text-2xl">AI-Chat</h2>
          talk to AI Image
        </div>
        <div>
          <div class="flex">Click on the picture to enter the tutorial</div>
          <router-link to="/aichat"
            >Click here to enter the function</router-link
          >
        </div>
      </div>
      <div class="bg-slate-600 md:w-2/3">
        <a class="cursor-pointer">
          <img
            src="../assets/img/3.png"
            class=" max-w-full"
          />
        </a>
      </div>
    </article>
    <!-- begin 4 -->
    <article class="flex items-center gap-4 lg:gap-8">
      <div class="bg-slate-600 md:w-2/3">
        <a class="cursor-pointer">
          <img
            src="../assets/img/5.png"
            class="  max-w-full"
          />
        </a>
      </div>
      <div class="w-1/3 min-w-[100px] max-md:hidden">
        <div class="mb-2">
          <h2 class="text-2xl">AI-Chat</h2>
          talk to AI Image
        </div>
        <div>
          <div class="flex">Click on the picture to enter the tutorial</div>
          <div class="flex">Click here to enter the function</div>
        </div>
      </div>
    </article>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import Header from "@/components/header/header.vue";
</script>
