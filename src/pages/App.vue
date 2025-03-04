<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>

<template>
  <div :class="locale">
    <!-- <button class="p-4 bg-red-500 text-white" @click="locale = 'en'">English</button> -->
    <!-- <button class="p-4 bg-red-500 text-white" @click="locale = 'ar'">Arabic</button> -->
    <RouterView />
  </div>
</template>
