<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="drawerOpen" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
    </div>
    <div class="drawer-side" v-show="drawerOpen" id="s">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const drawerOpen = ref(false);

watch(drawerOpen, (newVal, oldVal) => {
  console.log('Drawer opened:', newVal);
});
</script>

<style>
/* Add your styles here */
</style>


<style>
</style>
