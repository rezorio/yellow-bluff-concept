<script setup>
import { Phone } from '@lucide/vue'
import { useSkin } from '../../composables/useSkin'
import { practice } from '../../data/practice'
import ScheduleCta from '../shared/ScheduleCta.vue'

const { isStudio } = useSkin()
</script>

<template>
  <section v-if="isStudio" class="relative min-h-[78vh] overflow-hidden bg-ink">
    <img
      src="/images/hero.jpg"
      alt=""
      class="absolute inset-0 h-full w-full object-cover object-top opacity-70"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/10" />
    <div class="relative mx-auto flex min-h-[78vh] max-w-6xl items-end px-4 py-16 sm:px-6 lg:items-center lg:py-24">
      <div class="max-w-xl text-white">
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-sand">
          Jacksonville, FL
        </p>
        <h1 class="mt-4 font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {{ practice.tagline }}
        </h1>
        <p class="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
          {{ practice.description }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <ScheduleCta large />
          <a
            :href="practice.phoneHref"
            class="inline-flex h-14 items-center gap-2 rounded-lg border border-white/40 px-6 text-base font-semibold text-white"
          >
            <Phone class="h-5 w-5" :stroke-width="1.75" />
            {{ practice.phoneDisplay }}
          </a>
        </div>
      </div>
    </div>
  </section>

  <section v-else class="bg-sand">
    <div class="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
      <div>
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-brand-deep">
          Jacksonville, FL
        </p>
        <h1 class="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {{ practice.tagline }}
        </h1>
        <p class="mt-5 max-w-xl text-base leading-relaxed text-ink sm:text-lg">
          {{ practice.description }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <ScheduleCta large />
          <a
            :href="practice.phoneHref"
            class="inline-flex h-14 items-center gap-2 rounded-lg border-2 border-ink bg-transparent px-6 text-base font-semibold text-ink"
          >
            <Phone class="h-5 w-5" :stroke-width="1.75" />
            {{ practice.phoneDisplay }}
          </a>
        </div>
      </div>

      <div class="relative">
        <div class="overflow-hidden rounded-2xl border-4 border-ink/10">
          <img
            src="/images/hero.jpg"
            alt="Patient with a confident smile"
            class="aspect-[4/5] w-full object-cover lg:aspect-[5/6]"
          />
        </div>
        <div
          class="absolute bottom-4 left-4 right-4 rounded-lg bg-brand px-4 py-3 text-sm text-white sm:left-auto sm:right-4 sm:w-56"
        >
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-sand">Private care</p>
          <p class="mt-1 font-medium">Calm rooms. Clear plans. No rush.</p>
        </div>
      </div>
    </div>
  </section>
</template>
