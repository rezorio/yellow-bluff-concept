<script setup>
import ScheduleCta from '../shared/ScheduleCta.vue'
</script>

<template>
  <section class="relative overflow-hidden">
    <img
      src="/images/office.jpg"
      alt="Treatment room at Dental Care on Yellow Bluff"
      class="h-72 w-full object-cover sm:h-96 lg:h-[28rem]"
    />
    <div class="absolute inset-0 bg-ink/65" />
    <div class="absolute inset-0 flex items-end">
      <div class="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-sand">The office</p>
        <h2 class="mt-3 max-w-xl font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Quiet rooms. Clear plans. Care that doesn’t rush you.
        </h2>
        <div class="mt-6">
          <ScheduleCta large />
        </div>
      </div>
    </div>
  </section>
</template>
