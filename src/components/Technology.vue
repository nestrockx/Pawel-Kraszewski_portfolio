<script setup lang="ts">
import ReactLogo from '../assets/react.svg?url'
import VueLogo from '../assets/vue.svg?url'
import KotlinLogo from '../assets/kotlin.svg?url'
import JavaLogo from '../assets/java.svg?url'
import ComposeLogo from '../assets/compose.png?url'
import DaggerLogo from '../assets/dagger.svg?url'
import RoomLogo from '../assets/room.svg?url'
import MVVMLogo from '../assets/mvvm.png?url'
import CleanArchitectureLogo from '../assets/clean_architecture.png?url'
import TypescriptLogo from '../assets/typescript.svg?url'
import JavascriptLogo from '../assets/javascript.svg?url'
import TailwindLogo from '../assets/tailwind.svg?url'
import ViteLogo from '../assets/vite.svg?url'
import DjangoLogo from '../assets/django.svg?url'
import PythonLogo from '../assets/python.svg?url'
import NginxLogo from '../assets/nginx.svg?url'
import CronLogo from '../assets/cron.png?url'
import PostgresLogo from '../assets/postgresql.svg?url'
import SQLiteLogo from '../assets/sqlite.svg?url'
import RedisLogo from '../assets/redis.svg?url'
import GitLogo from '../assets/git.svg?url'
import GitHubLogo from '../assets/github.svg?url'
import DockerLogo from '../assets/docker.svg?url'
import FigmaLogo from '../assets/figma.svg?url'
import RetrofitLogo from '../assets/api.svg?url'

const logos = {
  react: ReactLogo,
  vue: VueLogo,
  kotlin: KotlinLogo,
  java: JavaLogo,
  compose: ComposeLogo,
  dagger: DaggerLogo,
  room: RoomLogo,
  mvvm: MVVMLogo,
  clean_architecture: CleanArchitectureLogo,
  typescript: TypescriptLogo,
  javascript: JavascriptLogo,
  tailwind: TailwindLogo,
  vite: ViteLogo,
  django: DjangoLogo,
  python: PythonLogo,
  nginx: NginxLogo,
  cron: CronLogo,
  postgres: PostgresLogo,
  sqlite: SQLiteLogo,
  redis: RedisLogo,
  git: GitLogo,
  github: GitHubLogo,
  docker: DockerLogo,
  figma: FigmaLogo,
  retrofit: RetrofitLogo,
} as const

const props = defineProps<{
  name: string
  type: keyof typeof logos
}>()

const source = logos[props.type]
</script>

<template>
  <div class="flex items-center gap-2">
    <img :src="source" alt="React Logo" class="h-10 w-10" />
    <div class="text-2xl">{{ name }}</div>
  </div>
</template>
