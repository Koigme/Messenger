import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [],
  }),
  getters: {
    lastMessage(state) {
      return state.messages.length ? state.messages[state.messages.length - 1] : null
    },
  },
  actions: {
    sendMessage(text) {
      if (!text || !text.trim()) return
      this.messages.push({ text: text.trim(), ts: Date.now(), author: 'me' })
    },
    clear() {
      this.messages = []
    },
  },
})
