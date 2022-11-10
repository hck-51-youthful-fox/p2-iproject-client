<script>
// import buttonVue from "../components/button.vue";
import { useClientStore } from "../stores/client";
import { mapActions } from "pinia";

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useClientStore, ["register"]),
  },
};
</script>

<template>
  <div class="loginRegister">
    <section
      id="login"
      class="flex flex-row justify-around items-center w-screen h-screen bg-[url('https://cf.shopee.co.id/file/0425c0c5f7607cf709f20e05b8ed60e7')] mix-blend-multiply bg-blue-400 bg-no-repeat bg-cover bg-center"
    >
      <div class="place-self-start items-start px-4 py-2">
        <h1></h1>
      </div>
      <div class="place-self-start items-start px-4 py-2">
        <h1></h1>
      </div>
      <div
        class="flex flex-row w-4/12 h-4/6 justify-center p-5 bg-white gap-5 border-none rounded-sm"
      >
        <div class="w-full flex-column">
          <p class="text-xl font-bold text-black-50 mb-5">RESGUSTER</p>
          <form class="flex flex-col gap-5">
            <input
              v-model="email"
              type="email"
              name="email"
              placeholder="Email"
              class="mt-2 block w-full h-12 px-3 py-2 text-black bg-white border-orange-300 border-2 rounded-sm text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-orange-600"
            />
            <input
              v-model="password"
              type="password"
              name="password"
              placeholder="password"
              class="mt-2 block w-full h-12 px-3 py-2 text-black bg-white border-orange-300 border-2 rounded-sm text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-orange-600"
            />
            <button
              @click.prevent="register(email, password)"
              class="p-3 w-full border-none border-slate-300 rounded-sm mt-3 text-neutral-50 bg-orange-500 hover:bg-orange-600"
            >
              Sign Up
            </button>
            <button class="blasdasldsak"></button>
            <p class="text-black text-center m-4">Or Sign In With</p>
            <div class="flex justify-center" id="buttonDiv"></div>
          </form>
          <div id="buttonDiv"></div>
          <p class="text-white text-center mt-2">
            dont have an account yet?<a href="" class="text-cyan-400">
              SignUp</a
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
