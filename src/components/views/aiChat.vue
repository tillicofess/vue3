<template>
  <div class="flex min-h-screen bg-gray-200 px-4 lg:px-8">
    <Header />
    <div class="flex max-h-screen flex-1 flex-col sm:ml-32">
      <div class="mt-4 max-sm:mt-20 lg:mt-8"></div>
      <div
        class="grid flex-1 grid-flow-col grid-cols-1 grid-rows-6 items-center justify-center overflow-auto rounded-t-3xl bg-white"
      >
        <!-- begin video -->
        <div class="z-1 row-span-2 flex justify-center">
          <video
            ref="videoPlayer"
            autoplay
            class="h-64 w-64 rounded-3xl"
            src="../../assets/img/welcome.mp4"
          ></video>
        </div>
        <!-- begin chatbox -->
        <div class="row-span-3 flex h-full flex-col items-center">
          <div class="flex h-48 w-2/3 flex-col">
            <!-- begin button -->
            <div class="flex h-20 w-full items-center justify-center">
              <button
                type="button"
                class="h-10 w-20 rounded-xl font-semibold dark:bg-gray-100 dark:text-gray-800"
                onclick="my_modal_1.showModal()"
              >
                Create
              </button>
              <avator />
              <button
                type="button"
                class="mx-8 h-10 w-20 rounded-xl font-semibold dark:bg-gray-100 dark:text-gray-800"
              >
                Save
              </button>
              <button
                type="button"
                class="h-10 w-20 rounded-xl font-semibold dark:bg-gray-100 dark:text-gray-800"
              >
                Basic
              </button>
            </div>
            <div class="flex h-28 w-full items-start justify-center">
              <routerLink to="/tutorialChat" class="text-blue-600 underline">
                Tutorial entrance
              </routerLink>
            </div>
          </div>
          <div
            class="scrollable-div flex w-2/3 flex-1 flex-col overflow-y-auto p-4"
          >
            <div class="other-message">
              Greetings! Today your shirt matches the color of your eyes very
              well
            </div>
            <div
              v-for="(message, index) in messages"
              :key="index"
              :class="
                message.sender === 'user' ? 'user-message' : 'other-message'
              "
            >
              {{ message.text }}
            </div>
          </div>
        </div>
        <!-- begin send -->
        <div class="row-span-1 flex justify-center">
          <div
            class="flex w-2/3 items-center rounded-3xl border-2 border-gray-200"
          >
            <textarea
              ref="textarea"
              class="mx-6 w-full resize-none outline-none"
              :rows="rows"
              placeholder="输入信息"
              v-model="chat"
              @keydown.enter.prevent="addBox"
            ></textarea>
          </div>
          <button v-on:click="addBox" class="btn btn-md ml-2 rounded-xl">
            发送
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Header from "../header/header.vue";
import avator from "../modal/avator.vue";
const messages = ref([]);
const chat = ref("");
let rows = 1;

function addBox(event) {
  event.preventDefault(); // 阻止回车键的默认行为

  // 处理回车键的换行问题
  if (event.key === "Enter" && !event.shiftKey) {
    console.log(chat.value);
    messages.value.push({ text: chat.value, sender: "user" });
    chat.value = ""; // 清空 chat 值
  }
}
</script>
<style scoped>
@import "../../assets/components/aiChat.css";
</style>
