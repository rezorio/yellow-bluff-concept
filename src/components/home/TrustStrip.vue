<script setup>
import StarRating from '../shared/StarRating.vue'
import { useSkin } from '../../composables/useSkin'
import { practice } from '../../data/practice'

const { isStudio } = useSkin()
</script>

<template>
  <section :class="isStudio ? 'border-b border-ink/10 bg-white text-ink' : 'bg-ink text-white'">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6"
      :class="isStudio ? 'py-4' : 'gap-4 py-6'"
    >
      <div class="flex flex-wrap items-center justify-center gap-3">
        <StarRating :rating="practice.reviews.rating" />
        <p :class="isStudio ? 'text-sm font-medium sm:text-base' : 'text-lg font-semibold sm:text-xl'">
          {{ practice.reviews.rating }} on {{ practice.reviews.source }}
          <span :class="isStudio ? 'text-ink-muted' : 'text-sand'"> · </span>
          {{ practice.reviews.count.toLocaleString() }} reviews
        </p>
      </div>
      <p
        class="text-center text-sm"
        :class="isStudio ? 'text-ink-muted' : 'font-medium text-sand sm:text-base'"
      >
        {{ practice.affiliation }}
      </p>
    </div>
  </section>
</template>
