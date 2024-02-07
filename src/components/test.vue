<template>
  <div class="container">
    <div class="messages" ref="messages">
      <!-- 在这里渲染消息列表 -->
      <div v-for="(message, index) in messages" :key="index" class="message">{{ message }}</div>
    </div>
    <input type="text" v-model="newMessage" @keydown.enter="addMessage" placeholder="Type your message..." class="input">
    <button @click="addMessage">122</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([]);
const newMessage = ref('');

const addMessage = () => {
    messages.value.push(newMessage.value);
    newMessage.value = '';
    scrollToBottom();
};

const scrollToBottom = () => {
  const container = $refs.messages;
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
};
</script>

<style>
.container {
  @apply flex flex-col h-full;
}

.messages {
  @apply flex-1 overflow-y-auto;
}

.message {
  @apply mb-4;
}

.input {
  @apply p-2 border border-gray-300 rounded;
}
</style>

