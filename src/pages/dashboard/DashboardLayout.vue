<script setup lang="ts">

import { SidebarProvider, SidebarTrigger } from '@/shared/ui/sidebar'
import { AppSidebar, Topnav } from "@/app/layout"
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="w-full">
      <Topnav />
      <div class="container-fluid mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <RouterView />
      </div>
    </main>
  </SidebarProvider>
</template>