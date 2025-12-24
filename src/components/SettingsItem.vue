<script setup>
defineProps({
  imageUrl: String,
  title: String,
})
</script>
<template>
  <div class="flex gap-2 py-2.5 -mx-5 px-5 hover:bg-gray-400 rounded">
    <img :src="imageUrl" alt="" />
    <a class="text-white" href="">{{ title }}</a>
  </div>
</template>
