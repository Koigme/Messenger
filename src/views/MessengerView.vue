<template>
  <div class="flex h-screen">
    <div class="bg-gray-700 w-2/6 min-w-60 flex flex-col relative min-h-0">
      <div
        v-if="showSettings"
        class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20"
        @click="showSettings = false"
      ></div>
      <SettingsView v-if="showSettings" @click.stop />

      <div class="flex items-center gap-2 flex-shrink-0 bg-gray-700 py-2 z-0">
        <img
          @click="showSettings = !showSettings"
          class="ml-2 w-10 h-10 cursor-pointer"
          src="@/assets/list_12505813.png"
          alt=""
        />

        <div class="mr-2 flex-1">
          <input
            class="bg-gray-500 border rounded-xl outline-none border-none w-full px-5 py-1"
            type="text"
            placeholder="Поиск"
          />
        </div>
      </div>
      <div class="flex-1 overflow-y-auto min-h-0 flex flex-col gap-1 cursor-pointer py-2">
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
      </div>
    </div>
    <ChatView />
  </div>
</template>

<style>
body {
  background: linear-gradient(#7f0fca, #17067c);
}

p {
  color: white;
}
</style>

<script setup>
import ChatList from '@/components/ChatList.vue'
import ChatView from '@/components/ChatView.vue'
import SettingsView from '@/views/SettingsView.vue'
import { ref } from 'vue'

const showSettings = ref(false)
</script>
