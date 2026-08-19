<script setup>
import { ArrowRight, Phone } from '@lucide/vue'
import { practice } from '../../data/practice'
</script>

<template>
  <section class="relative overflow-hidden">
    <div
      class="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgb(15_107_115/0.22),transparent_70%)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute bottom-8 left-1/4 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgb(197_180_138/0.28),transparent_70%)]"
      aria-hidden="true"
    />

    <div class="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
      <div class="glass-frost relative z-10 rounded-2xl p-6 sm:p-8">
        <p class="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
          Jacksonville, FL
        </p>
        <h1 class="mt-4 font-serif text-4xl font-medium leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
          {{ practice.tagline }}
        </h1>
        <p class="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-muted sm:text-base">
          {{ practice.description }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink
            to="/visit"
            class="inline-flex h-11 items-center gap-2 rounded-lg bg-brand px-5 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Request a Visit
            <ArrowRight class="h-4 w-4" :stroke-width="1.75" />
          </RouterLink>
          <a
            :href="practice.phoneHref"
            class="glass-frost inline-flex h-11 items-center gap-2 rounded-lg px-5 text-sm font-semibold text-ink"
          >
            <Phone class="h-4 w-4" :stroke-width="1.75" />
            {{ practice.phoneDisplay }}
          </a>
        </div>
      </div>

      <div class="relative">
        <div class="overflow-hidden rounded-2xl border border-white/40 shadow-[0_20px_50px_rgba(26,26,26,0.16)]">
          <img
            src="/images/hero.jpg"
            alt="Patient with a confident smile"
            class="aspect-[4/5] w-full object-cover lg:aspect-[5/6]"
          />
        </div>
        <div
          class="glass-frost absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3 text-sm text-ink sm:left-auto sm:right-4 sm:w-56"
        >
          <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">Private care</p>
          <p class="mt-1 text-ink-muted">Calm rooms. Clear plans. No rush.</p>
        </div>
      </div>
    </div>
  </section>
</template>
