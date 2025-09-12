<script setup lang="ts">
import Technology from './Technology.vue'
</script>

<template>
  <div v-motion-fade :duration="700" class="flex min-h-screen">
    <div class="flex w-full flex-col">
      <div class="flex flex-col sm:flex-row">
        <div
          class="my-10 ms-[calc(10%)] me-[calc(5%)] flex flex-1 flex-col text-white"
        >
          <div class="group space-y-3 duration-300">
            <div class="text-5xl font-bold">Android</div>
            <div
              class="block h-[0.1rem] w-16 bg-white transition-all group-hover:w-24 group-hover:bg-amber-300"
            />
          </div>
        </div>

        <div
          class="mx-[calc(5%)] my-10 flex flex-2 flex-wrap gap-x-8 gap-y-8 text-white"
        >
          <Technology name="Kotlin" type="kotlin" />
          <Technology name="Java" type="java" />
          <Technology name="Jetpack Compose" type="compose" />
          <Technology name="Coroutines" type="kotlin" />
          <Technology name="Dagger2/Hilt" type="dagger" />
          <Technology name="Room" type="room" />
          <Technology name="Retrofit" type="retrofit" />
          <Technology name="MVVM" type="mvvm" />
          <Technology name="Clean Architecture" type="clean_architecture" />
        </div>
      </div>
      <div class="flex flex-col sm:flex-row">
        <div
          class="my-10 ms-[calc(10%)] me-[calc(5%)] flex flex-1 flex-col text-white"
        >
          <div class="group space-y-3 duration-300">
            <div class="text-5xl font-bold">Frontend</div>
            <div
              class="block h-[0.1rem] w-16 bg-white transition-all group-hover:w-24 group-hover:bg-amber-300"
            />
          </div>
        </div>

        <div
          class="mx-[calc(5%)] my-10 flex flex-2 flex-wrap gap-x-8 gap-y-8 text-white"
        >
          <Technology name="Typescript" type="typescript" />
          <Technology name="Javascript" type="javascript" />
          <Technology name="React" type="react" />
          <Technology name="React Native" type="react" />
          <Technology name="Vue" type="vue" />
          <Technology name="TailwindCSS" type="tailwind" />
          <Technology name="Vite" type="vite" />
        </div>
      </div>
      <div class="flex flex-col sm:flex-row">
        <div
          class="my-10 ms-[calc(10%)] me-[calc(5%)] flex flex-1 flex-col text-white"
        >
          <div class="group space-y-3 duration-300">
            <div class="text-5xl font-bold">Backend</div>
            <div
              class="block h-[0.1rem] w-16 bg-white transition-all group-hover:w-24 group-hover:bg-amber-300"
            />
          </div>
        </div>

        <div
          class="mx-[calc(5%)] my-10 flex flex-2 flex-wrap gap-x-8 gap-y-8 text-white"
        >
          <Technology name="Django" type="django" />
          <Technology name="Django Rest Framework" type="django" />
          <Technology name="Python" type="python" />
          <Technology name="Reverse proxy" type="nginx" />
          <Technology name="Cron jobs" type="cron" />
        </div>
      </div>
      <div class="flex flex-col sm:flex-row">
        <div
          class="my-10 ms-[calc(10%)] me-[calc(5%)] flex flex-1 flex-col text-white"
        >
          <div class="group space-y-3 duration-300">
            <div class="text-5xl font-bold">Databases</div>
            <div
              class="block h-[0.1rem] w-16 bg-white transition-all group-hover:w-24 group-hover:bg-amber-300"
            />
          </div>
        </div>

        <div
          class="mx-[calc(5%)] my-10 flex flex-2 flex-wrap gap-x-8 gap-y-8 text-white"
        >
          <Technology name="PostgreSQL" type="postgres" />
          <Technology name="SQLite" type="sqlite" />
          <Technology name="Redis" type="redis" />
        </div>
      </div>
      <div class="flex flex-col sm:flex-row">
        <div
          class="my-10 ms-[calc(10%)] me-[calc(5%)] flex flex-1 flex-col text-white"
        >
          <div class="group space-y-3 duration-300">
            <div class="text-5xl font-bold">Tools</div>
            <div
              class="block h-[0.1rem] w-16 bg-white transition-all group-hover:w-24 group-hover:bg-amber-300"
            />
          </div>
        </div>

        <div
          class="mx-[calc(5%)] my-10 flex flex-2 flex-wrap gap-x-8 gap-y-8 text-white"
        >
          <Technology name="Git" type="git" />
          <Technology name="Github" type="github" />
          <Technology name="Github Actions" type="github" />
          <Technology name="Docker" type="docker" />
          <Technology name="Figma" type="figma" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
