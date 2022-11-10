<script>
import { mapActions } from 'pinia';
import { useRZStore } from '../stores/RZ';

export default {
    name: "LoginPage",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        ...mapActions(useRZStore, ['loginToSite', 'googleSignIn']),
        handleCredentialResponse(response){
        this.googleSignIn(response)
      }
    },
    mounted() {
      const cb = this.handleCredentialResponse
      window.onload = function () {
      google.accounts.id.initialize({
      client_id:
      "477962961064-dvup5hfmnigcka0t6nmpiheiqa7bafrf.apps.googleusercontent.com",
      callback: cb,
      });
      google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" } // customization attributes
     );
    };
    }
}
</script>
<template>
     <section>
      <div class="container mt-16 max-w-sm bg-white m-auto p-10 rounded-md shadow-lg">
        <h1 class="text-3xl font-thin text-center">Form Login</h1>
        <form id="login" class="mt-5" @submit.prevent="loginToSite(email, password)">
          <label for="" class="block">
            <span class="block font-semibold text-sm text-slate">Email</span>
            <input type="text" v-model="email" class="block w-full mt-1 border border-gray-400 rounded-md" placeholder="Enter email address ..."/>
          </label>
          <label for="" class="block">
            <span class="block font-semibold text-sm text-slate">Password</span>
            <input type="password" v-model="password" class="block w-full mt-1 border border-gray-400 rounded-md" placeholder="Enter your password ..."/>
          </label>
          <button type="submit" class="mt-4 text-sm bg-sky-400 border border-1 px-2 py-1 rounded-md text-white">Login</button>
        </form>
        <br>
        <div id="buttonDiv"></div>
      </div>
</section>
</template>