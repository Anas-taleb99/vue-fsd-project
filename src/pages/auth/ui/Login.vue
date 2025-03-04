<script setup lang="ts">
import { LoginForm } from "@/widgets/auth";
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <div class="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 class="text-4xl font-bold mb-6 text-gray-900 my-10">Login</h2>
      <LoginForm />
    </div>
  </div>
</template>
