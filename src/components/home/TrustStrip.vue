<script setup>
import StarRating from '../shared/StarRating.vue'
import { practice } from '../../data/practice'
</script>

<template>
  <section class="bg-ink text-white">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6">
      <div class="flex flex-wrap items-center justify-center gap-3 text-sm">
        <StarRating :rating="practice.reviews.rating" />
        <p>
          <span class="font-semibold">{{ practice.reviews.rating }}</span>
          on {{ practice.reviews.source }} ·
          {{ practice.reviews.count.toLocaleString() }} reviews
        </p>
      </div>
      <p class="text-center text-sm text-sand">{{ practice.affiliation }}</p>
    </div>
  </section>
</template>
