<template>
  <div class="flex min-h-screen bg-[#0092FF] bg-opacity-50 pr-4">
    <Header />
    <div
      class="flex ml-4 max-h-screen flex-1 flex-col"
      :class="{
        'sm:ml-16': !store.sidebarCollapsed,
        'sm:ml-40': store.sidebarCollapsed,
      }"
    >
      <div class="mt-4"></div>
      <div
        class="mb-4 grid flex-1 grid-flow-col grid-cols-1 grid-rows-6 items-center justify-center overflow-auto rounded-3xl bg-white"
      >
        <!-- begin video -->
        <div class="row-span-2 flex justify-center">
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
                class="h-10 w-20 bg-[#F2F2F2] font-semibold text-gray-800"
                onclick="my_modal_1.showModal()"
              >
                {{ $t("create") }}
              </button>
              <avator />
              <button
                type="button"
                class="mx-8 h-10 w-20 bg-[#F2F2F2] font-semibold text-gray-800"
              >
                {{ $t("save") }}
              </button>
              <button
                type="button"
                class="h-10 w-20 bg-[#F2F2F2] font-semibold text-gray-800"
              >
                {{ $t("basic") }}
              </button>
            </div>
            <div class="flex h-28 w-full items-start justify-center">
              <routerLink to="/tutorialChat" class="text-blue-600 underline">
                {{ $t("know") }}
              </routerLink>
            </div>
          </div>
          <div
            class="scrollable-div flex w-2/3 flex-1 flex-col overflow-y-auto p-4"
          >
            <div class="other-message">你好，有什么我可以帮你的吗？</div>
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
              class="mx-6 w-full resize-none outline-none"
              placeholder="输入信息"
              v-model="chat"
              :rows="rows"
              @keydown.enter.prevent="addBox"
              @input="handleInput"
            ></textarea>
          </div>
          <button v-on:click="addBox1" class="btn btn-md ml-2 rounded-xl">
            发送
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { store } from "../../../store.js";
import Header from "../header/header.vue";
import avator from "../modal/avator.vue";
import axios from "axios";

const messages = ref([]);
const chat = ref("");
const send = ref("");
const reply = ref("");
const rows = ref(1);
const lines = ref();

const addBox = async (event) => {
  event.preventDefault(); // 阻止回车键的默认行为

  // 处理回车键的换行问题
  if (event.key === "Enter" && !event.shiftKey) {
    try {
      console.log("chat.value = " + chat.value);
      messages.value.push({ text: chat.value, sender: "user" });
      send.value = chat.value;
      console.log("send.value = " + send.value);
      chat.value = "";
      const response = await axios.post("http://localhost:3000/text", {
        chat: send.value,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      send.value = "";
      console.log(response.data.message);
      const response1 = await axios.get("http://localhost:3000/text", {});
      reply.value = response1.data.message;
      messages.value.push({ text: reply.value, sender: "other" });
    } catch (error) {
      console.error(error);
    }
  } else {
    if (event.key === "Enter" && event.shiftKey && rows.value < 4) {
      rows.value += 1;
      chat.value += "\n";
    }
  }
};

const addBox1 = async () => {
  try {
    console.log("chat.value = " + chat.value);
    messages.value.push({ text: chat.value, sender: "user" });
    send.value = chat.value;
    console.log("send.value = " + send.value);
    chat.value = "";
    console.log(chat.value);
    const response = await axios.post("http://localhost:3000/text", {
      chat: send.value,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    send.value = "";
    console.log(send.value);
    console.log(response.data.message);
    const response1 = await axios.get("http://localhost:3000/text", {});
    reply.value = response1.data.message;
    messages.value.push({ text: reply.value, sender: "other" });
  } catch (error) {
    console.error(error);
  }
};

const handleInput = () => {
  // 根据实际内容的行数更新 rows 的值
  lines.value = chat.value.split("\n").length;
  rows.value = Math.min(lines.value, 4);
};
</script>
<style scoped>
@import "../../assets/components/aiChat.css";
</style>
