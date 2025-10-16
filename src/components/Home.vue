<script setup lang="ts"></script>

<template>
  <div v-motion-fade :duration="700" class="flex min-h-screen flex-row">
    <div
      class="mx-[calc(10%)] my-10 flex flex-1 flex-col justify-center text-white"
    >
      <div
        v-motion-slide-left
        :duration="500"
        :easing="'ease-in-out'"
        class="py-1 text-5xl font-bold"
      >
        MOBILE & FRONTEND
      </div>
      <div
        v-motion-slide-left
        :duration="450"
        :easing="'ease-in-out'"
        class="mx-2 py-1 text-5xl font-bold text-sky-500"
      >
        DEVELOPER
      </div>
      <div
        v-motion-fade
        :delay="200"
        :duration="300"
        class="text-x pt-4 pb-6 break-keep"
      >
        Hi! I'm <b class="text-sky-200">Paweł Kraszewski</b>. A professional
        developer with 3 years of experience in building embedded android,
        mobile and web applications. Including VSCode and IntelliJ Idea plugins.
      </div>
      <a
        href="https://github.com/nestrockx"
        target="_blank"
        class="transform rounded-lg bg-gradient-to-r from-blue-600 to-sky-600 px-6 py-3 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-blue-500 hover:to-sky-500 focus:ring-2 focus:ring-blue-300 focus:outline-none active:scale-95"
      >
        My Github
      </a>
    </div>
    <div
      class="mx-[calc(5%)] my-10 hidden flex-1 flex-col items-end justify-end text-white sm:flex"
    >
      <div class="py-1 text-5xl font-bold">3+</div>
      <div class="py-1 text-xl">Years of experience</div>
      <div class="py-1 text-5xl font-bold">5+</div>
      <div class="py-1 text-xl">Completed projects</div>
    </div>
  </div>
</template>

<style scoped></style>
