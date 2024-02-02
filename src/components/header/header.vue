<template>
  <div>
    <header class="p-8">
      <div class="container mx-auto flex h-16 items-center justify-between">
        <div class="flex items-center">
          <button class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md bg-orange-100"
            @click="store.toggleShow">
            <v-icon name="co-koding" class="text-green-300" />
          </button>
          <span class="flex pl-4 text-xl font-bold">start.</span>
        </div>
        <ul class="hidden items-stretch space-x-3 md:flex">
          <li class="flex"></li>
          <li class="flex"></li>
          <li class="flex"></li>
          <li class="flex"></li>
        </ul>
      </div>
    </header>
    <modal />
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { store } from '../../../store.js'
import modal from '../modal/modal.vue'
</script>

<style scoped>
@import "../../assets/components/header.css";
</style>
