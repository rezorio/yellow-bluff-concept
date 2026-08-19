<script setup>
import { Menu, Phone, X } from '@lucide/vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { navLinks } from '../../data/nav'
import { practice } from '../../data/practice'
import SiteLogo from './SiteLogo.vue'

const route = useRoute()
const menuOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/10 bg-ink text-white">
    <div class="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 lg:px-6">
      <button
        type="button"
        class="grid h-11 w-11 place-items-center rounded-full text-white lg:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-nav"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" class="h-6 w-6" />
        <Menu v-else class="h-6 w-6" />
      </button>

      <SiteLogo light />

      <nav class="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-full px-3 py-2 text-sm font-medium text-white/80 transition hover:text-white"
          active-class="bg-white/10 text-white"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="ml-auto flex items-center gap-2 lg:ml-6">
        <a
          :href="practice.phoneHref"
          class="hidden items-center gap-2 text-sm font-medium text-sand xl:inline-flex"
        >
          <Phone class="h-4 w-4" />
          {{ practice.phoneDisplay }}
        </a>
        <RouterLink
          to="/visit"
          class="inline-flex h-11 items-center rounded-full bg-brand px-4 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Request a Visit
        </RouterLink>
      </div>
    </div>

    <div
      v-if="menuOpen"
      id="mobile-nav"
      class="border-t border-white/10 bg-ink px-4 py-4 lg:hidden"
    >
      <nav class="flex flex-col gap-1" aria-label="Mobile">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-xl px-3 py-3 text-base font-medium text-white/85"
          active-class="bg-white/10 text-white"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
