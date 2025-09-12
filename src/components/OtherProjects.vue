<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    title: 'Simple Planning Poker',
    tag: 'React + Tailwind + Vite',
    desc: 'Website for scrum and agile teams. Real-time team voting on user stories. Easy sprint planning.',
    url: 'https://simple-planning-poker.onrender.com/',
  },
  {
    title: 'Android Studio plugin for WiFi debugging',
    tag: 'Kotlin',
    desc: 'Plugin for easy wireless connection to ADB with your phone.',
    url: 'https://github.com/nestrockx/ADBConnectWiFi',
  },
  {
    title: 'Visual Studio Code extension for adb logs analysis',
    tag: 'Typescript',
    desc: 'Extension for ADB logs filtering and highlighting for easy analysis.',
    url: 'https://marketplace.visualstudio.com/items?itemName=Wegielek.highlight-extension',
  },
  {
    title: 'My Portoflio website',
    tag: 'Vue 3 + Tawilwind + Vite',
    desc: 'A personal portfolio website.',
    url: 'https://github.com/nestrockx/pawelkraszewski_portfolio',
  },
])

const onOpen = (idx: number) => {
  const url = items.value[idx].url
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <div
    v-motion-fade
    :duration="700"
    class="flex min-h-screen items-center justify-center"
  >
    <div
      class="my-[calc(5%)] ms-[calc(10%)] me-[calc(5%)] flex-1 space-y-8 text-2xl text-white"
    >
      <h2 class="mb-6 text-3xl font-extrabold text-white">
        More selected projects
      </h2>

      <ul class="space-y-4">
        <li
          @click="onOpen(idx)"
          v-for="(item, idx) in items"
          :key="idx"
          class="group relative flex cursor-pointer items-start gap-4 rounded-2xl bg-gradient-to-r from-amber-700/70 to-amber-600/60 p-4 shadow-lg ring-1 ring-white/6 transition-transform hover:translate-y-[-3px]"
        >
          <div
            aria-hidden
            class="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white/6 text-lg font-semibold text-white ring-1 ring-white/8"
          >
            {{ idx + 1 }}
          </div>

          <div class="flex-1">
            <div class="flex items-center justify-between gap-4">
              <h3 class="text-lg leading-tight font-semibold text-white">
                {{ item.title }}
              </h3>
              <span
                class="ml-2 rounded-full bg-white/6 px-2 py-1 text-xs text-amber-200"
                >{{ item.tag }}</span
              >
            </div>
            <p class="mt-1 text-sm text-amber-300">{{ item.desc }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
section {
  backdrop-filter: blur(6px) saturate(120%);
}

/* slightly larger hit target on small screens */
@media (max-width: 640px) {
  li {
    padding: 1rem;
  }
}
</style>
