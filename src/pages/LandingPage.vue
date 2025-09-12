<script setup lang="ts">
import { ref } from 'vue'
import HomeComponent from '../components/Home.vue'
import ProjectsComponent from '../components/Projects.vue'
import TechnologiesComponent from '../components/Technologies.vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="flex flex-col overflow-y-auto bg-zinc-900">
    <HomeComponent />
    <TechnologiesComponent />
    <ProjectsComponent />

    <!-- Third flex section -->
    <div class="mb-4 flex bg-red-500 p-4 text-white">
      <div class="flex-1">Child 1</div>
      <div class="flex-1">Child 2</div>
    </div>
  </div>

  <nav class="fixed top-1.5 left-15">
    <div
      :class="[
        'flex flex-col gap-y-4 rounded-2xl bg-zinc-800 py-3 text-center text-white transition-all duration-150 sm:flex-row',
        !isOpen && '-translate-x-52 opacity-0',
        isOpen && 'translate-0',
      ]"
    >
      <button @click="" class="flex-1 cursor-pointer px-6 hover:text-amber-400">
        Home
      </button>
      <button @click="" class="flex-1 cursor-pointer px-6 hover:text-amber-400">
        Technologies
      </button>
      <button @click="" class="flex-1 cursor-pointer px-6 hover:text-amber-400">
        Projects
      </button>
      <button @click="" class="flex-1 cursor-pointer px-6 hover:text-amber-400">
        Experience
      </button>
    </div>
  </nav>

  <button
    @click="toggleMenu"
    class="group fixed top-0 left-0 mx-4 my-4 w-8 cursor-pointer"
  >
    <span
      :class="[
        'my-2 block h-[0.15rem] rounded-sm bg-white transition-transform duration-300',
        !isOpen && 'group-hover:rotate-10',
        isOpen && 'translate-y-2 rotate-45',
      ]"
    />
    <span
      :class="[
        'my-2 block h-[0.15rem] rounded-sm bg-white transition-transform duration-300',
        !isOpen && 'group-hover:-rotate-10',
        isOpen && '-translate-y-2 -rotate-45',
      ]"
    />
  </button>
  <div
    class="fixed top-[calc(60%)] left-0 hidden -translate-x-20 rotate-z-90 text-white sm:block"
  >
    <a href="mailto:pawelkraszewski98@gmail.com">pawelkraszewski98@gmail.com</a>
  </div>
</template>

<style scoped></style>
