<template>
  <div class="flex min-h-screen">
    <Header />
    <div
      class="my-2 flex min-h-screen flex-1 flex-col"
      :class="{
        'sm:ml-16': !store.sidebarCollapsed,
        'sm:ml-40': store.sidebarCollapsed,
      }"
    >
      <div class="flex flex-col bg-white p-8">
        <div class="flex gap-4 border-b border-gray-600 pb-4">
          <h3
            class="cursor-pointer text-xl font-semibold leading-6"
            :class="{ 'text-emerald-300': currentpage === 1 }"
            @click="toChat"
          >
            Chat
          </h3>
          <h3
            class="cursor-pointer text-xl font-semibold leading-6"
            :class="{ 'text-emerald-300': currentpage === 2 }"
            @click="toSecond"
          >
            Second
          </h3>
          <h3
            class="cursor-pointer text-xl font-semibold leading-6"
            :class="{ 'text-emerald-300': currentpage === 3 }"
            @click="toThird"
          >
            Third
          </h3>
        </div>
        <div class="" v-if="currentpage === 1">
          <div class="my-8 grid gap-4 lg:max-w-5xl">
            <!-- 1 -->
            <div class="flex flex-col gap-4 overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="w-full object-cover"
                  src="../../../assets/img/01.png"
                  alt=""
                />
              </div>
              <div class="flex flex-1 flex-col justify-between">
                <div class="flex-1">
                  <div class="block">
                    <h3
                      class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600"
                    >
                      chat
                    </h3>
                    <p class="mt-4 text-lg font-normal text-gray-500">
                      和你创造或默认的形象通过输入栏进行对话
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 2 -->
            <div class="flex flex-col gap-4 overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="w-full object-cover"
                  src="../../../assets/img/02.png"
                  alt=""
                />
              </div>
              <div class="flex flex-1 flex-col justify-between">
                <div class="flex-1">
                  <div class="block">
                    <h3
                      class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600"
                    >
                      create/save/basic
                    </h3>
                    <p class="mt-4 text-lg font-normal text-gray-500">
                      Filling text so you can see how it looks like with text.
                      Did I said text?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto max-w-7xl" v-if="currentpage === 2">
          <div
            class="mx-auto mt-8 grid max-w-lg gap-4 lg:max-w-none lg:grid-cols-4"
          >
            <!-- 1 -->
            <div class="mb-6 flex flex-col overflow-hidden lg:col-span-2">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full rounded-lg object-cover"
                  src="../../../assets/img/1.png"
                  alt=""
                />
              </div>
              <div class="flex flex-1 flex-col justify-between">
                <div class="flex-1">
                  <div class="flex space-x-1 pt-6 text-sm text-gray-500">
                    <time datetime="2020-03-10"> Mar 10, 2020 </time>
                    <span aria-hidden="true"> · </span>
                    <span> 4 min read </span>
                  </div>
                  <div class="mt-2 block space-y-6">
                    <h3
                      class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600"
                    >
                      Typography on app.
                    </h3>
                    <p class="text-lg font-normal text-gray-500">
                      Filling text so you can see how it looks like with text.
                      Did I said text?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 2 -->
            <div class="mb-6 flex flex-col overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full rounded-lg object-cover"
                  src="../../../assets/img/1.png"
                  alt=""
                />
              </div>
              <div class="flex flex-1 flex-col justify-between">
                <div class="flex-1">
                  <div class="flex space-x-1 pt-6 text-sm text-gray-500">
                    <time datetime="2020-03-10"> Mar 10, 2020 </time>
                    <span aria-hidden="true"> · </span>
                    <span> 4 min read </span>
                  </div>
                  <div class="mt-2 block space-y-6">
                    <h3
                      class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600"
                    >
                      Typography on app.
                    </h3>
                    <p class="text-lg font-normal text-gray-500">
                      Filling text so you can see how it looks like with text.
                      Did I said text?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 3 -->
            <div class="mb-6 flex flex-col overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full rounded-lg object-cover"
                  src="../../../assets/img/1.png"
                  alt=""
                />
              </div>
              <div class="flex flex-1 flex-col justify-between">
                <div class="flex-1">
                  <div class="flex space-x-1 pt-6 text-sm text-gray-500">
                    <time datetime="2020-03-10"> Mar 10, 2020 </time>
                    <span aria-hidden="true"> · </span>
                    <span> 4 min read </span>
                  </div>
                  <div class="mt-2 block space-y-6">
                    <h3
                      class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600"
                    >
                      Typography on app.
                    </h3>
                    <p class="text-lg font-normal text-gray-500">
                      Filling text so you can see how it looks like with text.
                      Did I said text?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { store } from "../../../../store.js";
import Header from "../../header/header.vue";
const currentpage = ref(1);
const toChat = () => {
  currentpage.value = 1;
};
const toSecond = () => {
  currentpage.value = 2;
};
const toThird = () => {
  currentpage.value = 3;
};
</script>
<style scoped></style>
