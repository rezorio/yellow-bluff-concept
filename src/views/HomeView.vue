<script setup>
import DoctorsPreview from '../components/home/DoctorsPreview.vue'
import HeroSection from '../components/home/HeroSection.vue'
import HomeCta from '../components/home/HomeCta.vue'
import PhotoBand from '../components/home/PhotoBand.vue'
import ServicesPreview from '../components/home/ServicesPreview.vue'
import TrustStrip from '../components/home/TrustStrip.vue'
import VisitHours from '../components/home/VisitHours.vue'
</script>

<template>
  <HeroSection />
  <TrustStrip />
  <ServicesPreview />
  <DoctorsPreview />
  <PhotoBand />
  <VisitHours />
  <HomeCta />
</template>
