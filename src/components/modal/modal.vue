<template>
  <transition :duration="550" name="nested">
    <!-- <div
      v-if="store.show"
      class="fixed left-24 top-8 h-80 w-80 overflow-hidden rounded-3xl border-8 border-gray-600"
    >
      <div class="z-10 h-full w-full overflow-hidden bg-[#F6F8FC]"> -->
    <div v-if="store.show" class="fixed inset-0 z-10 overflow-y-auto">
      <div class="min-h-screen overflow-y-auto bg-[#F6F8FC] z-10 p-4 flex items-center">
        <button
          @click="store.toggleShow"
          class="absolute left-4 top-4 text-gray-500 hover:text-gray-700 focus:outline-none"
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
        <div class="inner container mx-auto px-10 lg:px-32">
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
          <div class="h-full py-12 lg:grid lg:grid-cols-2 lg:gap-4">
            <div class="grid grid-cols-3 gap-4">
              <div>
                <h1 class="mb-4 font-bold">Dashboards</h1>
                <ul>
                  <li class="mb-4">
                    <router-link
                      to="/"
                      class="cursor-pointer font-bold text-slate-400 hover:text-green-400"
                      >start
                    </router-link>
                  </li>
                  <li class="mb-4">
                    <router-link
                      to="/test"
                      class="cursor-pointer font-bold text-slate-400 hover:text-green-400"
                      >test
                    </router-link>
                  </li>
                  <li class="mb-4">
                    <router-link
                      to="/"
                      class="cursor-pointer font-bold text-slate-400 hover:text-green-400"
                      >start
                    </router-link>
                  </li>
                </ul>
              </div>
              <div>
                <h1 class="mb-4 font-bold">Apps</h1>
                <ul>
                  <li class="mb-4">
                    <router-link
                      to="/aiChat"
                      class="cursor-pointer font-bold text-slate-400 hover:text-green-400"
                      >aiChat
                    </router-link>
                  </li>
                  <li class="mb-4">
                    <router-link
                      to="/"
                      class="cursor-pointer font-bold text-slate-400 hover:text-green-400"
                      >start
                    </router-link>
                  </li>
                  <li class="mb-4">
                    <router-link
                      to="/"
                      class="cursor-pointer font-bold text-slate-400 hover:text-green-400"
                      >start
                    </router-link>
                  </li>
                </ul>
              </div>
              <div>
                <h1 class="mb-4 font-bold">Dashboards</h1>
                <ul>
                  <li class="mb-4">
                    <router-link
                      to="/"
                      class="cursor-pointer font-bold text-slate-400 hover:text-green-400"
                      >start
                    </router-link>
                  </li>
                  <li class="mb-4">
                    <router-link
                      to="/test"
                      class="cursor-pointer font-bold text-slate-400 hover:text-green-400"
                      >test
                    </router-link>
                  </li>
                  <li class="mb-4">
                    <router-link
                      to="/"
                      class="cursor-pointer font-bold text-slate-400 hover:text-green-400"
                      >start
                    </router-link>
                  </li>
                </ul>
              </div>
              <div>
                <h1 class="mb-4 font-bold">Dashboards</h1>
                <ul>
                  <li class="mb-4">
                    <router-link
                      to="/"
                      class="cursor-pointer font-bold text-slate-400 hover:text-green-400"
                      >start
                    </router-link>
                  </li>
                  <li class="mb-4">
                    <router-link
                      to="/test"
                      class="cursor-pointer font-bold text-slate-400 hover:text-green-400"
                      >test
                    </router-link>
                  </li>
                  <li class="mb-4">
                    <router-link
                      to="/"
                      class="cursor-pointer font-bold text-slate-400 hover:text-green-400"
                      >start
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h1 class="mb-8 font-bold">Quick Links</h1>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <!-- 1 -->
                <router-link
                  to="/aiChat"
                  class="mb-4 flex min-h-[125px] cursor-pointer flex-col items-center justify-center rounded-xl bg-[#F1FAFF] p-4 text-center hover:text-green-400"
                >
                  <h3 class="font-bold">ai对话</h3>
                  <p class="text-sm text-[#B1B4BD]">first version</p>
                </router-link>
                <!-- 2 -->
                <a
                  class="mb-4 flex min-h-[125px] flex-col items-center justify-center rounded-xl bg-[#FFEFF3] p-4 text-center"
                >
                  <h3 class="font-bold">ai对话</h3>
                  <p class="text-sm text-[#B1B4BD]">first version</p>
                </a>
                <!-- 3 -->
                <a
                  class="mb-4 flex min-h-[125px] flex-col items-center justify-center rounded-xl bg-[#FFF8DD] p-4 text-center"
                >
                  <h3 class="font-bold">ai对话</h3>
                  <p class="text-sm text-[#B1B4BD]">first version</p>
                </a>
              </div>
              <div class="grid grid-flow-col grid-rows-2 gap-x-4">
                <!-- 4 -->
                <a
                  class="col-span-2 row-span-1 mb-4 flex min-h-[125px] flex-col items-center justify-center rounded-xl bg-[#E4FFF4] p-4 text-center"
                >
                  <h3 class="font-bold">ai对话</h3>
                  <p class="text-sm text-[#B1B4BD]">first version</p>
                </a>
                <div class="col-span-2 grid grid-cols-subgrid">
                  <!-- 5 -->
                  <a
                    class="mb-4 flex min-h-[125px] flex-col items-center justify-center rounded-xl bg-[#FFF8DD] p-4 text-center"
                  >
                    <h3 class="font-bold">ai对话</h3>
                    <p class="text-sm text-[#B1B4BD]">first version</p>
                  </a>
                  <!-- 6 -->
                  <a
                    class="mb-4 flex min-h-[125px] flex-col items-center justify-center rounded-xl bg-[#F1FAFF] p-4 text-center"
                  >
                    <h3 class="font-bold">ai对话</h3>
                    <p class="text-sm text-[#B1B4BD]">first version</p>
                  </a>
                </div>
                <!-- 7 -->
                <a
                  class="row-span-2 mb-4 flex min-h-[250px] flex-col items-center justify-center rounded-xl bg-[#F6F1FC] p-4 text-center"
                >
                  <h3 class="font-bold">ai对话</h3>
                  <p class="text-sm text-[#B1B4BD]">first version</p>
                </a>
              </div>
            </div>
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
@import "../../assets/components/header.css";
</style>
