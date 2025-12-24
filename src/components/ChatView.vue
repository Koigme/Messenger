<template>
  <div class="flex-1 min-w-0 flex flex-col bg-gray-800 min-h-0">
    <div class="flex items-center gap-2 flex-shrink-0 sticky top-0 bg-gray-700 z-10">
      <div
        class="flex flex-col p-2 border border-r-0 border-b-0 border-t-0 border-opacity-50 border-black"
      >
        <p class="text-white">Чат</p>
        <p class="text-gray-400 text-sm">242342 участников</p>
      </div>
    </div>

    <div
      ref="scrollArea"
      class="flex-1 overflow-y-auto min-h-0 px-4 py-4 flex flex-col items-start"
    >
      <div class="mt-auto"></div>

      <div class="w-full flex flex-col items-start space-y-2">
        <div
          v-for="(m, idx) in messages"
          :key="idx"
          class="max-w-[70%] bg-blue-600 text-white rounded-2xl px-3 py-2 shadow-sm flex gap-3"
        >
          <img src="@/assets/maxresdefault.jpg" class="w-10 h-10 flex-shrink-0" alt="" />
          <div class="min-w-0 flex-1">
            <p class="text-red-400 truncate">Вы</p>
            <p class="whitespace-pre-wrap break-all overflow-wrap-break-word">{{ m.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <form class="flex items-center gap-2 p-3 bg-gray-800 border-t border-black/50" @submit.prevent="onSend">
      <input
        v-model.trim="input"
        type="text"
        placeholder="Написать сообщение"
        class="flex-1 bg-gray-700 text-white placeholder-gray-400 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500/50"
      />
      <button type="submit" class="px-4 py-2 rounded-xl font-medium text-white bg-purple-700">Отправить</button>
    </form>
  </div>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useChatStore } from '@/stores/chatStore'

const input = ref('')
const scrollArea = ref(null)

const chat = useChatStore()
const { messages } = storeToRefs(chat)

function onSend() {
  if (!input.value) return
  chat.sendMessage(input.value)
  input.value = ''
  nextTick(() => {
    if (scrollArea.value) {
      scrollArea.value.scrollTop = scrollArea.value.scrollHeight
    }
  })
}

watch(messages, () => {
  nextTick(() => {
    if (scrollArea.value) {
      scrollArea.value.scrollTop = scrollArea.value.scrollHeight
    }
  })
})
</script>
