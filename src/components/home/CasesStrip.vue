<script setup>
import { cases } from '../../data/cases'
import SectionHeading from '../shared/SectionHeading.vue'
</script>

<template>
  <section class="bg-mist px-4 py-14 sm:px-6 sm:py-16">
    <div class="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Cases"
        title="The work people actually come in for."
        copy="Implants, Invisalign®, veneers. Photos stay in the consult — we do not put fake before-and-afters on a pitch site."
      />
      <div class="mt-10 grid gap-4 md:grid-cols-3">
        <article
          v-for="item in cases"
          :key="item.id"
          class="card rounded-2xl p-6"
        >
          <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
            Treatment we offer
          </p>
          <h3 class="mt-2 font-serif text-2xl font-medium text-ink">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-ink-muted">{{ item.summary }}</p>
        </article>
      </div>
      <p class="mt-8 text-sm text-ink-muted">
        Ask at your visit to see cases from the office.
        <RouterLink to="/visit" class="font-semibold text-brand">Request a visit</RouterLink>
      </p>
    </div>
  </section>
</template>
