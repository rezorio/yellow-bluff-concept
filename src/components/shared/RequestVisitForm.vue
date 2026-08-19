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
  patientType: 'New patient',
  reason: 'Tooth pain',
  insurance: 'I will call to verify',
  preferredDay: 'First available',
  notes: '',
})

const patientTypes = ['New patient', 'Returning patient']
const dayOptions = ['First available', 'Weekday morning', 'Weekday afternoon']
const reasonOptions = [
  'Tooth pain / emergency',
  'Cleaning & checkup',
  'New patient exam',
  'Invisalign®',
  'Implants',
  'Cosmetic consult',
  'Other',
]
const insuranceOptions = [
  'I will call to verify',
  'I have dental insurance',
  'No insurance',
  'Not sure',
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
  form.patientType = 'New patient'
  form.reason = 'Tooth pain'
  form.insurance = 'I will call to verify'
  form.preferredDay = 'First available'
  form.notes = ''
}

const fieldClass =
  'mt-1 h-11 w-full rounded-lg border border-ink/12 bg-cream px-3 outline-none ring-brand/25 focus:ring-2'
</script>

<template>
  <div class="card rounded-2xl p-5 sm:p-6">
    <div v-if="submitted" class="text-center">
      <span class="mx-auto grid h-11 w-11 place-items-center rounded-lg bg-brand/10 text-brand">
        <Check class="h-5 w-5" :stroke-width="1.75" />
      </span>
      <h3 class="mt-4 font-serif text-2xl font-medium text-ink">Request received</h3>
      <p class="mt-2 text-sm leading-relaxed text-ink-muted">
        Demo only — nothing was sent to the office. A live site would route this to the front desk.
        You can still call
        <a :href="practice.phoneHref" class="font-semibold text-brand">{{ practice.phoneDisplay }}</a>
        today.
      </p>
      <button
        type="button"
        class="mt-6 inline-flex h-11 items-center rounded-lg bg-ink px-5 text-sm font-semibold text-white"
        @click="resetForm"
      >
        Send another request
      </button>
    </div>

    <form v-else class="space-y-4" @submit.prevent="onSubmit">
      <div>
        <h3 class="font-serif text-2xl font-medium tracking-tight text-ink">Request a visit</h3>
        <p class="mt-1 text-sm text-ink-muted">
          Demo request — not live booking. We will not store or email this.
        </p>
      </div>

      <label class="block text-sm font-medium text-ink">
        Full name
        <input v-model="form.name" type="text" autocomplete="name" :class="fieldClass" />
        <span v-if="errors.name" class="mt-1 block text-xs text-red-700">{{ errors.name }}</span>
      </label>

      <label class="block text-sm font-medium text-ink">
        Phone
        <input v-model="form.phone" type="tel" autocomplete="tel" :class="fieldClass" />
        <span v-if="errors.phone" class="mt-1 block text-xs text-red-700">{{ errors.phone }}</span>
      </label>

      <label class="block text-sm font-medium text-ink">
        New or returning
        <select v-model="form.patientType" :class="fieldClass">
          <option v-for="option in patientTypes" :key="option" :value="option">{{ option }}</option>
        </select>
      </label>

      <label class="block text-sm font-medium text-ink">
        Reason for visit
        <select v-model="form.reason" :class="fieldClass">
          <option v-for="option in reasonOptions" :key="option" :value="option">{{ option }}</option>
        </select>
      </label>

      <label class="block text-sm font-medium text-ink">
        Insurance
        <select v-model="form.insurance" :class="fieldClass">
          <option v-for="option in insuranceOptions" :key="option" :value="option">{{ option }}</option>
        </select>
      </label>

      <label class="block text-sm font-medium text-ink">
        Preferred time
        <select v-model="form.preferredDay" :class="fieldClass">
          <option v-for="option in dayOptions" :key="option" :value="option">{{ option }}</option>
        </select>
      </label>

      <label class="block text-sm font-medium text-ink">
        Notes <span class="font-normal text-ink-muted">(optional)</span>
        <textarea
          v-model="form.notes"
          rows="3"
          class="mt-1 w-full rounded-lg border border-ink/12 bg-cream px-3 py-2 outline-none ring-brand/25 focus:ring-2"
        />
      </label>

      <button
        type="submit"
        class="inline-flex h-11 w-full items-center justify-center rounded-lg bg-brand text-sm font-semibold text-white transition hover:bg-brand-dark"
      >
        Request a callback
      </button>
    </form>
  </div>
</template>
