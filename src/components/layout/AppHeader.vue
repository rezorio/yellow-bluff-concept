<script setup>
import { Menu, Phone, X } from '@lucide/vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useSkin } from '../../composables/useSkin'
import { navLinks } from '../../data/nav'
import { practice } from '../../data/practice'
import ScheduleCta from '../shared/ScheduleCta.vue'
import SiteLogo from './SiteLogo.vue'
import SkinToggle from './SkinToggle.vue'

const route = useRoute()
const menuOpen = ref(false)
const { isStudio } = useSkin()

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)
</script>

<template>
  <header
    class="sticky top-0 z-40"
    :class="isStudio ? 'border-b border-ink/10 bg-white text-ink' : 'bg-ink text-white'"
  >
    <div class="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 lg:gap-4 lg:px-6">
      <button
        type="button"
        class="grid h-11 w-11 place-items-center rounded-lg border lg:hidden"
        :class="isStudio ? 'border-ink/15 text-ink' : 'border-white/20 text-white'"
        :aria-expanded="menuOpen"
        aria-controls="mobile-nav"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" class="h-5 w-5" :stroke-width="1.75" />
        <Menu v-else class="h-5 w-5" :stroke-width="1.75" />
      </button>

      <SiteLogo :light="!isStudio" />

      <nav class="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3 py-2 text-sm font-semibold transition"
          :class="isStudio ? 'text-ink/70 hover:text-ink' : 'text-white/80 hover:text-white'"
          :active-class="isStudio ? 'text-ink' : 'text-white'"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="ml-auto flex items-center gap-2 lg:ml-4">
        <SkinToggle class="hidden sm:inline-flex" />
        <a
          :href="practice.phoneHref"
          class="hidden text-xs font-semibold xl:inline-flex"
          :class="isStudio ? 'text-brand' : 'text-sand'"
        >
          Emergency? Call
        </a>
        <a
          :href="practice.phoneHref"
          class="hidden items-center gap-2 text-sm font-semibold xl:inline-flex"
          :class="isStudio ? 'text-ink' : 'text-sand'"
        >
          <Phone class="h-4 w-4" :stroke-width="1.75" />
          {{ practice.phoneDisplay }}
        </a>
        <ScheduleCta />
      </div>
    </div>

    <div
      v-if="menuOpen"
      id="mobile-nav"
      class="border-t px-4 py-3 lg:hidden"
      :class="isStudio ? 'border-ink/10 bg-white' : 'border-white/10 bg-ink'"
    >
      <nav class="flex flex-col gap-1" aria-label="Mobile">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3 py-3 text-base font-semibold"
          :class="isStudio ? 'text-ink' : 'text-white'"
          :active-class="isStudio ? 'bg-brand/10 text-brand' : 'bg-white/10'"
        >
          {{ link.label }}
        </RouterLink>
        <div class="pt-2 sm:hidden">
          <SkinToggle />
        </div>
      </nav>
    </div>
  </header>
</template>
