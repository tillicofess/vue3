<template>
  <div class="flex h-screen">
    <Header />
    <div
      class="mx-auto mt-[60px] flex h-screen max-w-7xl flex-1 flex-col gap-16 p-8"
    >
      <div class="text-4xl font-bold">components</div>
      <!-- begin:title -->
      <div class="grid max-w-2xl grid-cols-4 gap-2">
        <button
          v-for="button in buttons"
          :key="button.title"
          :class="{
            'rounded-md': true,
            'border-2': true,
            shadow: true,
            transition: true,
            'duration-300': true,
            'bg-white': true,
            'p-4': true,
            'tracking-wide': true,
            'select-none': true,
            'border-black': true,
            'border-l-4': title === button.title,
            'border-b-4': title === button.title,
          }"
          @click="changetitle(button.title)"
          :style="{ backgroundColor: button.color }"
        >
          {{ button.text }}
        </button>
      </div>
      <!-- begin text&img -->
      <div class="flex gap-32 max-md:flex-col max-md:items-center">
        <div class="flex h-96 max-w-96 flex-col justify-center gap-8">
          <div>
            <div class="text-6xl font-bold">{{ currentData.title }}</div>
            <div class="text-xl tracking-wide">
              {{ currentData.text }}
            </div>
          </div>
          <router-link
            :to="currentData.url"
            class="w-40 rounded-md bg-black py-2 text-center text-lg text-white"
          >
            start
          </router-link>
        </div>
        <div
          class="flex min-w-96 select-none justify-end max-md:hidden md:flex-1"
        >
          <img :src="currentImage" class="h-96" />
        </div>
      </div>
      <!-- begin step -->
      <div class="flex flex-col gap-8">
        <div class="text-xl font-bold">step</div>
        <!-- begin:step0-->
        <div
          class="mx-auto grid max-w-5xl gap-8 md:grid-cols-3"
          v-if="title === 0"
        >
          <div
            v-for="(item, index) in itemsTitle0"
            :key="index"
            class="flex flex-col items-center gap-4"
          >
            <img :src="item.image" class="h-60" />
            <span class="text-xl">{{ item.text }}</span>
          </div>
        </div>
        <!-- begin:step1-->
        <div
          class="mx-auto grid max-w-5xl gap-8 md:grid-cols-3"
          v-else-if="title === 1"
        >
          <div
            v-for="(item, index) in itemsTitle1"
            :key="index"
            class="flex flex-col items-center"
          >
            <img :src="item.image" class="h-60" />
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "../header/header.vue";

const title = ref(0);

const buttons = ref([
  { text: "aichat", color: "#E8D5C4", title: 0 },
  { text: "1", color: "#E9B39D", title: 1 },
  { text: "2", color: "#72ACC2", title: 2 },
  { text: "3", color: "#B0DDB5", title: 3 },
]);

const data = [
  {
    title: "ai Chat",
    text: "AI Chat is an innovative platform that leverages artificial intelligence to facilitate seamless and intelligent conversations.",
    url:"/ai"
  },
  {
    title: "Video Generation",
    text: "Someting about 1 someting about 1 someting about 1 someting about 1 someting about 1 someting about 1 someting about 1",
    url:"/aiChat"
  },
  {
    title: "Title 2",
    text: "Someting about 2 someting about 2 someting about 2 someting about 2 someting about 2 someting about 2 someting about 2",
  },
  {
    title: "Title 3",
    text: "Someting about 3 someting about 3 someting about 3 someting about 3 someting about 3 someting about 3 someting about 3",
  },
];

const images = [
  "/src/assets/svg/roller-skating.svg",
  "/src/assets/svg/reading-side.svg",
  "/src/assets/svg/zombieing.svg",
  "/src/assets/svg/float.svg",
];

const itemsTitle0 = [
  { image: "/src/assets/svg/float.svg", text: "选择你的形象" },
  { image: "/src/assets/svg/float.svg", text: "为你的形象定制数字人" },
  { image: "/src/assets/svg/float.svg", text: "和个性化数字人交流" },
];

const itemsTitle1 = [
  { image: "/src/assets/svg/ice-cream.svg", text: "4" },
  { image: "/src/assets/svg/ice-cream.svg", text: "5" },
  { image: "/src/assets/svg/ice-cream.svg", text: "6" },
];

const currentData = ref(data[title.value]);

const currentImage = ref(images[title.value]);

const changetitle = (index) => {
  title.value = index;
  currentData.value = data[index];
  currentImage.value = images[index];
};
</script>

<style></style>
