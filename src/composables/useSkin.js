import { computed, ref } from 'vue'

export const SKIN_STORAGE_KEY = 'yb-pitch-skin'

function readStoredSkin() {
  try {
    return sessionStorage.getItem(SKIN_STORAGE_KEY) === 'studio' ? 'studio' : 'brand'
  } catch {
    return 'brand'
  }
}

const skin = ref('brand')

export function applyStoredSkin() {
  const next = readStoredSkin()
  skin.value = next
  document.documentElement.dataset.skin = next
}

export function useSkin() {
  const isStudio = computed(() => skin.value === 'studio')

  function setSkin(value) {
    const next = value === 'studio' ? 'studio' : 'brand'
    skin.value = next
    document.documentElement.dataset.skin = next
    try {
      sessionStorage.setItem(SKIN_STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }

  return { skin, isStudio, setSkin }
}
