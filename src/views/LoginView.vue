<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="flex gap-4 flex-col bg-violet-900 rounded-xl p-12 w-1/3 min-w-96 max-w-3xl">
      <div class="flex gap-1 flex-col">
        <h1 class="text-2xl font-bold mb-5 text-white text-center">Вход</h1>
        <p class="text-white">Логин</p>
        <input class="outline-none border rounded-md p-2" type="text" placeholder="Введите логин" />
      </div>
      <div class="flex gap-1 flex-col mb-2">
        <p class="text-white">Пароль</p>
        <input
          class="outline-none border rounded-md p-2"
          type="password"
          placeholder="Введите пароль"
        />
      </div>
      <RouterLink
        to="/messenger"
        class="bg-violet-500 focus:bg-violet-700 hover:bg-violet-600 text-white p-2 rounded-md text-center"
      >
        Войти
      </RouterLink>
      <RouterLink
        to="/register"
        class="mt-2 text-center text-violet-200 hover:text-white underline"
      >
        Регистрация
      </RouterLink>
    </div>
  </div>
</template>

<script setup></script>
