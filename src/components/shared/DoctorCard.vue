<script setup>
defineProps({
  doctor: { type: Object, required: true },
  detailed: { type: Boolean, default: false },
})
</script>

<template>
  <article class="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/8">
    <img
      :src="doctor.image"
      :alt="doctor.name"
      class="aspect-[4/5] w-full object-cover object-top"
    />
    <div class="p-6">
      <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
        {{ doctor.role }}
      </p>
      <h3 class="mt-1 font-serif text-2xl text-ink">{{ doctor.name }}</h3>
      <blockquote class="mt-3 text-sm italic leading-relaxed text-ink-muted">
        “{{ doctor.quote }}”
      </blockquote>
      <template v-if="detailed">
        <p class="mt-4 text-sm leading-relaxed text-ink">{{ doctor.bio }}</p>
        <div class="mt-5 space-y-3">
          <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
            Education
          </p>
          <div v-for="item in doctor.education" :key="item.credential">
            <p class="text-sm font-semibold text-ink">{{ item.credential }}</p>
            <p class="text-sm text-ink-muted">{{ item.school }}</p>
          </div>
        </div>
      </template>
    </div>
  </article>
</template>
