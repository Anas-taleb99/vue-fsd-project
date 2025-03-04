<script setup lang="ts">
import { Calendar, Home, Inbox, Search, Settings } from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui/sidebar"
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";

const { t } = useI18n()

// Menu items.
const items = [
  {
    title: "banks",
    url: "/banks",
    icon: Home,
  },
  {
    title: "inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "search",
    url: "#",
    icon: Search,
  },
  {
    title: "settings",
    url: "#",
    icon: Settings,
  },
];
</script>

<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild>
                <RouterLink :to="item.url">
                  <component :is="item.icon" />
                  <span>{{ t(item.title) }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>