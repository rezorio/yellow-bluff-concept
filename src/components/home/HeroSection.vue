<script setup>
import { ArrowRight, Phone } from '@lucide/vue'
import { practice } from '../../data/practice'
</script>

<template>
  <section class="bg-sand-light">
    <div class="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          Jacksonville, FL
        </p>
        <h1 class="mt-3 font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
          {{ practice.tagline }}
        </h1>
        <p class="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {{ practice.description }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink
            to="/visit"
            class="inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Request a Visit
            <ArrowRight class="h-4 w-4" />
          </RouterLink>
          <a
            :href="practice.phoneHref"
            class="inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 bg-white px-6 text-sm font-semibold text-ink"
          >
            <Phone class="h-4 w-4" />
            {{ practice.phoneDisplay }}
          </a>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-md lg:max-w-none">
        <div class="overflow-hidden rounded-t-[12rem] rounded-b-3xl border-[6px] border-white shadow-xl">
          <img
            src="/images/hero.jpg"
            alt="Patient with a confident smile"
            class="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
