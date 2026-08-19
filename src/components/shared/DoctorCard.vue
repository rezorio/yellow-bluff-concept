<script setup>
defineProps({
  doctor: { type: Object, required: true },
  detailed: { type: Boolean, default: false },
})
</script>

<template>
  <article class="card overflow-hidden rounded-2xl">
    <img
      :src="doctor.image"
      :alt="doctor.name"
      class="aspect-[4/5] w-full object-cover object-top"
    />
    <div class="p-5">
      <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
        {{ doctor.role }}
      </p>
      <h3 class="mt-1 font-serif text-2xl font-medium tracking-tight text-ink">{{ doctor.name }}</h3>
      <blockquote class="mt-3 text-sm leading-relaxed text-ink-muted">
        “{{ doctor.quote }}”
      </blockquote>
      <template v-if="detailed">
        <p class="mt-4 text-sm leading-relaxed text-ink">{{ doctor.bio }}</p>
        <div class="mt-5 space-y-3 border-t border-ink/10 pt-4">
          <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
            Education
          </p>
          <div v-for="item in doctor.education" :key="item.credential">
            <p class="text-sm font-medium text-ink">{{ item.credential }}</p>
            <p class="text-sm text-ink-muted">{{ item.school }}</p>
          </div>
        </div>
      </template>
    </div>
  </article>
</template>
