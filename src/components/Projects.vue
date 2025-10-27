<script setup lang="ts">
import { ref } from 'vue'
import Phone from '../assets/phone.svg'

const destination = ref<string>('home')

const changeDestination = (newDestination: string) => {
  destination.value = newDestination
}
</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <div
      class="mx-[calc(10%)] my-10 flex flex-1 flex-col justify-center text-white"
    >
      <h2 v-show="destination == 'home'" class="py-10 text-4xl">
        My mobile apps
      </h2>
      <p v-show="destination == 'home'" class="text-2xl">
        Click the app for a short demo
      </p>

      <h2 v-show="destination.match('signaly.*')" class="py-10 text-4xl">
        Wǒde Dictionary
      </h2>
      <div v-show="destination.match('signaly.*')">
        <p class="text-xl">Mandarin-Polish dictionary android application.</p>
        <p>Features:</p>
        <p>
          Integrated ML model for Chinese handwriting recognition with easy word
          searching.
        </p>
        <p>
          Local database with dictionary word definitions and Chinese radical
          signs data.
        </p>
        <p>
          Custom view for Chinese characters learning using user input who
          follows the order and direction of the strokes.
        </p>
        <p>Built-in flash cards system.</p>
      </div>

      <h2 v-show="destination.match('katana.*')" class="py-10 text-4xl">
        Shake Flashlight Katana
      </h2>
      <div v-show="destination.match('katana.*')">
        <p class="text-xl">
          Android application enhancing smartphone's flashlight usability.
        </p>
        <p>
          Enables user to turn on/off the flashlight with double swing of the
          phone and change light brightness.
        </p>
        <a
          href="https://github.com/nestrockx/KatanaFlashlight-shake-phone-android-app"
          target="_blank"
          class="text-amber-300"
          >Repository</a
        >
      </div>
      <div v-show="destination.match('katana.*')" class="mt-5">
        <a
          href="https://play.google.com/store/apps/details?id=com.wegielek.katana_flashlight"
          target="_blank"
          class="text-2xl text-amber-300"
          >Play store</a
        >
      </div>

      <h2 v-show="destination.match('poker.*')" class="py-10 text-4xl">
        Simple Planning Poker
      </h2>
      <div v-show="destination.match('poker.*')">
        <p class="text-xl">
          A full-stack application including Android app,
          <a
            class="text-amber-300 underline"
            href="https://simple-planning-poker.onrender.com/"
            target="_blank"
            >website in React</a
          >
          and backend in Django designed to handle sprint planning through
          real-time collaborative story points estimation.
        </p>
        <p>Ideal for Scrum Masters and Agile teams.</p>
        <p>Features:</p>
        <p>
          - Users can create or join planning rooms where the team can vote for
          the tasks effort together. Supports different predefined sets of
          estimation values (e.g., Fibonacci, T-shirt sizes), allowing teams to
          choose the format that best fits their workflow.
        </p>
        <p>
          - Easily add, remove, and switch between user stories during a
          planning session.
        </p>
        <p>
          - Built with WebSocket and Redis database to provide instant
          synchronization between participants—includes features like summoning
          users to vote for the chosen story, tracking voting status, and
          revealing results simultaneously for all participants.
        </p>
        <p>- Supports guest login.</p>
        <a
          href="https://github.com/nestrockx/simple_planning_poker_android"
          class="text-amber-300"
          target="_blank"
          >Repo link</a
        >
      </div>
      <div v-show="destination.match('poker.*')" class="mt-5">
        <a
          href="https://play.google.com/store/apps/details?id=com.wegielek.simpleplanningpoker"
          target="_blank"
          class="text-2xl text-amber-300"
          >Play store</a
        >
      </div>
    </div>
    <div class="my-10 flex flex-col items-end justify-center text-white">
      <div class="relative mx-0 h-[800px] w-[400px] sm:mx-[calc(8%)]">
        <Phone class="absolute w-100" />

        <transition
          enter-active-class="transition-opacity duration-500"
          enter-from-class="opacity-0"
          leave-active-class="transition-opacity duration-500"
          leave-to-class="opacity-0"
        >
          <div :key="destination">
            <div v-show="destination == 'home'">
              <img
                src="../assets/HomeScreen.jpg"
                alt="Phone"
                class="absolute top-20 left-11 h-162 w-78 rounded-t-3xl rounded-b-4xl"
              />
              <button
                @click="changeDestination('poker1')"
                class="absolute top-72 left-14 h-14 w-14 cursor-pointer rounded-2xl bg-orange-300/30"
              />
              <button
                @click="changeDestination('signaly')"
                class="absolute top-72 left-43 h-14 w-14 cursor-pointer rounded-2xl bg-orange-300/30"
              />
              <button
                @click="changeDestination('katana')"
                class="absolute top-72 left-72 h-14 w-14 cursor-pointer rounded-2xl bg-orange-300/30"
              />
            </div>

            <div v-show="destination == 'signaly'">
              <img
                src="../assets/WodeScreen.jpg"
                alt="Phone"
                class="absolute top-20 left-11 h-162 w-78 rounded-t-3xl rounded-b-4xl"
              />
              <button
                @click="changeDestination('signaly2')"
                class="absolute top-166 left-78 h-10 w-10 cursor-pointer rounded-2xl bg-orange-300/30"
              />
              <button
                @click="changeDestination('home')"
                class="absolute top-177 left-36 h-6 w-28 cursor-pointer rounded-4xl bg-orange-300/30"
              />
            </div>

            <div v-show="destination == 'signaly2'">
              <img
                src="../assets/WodeScreen2.jpg"
                alt="Phone"
                class="absolute top-20 left-11 h-162 w-78 rounded-t-3xl rounded-b-4xl"
              />
              <button
                @click="changeDestination('signaly3')"
                class="absolute top-167 left-45 h-10 w-10 cursor-pointer rounded-2xl bg-orange-300/30"
              />
              <button
                @click="changeDestination('home')"
                class="absolute top-177 left-36 h-6 w-28 cursor-pointer rounded-4xl bg-orange-300/30"
              />
            </div>

            <div v-show="destination == 'signaly3'">
              <img
                src="../assets/WodeScreen3.jpg"
                alt="Phone"
                class="absolute top-20 left-11 h-162 w-78 rounded-t-3xl rounded-b-4xl"
              />
              <button
                @click="changeDestination('signaly2')"
                class="absolute top-167 left-19 h-10 w-10 cursor-pointer rounded-2xl bg-orange-300/30"
              />
              <button
                @click="changeDestination('home')"
                class="absolute top-177 left-36 h-6 w-28 cursor-pointer rounded-4xl bg-orange-300/30"
              />
            </div>

            <div v-show="destination == 'katana'">
              <img
                src="../assets/KatanaScreen.jpg"
                alt="Phone"
                class="absolute top-20 left-11 h-162 w-78 rounded-t-3xl rounded-b-4xl"
              />
              <button
                @click="changeDestination('home')"
                class="absolute top-175 left-36 h-6 w-28 cursor-pointer rounded-4xl bg-orange-300/30"
              />
            </div>

            <div v-show="destination == 'poker1'">
              <img
                src="../assets/PokerScreen.jpg"
                alt="Phone"
                class="absolute top-20 left-11 h-162 w-78 rounded-t-3xl rounded-b-4xl"
              />
              <button
                @click="changeDestination('poker2')"
                class="absolute top-122 left-36 h-12 w-28 cursor-pointer rounded-4xl bg-orange-300/30"
              />
              <button
                @click="changeDestination('home')"
                class="absolute top-175 left-36 h-6 w-28 cursor-pointer rounded-4xl bg-orange-300/30"
              />
            </div>
            <div v-show="destination == 'poker2'">
              <img
                src="../assets/PokerScreen2.jpg"
                alt="Phone"
                class="absolute top-20 left-11 h-162 w-78 rounded-t-3xl rounded-b-4xl"
              />
              <button
                @click="changeDestination('poker3')"
                class="absolute top-28 left-12 h-10 w-10 cursor-pointer rounded-2xl bg-orange-300/30"
              />
              <button
                @click="changeDestination('home')"
                class="absolute top-175 left-36 h-6 w-28 cursor-pointer rounded-4xl bg-orange-300/30"
              />
            </div>
            <div v-show="destination == 'poker3'">
              <img
                src="../assets/PokerScreen3.jpg"
                alt="Phone"
                class="absolute top-20 left-11 h-162 w-78 rounded-t-3xl rounded-b-4xl"
              />
              <button
                @click="changeDestination('poker2')"
                class="absolute top-28 left-12 h-10 w-10 cursor-pointer rounded-2xl bg-orange-300/30"
              />
              <button
                @click="changeDestination('home')"
                class="absolute top-175 left-36 h-6 w-28 cursor-pointer rounded-4xl bg-orange-300/30"
              />
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
