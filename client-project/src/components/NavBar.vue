<script>
import { mapActions, mapState } from "pinia";
import { useNoteStore } from "../stores/counter";
export default {
  name: "NavBar",
  methods: {
    ...mapActions(useNoteStore, ["logout", "checkLogin", "checkPremium"]),
  },
  computed: {
    ...mapState(useNoteStore, ["isLogin", "isPremium"]),
  },
  created() {
    this.checkLogin();
    this.checkPremium();
  },
};
</script>

<template>
  <div>
    <nav class="navbar navbar-dark navbar-expand-md" id="app-navbar">
      <div class="container">
        <button
          @click.prevent="$router.push('/')"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar">
            <ul class="navbar-nav">
              <li class="nav-link px-4 text-center col-4">
                <router-link to="/" href="#">Home</router-link>
              </li>
              <li v-if="!isLogin" class="nav-item" role="presentation">
                <a
                  @click.prevent="this.$router.push('/login')"
                  class="nav-link"
                  href="#"
                  >Login</a
                >
              </li>
              <li v-if="!isLogin" class="nav-item" role="presentation">
                <a
                  @click.prevent="this.$router.push('/register')"
                  class="nav-link"
                  href="#"
                  >Register</a
                >
              </li>

              <li class="nav-link px-4 text-center col-4">
                <div v-if="isLogin === true">
                  <a @click.prevent="logout" href="#">Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
