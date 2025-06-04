<template>
  <div class="avatar" :style="gradientStyle">
    <span>{{ initials }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

defineEmits([])

const initials = computed(() => {
  return props.name.split(' ').map(n => n[0]).join('').toUpperCase()
})

const gradients = [
  'linear-gradient(135deg, #FF6B6B, #FFD93D)',
  'linear-gradient(135deg, #4ECDC4, #556270)',
  'linear-gradient(135deg, #45B7D1, #9DE0AD)',
  'linear-gradient(135deg, #96CEB4, #FF6F69)',
  'linear-gradient(135deg, #BB8FCE, #3498DB)',
  'linear-gradient(135deg, #FF9A9E, #FAD0C4)',
  'linear-gradient(135deg, #B5FFFC, #FFA69E)',
  'linear-gradient(135deg, #DCE35B, #45B649)',
  'linear-gradient(135deg, #00C9FF, #92FE9D)',
  'linear-gradient(135deg, #FBAB7E, #F7CE68)',
  'linear-gradient(135deg, #FDCB82, #F2726F)',
  'linear-gradient(135deg, #DAE2F8, #D6A4A4)',
  'linear-gradient(135deg, #A1C4FD, #C2E9FB)',
  'linear-gradient(135deg, #FFDEE9, #B5FFFC)',
  'linear-gradient(135deg, #F093FB, #F5576C)',
  'linear-gradient(135deg, #84FAB0, #8FD3F4)',
]

const colorIndex = computed(() => props.name.charCodeAt(0) % gradients.length)
const gradientStyle = computed(() => ({
  background: gradients[colorIndex.value]
}))
</script>

<style scoped>
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  user-select: none;
}
</style>