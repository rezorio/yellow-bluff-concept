<script setup>
import { Check } from '@lucide/vue'
import { reactive, ref } from 'vue'
import { practice } from '../../data/practice'

const emit = defineEmits(['submitted'])

const submitted = ref(false)
const errors = reactive({
  name: '',
  phone: '',
})

const form = reactive({
  name: '',
  phone: '',
  preferredDay: 'Weekday morning',
  reason: 'New patient exam',
  notes: '',
})

const dayOptions = [
  'Weekday morning',
  'Weekday afternoon',
  'First available',
]

const reasonOptions = [
  'New patient exam',
  'Cleaning & checkup',
  'Tooth pain',
  'Cosmetic consult',
  'Invisalign®',
  'Other',
]

function validate() {
  errors.name = form.name.trim().length < 2 ? 'Please enter your name.' : ''
  errors.phone = form.phone.replace(/\D/g, '').length < 10 ? 'Please enter a 10-digit phone number.' : ''
  return !errors.name && !errors.phone
}

function onSubmit() {
  if (!validate()) return
  submitted.value = true
  emit('submitted', { ...form })
}

function resetForm() {
  submitted.value = false
  form.name = ''
  form.phone = ''
  form.preferredDay = 'Weekday morning'
  form.reason = 'New patient exam'
  form.notes = ''
}
</script>

<template>
  <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/8 sm:p-8">
    <div v-if="submitted" class="text-center">
      <span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-brand">
        <Check class="h-6 w-6" />
      </span>
      <h3 class="mt-4 font-serif text-2xl text-ink">Request received</h3>
      <p class="mt-2 text-sm leading-relaxed text-ink-muted">
        This is a concept demo, so nothing was sent to the office. In a live site, the team would
        call you back to confirm a time. You can still call
        <a :href="practice.phoneHref" class="font-semibold text-brand">{{ practice.phoneDisplay }}</a>
        today.
      </p>
      <button
        type="button"
        class="mt-6 inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-white"
        @click="resetForm"
      >
        Send another request
      </button>
    </div>

    <form v-else class="space-y-4" @submit.prevent="onSubmit">
      <div>
        <h3 class="font-serif text-2xl text-ink">Request a visit</h3>
        <p class="mt-1 text-sm text-ink-muted">
          Demo form only — we will not store or email this information.
        </p>
      </div>

      <label class="block text-sm font-medium text-ink">
        Full name
        <input
          v-model="form.name"
          type="text"
          autocomplete="name"
          class="mt-1 h-11 w-full rounded-xl border border-ink/15 bg-cream px-3 outline-none ring-brand/30 focus:ring-2"
        />
        <span v-if="errors.name" class="mt-1 block text-xs text-red-700">{{ errors.name }}</span>
      </label>

      <label class="block text-sm font-medium text-ink">
        Phone
        <input
          v-model="form.phone"
          type="tel"
          autocomplete="tel"
          class="mt-1 h-11 w-full rounded-xl border border-ink/15 bg-cream px-3 outline-none ring-brand/30 focus:ring-2"
        />
        <span v-if="errors.phone" class="mt-1 block text-xs text-red-700">{{ errors.phone }}</span>
      </label>

      <label class="block text-sm font-medium text-ink">
        Preferred time
        <select
          v-model="form.preferredDay"
          class="mt-1 h-11 w-full rounded-xl border border-ink/15 bg-cream px-3 outline-none ring-brand/30 focus:ring-2"
        >
          <option v-for="option in dayOptions" :key="option" :value="option">{{ option }}</option>
        </select>
      </label>

      <label class="block text-sm font-medium text-ink">
        Reason for visit
        <select
          v-model="form.reason"
          class="mt-1 h-11 w-full rounded-xl border border-ink/15 bg-cream px-3 outline-none ring-brand/30 focus:ring-2"
        >
          <option v-for="option in reasonOptions" :key="option" :value="option">{{ option }}</option>
        </select>
      </label>

      <label class="block text-sm font-medium text-ink">
        Notes <span class="font-normal text-ink-muted">(optional)</span>
        <textarea
          v-model="form.notes"
          rows="3"
          class="mt-1 w-full rounded-xl border border-ink/15 bg-cream px-3 py-2 outline-none ring-brand/30 focus:ring-2"
        />
      </label>

      <button
        type="submit"
        class="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand text-sm font-semibold text-white transition hover:bg-brand-dark"
      >
        Request a callback
      </button>
    </form>
  </div>
</template>
