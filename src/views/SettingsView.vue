<template>
  <div class="bg-gray-700 z-30 w-1/5 h-screen fixed left-0 top-0 p-5">
    <img
      src="@/assets/maxresdefault.jpg"
      alt=""
      class="w-12 h-12 rounded-full object-cover border-none"
    />
    <div class="pt-5 flex items-center justify-between">
      <div class="flex flex-col">
        <p>Ник нейм</p>
        <a class="text-blue-500 text-sm pb-2" href="">Установить эмодзи статус</a>
      </div>
      <img
        src="@/assets/arrow.png"
        alt=""
        @click="toggleExpanded"
        :class="{ 'rotate-180': isExpanded }"
        class="cursor-pointer transition-transform duration-300"
      />
    </div>
    <template v-if="isExpanded">
      <hr class="-mx-5 border-black opacity-50 my-1" />
      <SettingsItem title="Ник нейм" :imageUrl="maxresdefault" />
      <SettingsItem title="Добавить аккаунт" :imageUrl="account" />
      <hr class="-mx-5 border-black opacity-50 my-1" />
    </template>
    <SettingsItem title="Мой профиль" :imageUrl="user" />
    <SettingsItem title="Кошелек" :imageUrl="wallet" />
    <hr class="-mx-5 border-black opacity-50 my-1" />
    <SettingsItem title="Создать группу" :imageUrl="groupIcon" />
    <SettingsItem title="Создать канал" :imageUrl="speakerIcon" />
    <SettingsItem title="Контакты" :imageUrl="contactIcon" />
    <SettingsItem title="Звонки" :imageUrl="phoneIcon" />
    <SettingsItem title="Избранное" :imageUrl="favourites" />
    <SettingsItem title="Настройки" :imageUrl="settings" />
    <SettingsItem title="Светлая тема" :imageUrl="moon" />
  </div>
</template>
<style setup>
img {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 999px;
  border: none;
  object-fit: cover;
}
</style>

<script setup>
import account from '@/assets/account.png'
import contactIcon from '@/assets/contact.png'
import favourites from '@/assets/favourites.png'
import groupIcon from '@/assets/group.png'
import maxresdefault from '@/assets/maxresdefault.jpg'
import moon from '@/assets/moon.png'
import phoneIcon from '@/assets/phone.png'
import settings from '@/assets/settings.png'
import speakerIcon from '@/assets/speaker.png'
import user from '@/assets/user.png'
import wallet from '@/assets/wallet.png'
import SettingsItem from '@/components/SettingsItem.vue'
import { ref } from 'vue'

const isExpanded = ref(true)

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}
</script>
