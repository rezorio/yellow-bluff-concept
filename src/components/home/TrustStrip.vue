<script setup>
import StarRating from '../shared/StarRating.vue'
import { practice } from '../../data/practice'
</script>

<template>
  <section class="px-4 pb-4 sm:px-6">
    <div
      class="glass-frost mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 rounded-full px-5 py-4 sm:flex-row sm:px-8"
    >
      <div class="flex flex-wrap items-center justify-center gap-3 text-sm text-ink">
        <StarRating :rating="practice.reviews.rating" />
        <p>
          <span class="font-semibold">{{ practice.reviews.rating }}</span>
          on {{ practice.reviews.source }} ·
          {{ practice.reviews.count.toLocaleString() }} reviews
        </p>
      </div>
      <p class="text-center text-xs tracking-wide text-ink-muted sm:text-sm">
        {{ practice.affiliation }}
      </p>
    </div>
  </section>
</template>
