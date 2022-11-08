<script>
import { mapWritableState, mapActions } from 'pinia';
import { useRZStore } from '../stores/RZ';

export default {
    name: "RegisterPage",
    methods: {
        ...mapActions(useRZStore, ['register'])
    },
    computed: {
        ...mapWritableState(useRZStore, ['user'])
    }
}
</script>
<template>
    <section>
  <div class="container mt-16 max-w-sm bg-white m-auto p-10 rounded-md shadow-lg">
        <h1 class="text-3xl font-thin text-center">Form Register</h1>
        <form id="register" class="mt-5" @submit.prevent="register">
          <label for="" class="block">
            <span class="block font-semibold text-sm text-slate">Username</span>
            <input
              type="text" v-model="user.username"
              class="block w-full mt-1 border border-gray-400 rounded-md"
              placeholder="Enter your username ..."
            />
          </label>
          <label for="" class="block">
            <span class="block font-semibold text-sm text-slate">Email</span>
            <input
              type="text" v-model="user.email"
              class="block w-full mt-1 border border-gray-400 rounded-md"
              placeholder="Enter email address ..."
            />
          </label>
          <label for="" class="block">
            <span class="block font-semibold text-sm text-slate">Password</span>
            <input
              type="password" v-model="user.password"
              class="block w-full mt-1 border border-gray-400 rounded-md"
              placeholder="Enter your password ..."
            />
          </label>
          <label for="" class="block">
            <span class="block font-semibold text-sm text-slate"
              >Phone Number</span
            >
            <input
              type="text" v-model="user.phoneNumber"
              class="block w-full mt-1 border border-gray-400 rounded-md"
              placeholder="Enter phone number (optional) ..."
            />
          </label>
          <label for="" class="block">
            <span class="block font-semibold text-sm text-slate">Address</span>
            <input
              type="text" v-model="user.address"
              class="block w-full mt-1 border border-gray-400 rounded-md"
              placeholder="Enter your address (optional) ..."
            />
          </label>
            <button
              type="submit"
              class="mt-4 text-sm bg-sky-400 border border-1 px-2 py-1 rounded-md text-white"
            >
              Sign Up
            </button>
        </form>
      </div>
</section>
</template>