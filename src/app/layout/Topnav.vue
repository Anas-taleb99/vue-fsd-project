<script setup lang="ts">
import { SidebarTrigger } from '@/shared/ui/sidebar'
import { ToggleLang } from '@/shared/ui/toggle-lang'
import ToggleMode from '@/shared/ui/toggle-mode/ToggleMode.vue'
</script>
<template>
  <div class="shadow-sm w-full bg-white dark:bg-gray-900">
    <div class="container-fluid mx-auto px-4 sm:px-6 lg:px-8">
      <div class="h-12 flex items-center">
        <SidebarTrigger />

        topnav
        <div class="ms-auto flex gap-2">
          <ToggleLang />
          <ToggleMode />
        </div>
      </div>
    </div>
  </div>
</template>
