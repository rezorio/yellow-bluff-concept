<script setup>
import { Phone } from '@lucide/vue'
import { navLinks } from '../../data/nav'
import { practice } from '../../data/practice'
import SiteLogo from './SiteLogo.vue'
</script>

<template>
  <footer class="bg-ink text-white">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3">
      <div>
        <SiteLogo light />
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
          {{ practice.addressLine1 }}<br />
          {{ practice.addressLine2 }}
        </p>
        <a
          :href="practice.phoneHref"
          class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sand"
        >
          <Phone class="h-4 w-4" :stroke-width="1.75" />
          {{ practice.phoneDisplay }}
        </a>
      </div>

      <div>
        <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">Explore</p>
        <ul class="mt-4 space-y-2 text-sm text-white/85">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink :to="link.to" class="hover:text-sand">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">Hours</p>
        <ul class="mt-4 space-y-1.5 text-sm text-white/75">
          <li
            v-for="entry in practice.hours"
            :key="entry.day"
            class="flex justify-between gap-6"
          >
            <span>{{ entry.short }}</span>
            <span>{{ entry.closed ? 'Closed' : `${entry.open} – ${entry.close}` }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="mx-auto max-w-6xl space-y-3 px-4 py-6 text-[11px] leading-relaxed text-white/50 sm:px-6">
        <p>{{ practice.affiliation }}</p>
        <p>{{ practice.aarp }}</p>
        <p>
          This page is a design concept created for discussion with the practice. It is not affiliated
          with Orahh Care, Heartland Dental, or AARP, and it does not replace the live website.
        </p>
      </div>
    </div>
  </footer>
</template>
