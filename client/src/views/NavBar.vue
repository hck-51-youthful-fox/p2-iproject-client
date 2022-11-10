<script>
import { mapState, mapActions } from 'pinia';
import { useRZStore } from '../stores/RZ';
import { RouterLink } from 'vue-router';

export default{
    name: "NavBar",
    computed: {
        ...mapState(useRZStore, ['checkLogin'])
    },
    methods: {
        ...mapActions(useRZStore, ['logout'])
    }
}
</script>
<template>
    <section>
  <nav class="fixed top-0 left-0 bg-white w-full shadow">
    <div class="container m-auto flex justify-between items-center text-gray-700">
      <h1 class="pl-8 py-4 text-xl font-bold">RZ Hobby Shop</h1>
      <ul class="hidden md:flex item-center pr-10 text-base font-semibold cursor-pointer">
        <RouterLink to="/" class="hover:bg-gray-200 py-4 px-6">Home</RouterLink>
        <RouterLink to="/login" class="hover:bg-gray-200 py-4 px-6" v-if="!checkLogin">Sign In</RouterLink>
        <RouterLink to="/register" class="hover:bg-gray-200 py-4 px-6" v-if="!checkLogin">Sign Up</RouterLink>
        <li @click.prevent="logout" class="hover:bg-gray-200 py-4 px-6" v-if="checkLogin">Sign Out</li>
      </ul>
      <button class="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200">
        <div class="w-5 h-1 bg-gray-600 mb-1"></div>
        <div class="w-5 h-1 bg-gray-600 mb-1"></div>
        <div class="w-5 h-1 bg-gray-600 mb-1"></div>
        <div class="absolotue top-0 -right-full h-screen w-8/12 bg-white border">
          <ul class="flex flex-col items-center w-full text-base cursor-pointer pt-10">
            <RouterLink to="/" class="hover:bg-gray-200 py-4 px-6 w-full">Home</RouterLink>
            <RouterLink to="/login" class="hover:bg-gray-200 py-4 px-6 w-full" v-if="!checkLogin">Sign In</RouterLink>
            <RouterLink to="/register" class="hover:bg-gray-200 py-4 px-6 w-full" v-if="!checkLogin">Sign Up</RouterLink>
            <li @click.prevent="logout" class="hover:bg-gray-200 py-4 px-6 w-full" v-if="checkLogin">Sign Out</li>
          </ul>
        </div>
      </button>
    </div>
  </nav>
</section>
</template>