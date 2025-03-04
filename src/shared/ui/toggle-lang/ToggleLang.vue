<script setup lang="ts">
import { Button } from '@/shared/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { LanguagesIcon } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const onLangChange = (lang: string) => {
  locale.value = lang
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" class="rounded-full p-0 w-10 h-10">
        <LanguagesIcon />

        <span class="sr-only">Toggle Lang</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="() => onLangChange('ar')"> Arabic </DropdownMenuItem>
      <DropdownMenuItem @click="() => onLangChange('en')"> English </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
