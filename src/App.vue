<script setup>
import AppFooter from './components/layout/AppFooter.vue'
import AppHeader from './components/layout/AppHeader.vue'
import ConceptBanner from './components/layout/ConceptBanner.vue'
import StickyCallBar from './components/layout/StickyCallBar.vue'
</script>

<template>
  <div class="min-h-dvh bg-cream text-ink">
    <ConceptBanner />
    <AppHeader />
    <main class="pb-28 lg:pb-0">
      <RouterView />
    </main>
    <AppFooter />
    <StickyCallBar />
  </div>
</template>
