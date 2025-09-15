<script setup lang="ts">
import { ref } from 'vue'
import HomeComponent from '../components/Home.vue'
import ProjectsComponent from '../components/Projects.vue'
import TechnologiesComponent from '../components/Technologies.vue'
import OtherProjects from '../components/OtherProjects.vue'
import Experience from '../components/Experience.vue'
import Footer from '../components/Footer.vue'
import { onMounted } from 'vue'

onMounted(() => {
  // Scroll down 200px smoothly, then back up
  setTimeout(() => {
    window.scrollTo({ top: 70, behavior: 'smooth' })
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 500) // wait until first scroll finishes
  }, 800) // delay before starting
})

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const experienceRef = ref<HTMLElement | null>(null)
const projectsRef = ref<HTMLElement | null>(null)
const homeRef = ref<HTMLElement | null>(null)
const technologiesRef = ref<HTMLElement | null>(null)

const scrollToExperience = () => {
  if (experienceRef.value) {
    experienceRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToProjects = () => {
  if (projectsRef.value) {
    projectsRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToHome = () => {
  if (homeRef.value) {
    homeRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToTechnologies = () => {
  if (technologiesRef.value) {
    technologiesRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="flex flex-col overflow-y-auto bg-zinc-900">
    <section ref="homeRef">
      <HomeComponent />
    </section>
    <section ref="technologiesRef">
      <TechnologiesComponent />
    </section>
    <section ref="projectsRef">
      <ProjectsComponent />
      <OtherProjects />
    </section>
    <section ref="experienceRef">
      <Experience />
    </section>
    <Footer />
  </div>

  <nav class="fixed top-1.5 left-15">
    <div
      :class="[
        'absolute top-0 left-0 flex flex-col gap-y-4 rounded-2xl bg-zinc-800 py-3 text-center text-white transition-all duration-150 sm:flex-row',
        !isOpen
          ? 'pointer-events-none -translate-x-52 opacity-0'
          : 'translate-0 opacity-100',
      ]"
    >
      <button
        @click="scrollToHome"
        :class="['flex-1 cursor-pointer px-6 hover:text-sky-400']"
      >
        Home
      </button>
      <button
        @click="scrollToTechnologies"
        :class="['flex-1 cursor-pointer px-6 hover:text-sky-400']"
      >
        Technologies
      </button>
      <button
        @click="scrollToProjects"
        :class="['flex-1 cursor-pointer px-6 hover:text-sky-400']"
      >
        Projects
      </button>
      <button
        @click="scrollToExperience"
        :class="[
          'flex-1 cursor-pointer px-6 hover:text-sky-400',
          !isOpen && 'pointer-events-none',
        ]"
      >
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
  <div class="fixed top-3 right-3 text-white">
    <a
      href="https://www.linkedin.com/in/pawe%C5%82-kraszewski-87b872162/"
      target="_blank"
    >
      <i class="pi pi-linkedin text-2xl duration-200 hover:text-sky-400"></i>
    </a>
  </div>
  <!-- <div class="absolute bottom-3 left-3 text-white">
    <i class="pi pi-arrow-down"></i>
  </div> -->
</template>

<style scoped></style>
