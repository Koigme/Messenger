<template>
  <a href="/messenger" class="flex items-center gap-3 hover:bg-gray-600 px-2 py-2 select-none rounded-lg transition-colors">
    <div
      class="bg-[url('@/assets/maxresdefault.jpg')] w-12 h-12 rounded-full bg-cover bg-center bg-no-repeat flex-shrink-0"
    ></div>
    <div class="min-w-0 flex-1">
      <p class="text-white font-medium truncate">Чат </p>
      <p class="text-gray-400 text-sm truncate">{{ lastMessageText }}</p>
    </div>
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useChatStore } from '@/stores/chatStore'

const chat = useChatStore()
const { lastMessage } = storeToRefs(chat)

const lastMessageText = computed(() => lastMessage.value?.text || 'Нет сообщений')
</script>
