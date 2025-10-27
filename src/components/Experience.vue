<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <div class="my-[5%] ms-[calc(5%)] me-[5%] flex-1 sm:ms-[10%]">
      <h1 class="mb-8 text-4xl font-extrabold text-amber-400">Experience</h1>

      <div
        class="relative space-y-10 border-l-2 border-amber-500/40 pl-6 text-slate-200"
      >
        <!-- Job Entry -->
        <div class="group relative">
          <!-- Dot -->
          <span
            class="absolute top-1 -left-[9px] h-4 w-4 rounded-full bg-amber-500/80 ring-4 ring-amber-500/20"
          ></span>

          <!-- Company + Time -->
          <div class="flex flex-wrap items-center justify-between gap-2">
            <h2 class="px-5 text-2xl font-bold text-white">Accenture</h2>
            <span
              class="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-300/80"
            >
              09.2022 – now
            </span>
          </div>

          <!-- Position -->
          <p class="mt-1 text-lg font-medium text-amber-200">
            Android Developer
          </p>

          <!-- Responsibilities -->
          <ul class="mt-4 list-inside list-disc space-y-2 text-slate-300/90">
            <li>Developing and maintaining applications for Volkswagen EVs</li>
            <li>Android platform development</li>
            <li>Following ASPICE development process</li>
            <li>Providing new functionality based on specification</li>
            <li>Writing unit tests and integration tests</li>
            <li>Debugging, solving bugs, and code reviews</li>
            <li>Creating high-quality documentation</li>
            <li>Knowledge sharing and onboarding new members</li>
            <li>Developing tool for Android log analysis</li>
            <li>Working with Jira and Confluence</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
