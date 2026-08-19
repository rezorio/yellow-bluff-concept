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
  <header class="sticky top-0 z-40 border-b border-ink/10 border-t-4 border-t-brand bg-cream text-ink">
    <div class="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 lg:px-6">
      <button
        type="button"
        class="grid h-10 w-10 place-items-center rounded-lg border border-ink/10 text-ink lg:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-nav"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" class="h-5 w-5" :stroke-width="1.75" />
        <Menu v-else class="h-5 w-5" :stroke-width="1.75" />
      </button>

      <SiteLogo />

      <nav class="ml-auto hidden items-center gap-0.5 lg:flex" aria-label="Primary">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3 py-2 text-[13px] font-medium tracking-wide text-ink-muted transition hover:bg-ink/5 hover:text-ink"
          active-class="bg-ink/8 text-ink"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="ml-auto flex items-center gap-2 lg:ml-4">
        <a
          :href="practice.phoneHref"
          class="hidden items-center gap-2 text-[13px] font-medium text-ink-muted xl:inline-flex"
        >
          <Phone class="h-3.5 w-3.5" :stroke-width="1.75" />
          {{ practice.phoneDisplay }}
        </a>
        <RouterLink
          to="/visit"
          class="inline-flex h-10 items-center rounded-lg bg-brand px-4 text-[13px] font-semibold text-white transition hover:bg-brand-dark"
        >
          Request a Visit
        </RouterLink>
      </div>
    </div>

    <div
      v-if="menuOpen"
      id="mobile-nav"
      class="border-t border-ink/10 bg-cream px-4 py-3 lg:hidden"
    >
      <nav class="flex flex-col gap-1" aria-label="Mobile">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3 py-3 text-sm font-medium text-ink"
          active-class="bg-brand/10 text-brand"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
