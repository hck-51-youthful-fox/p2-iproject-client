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
  <nav class="navbar navbar-dark navbar-expand-md" id="app-navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a
      ><button
        data-toggle="collapse"
        class="navbar-toggler"
        data-target="#navcol-1"
      >
        <span class="sr-only">Toggle navigation</span
        ><span class="navbar-toggler-icon"></span>
      </button>
      <div v-if="isLogin" class="collapse navbar-collapse" id="navcol-1">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item" role="presentation">
            <a
              @click.prevent="this.$router.push('/')"
              class="nav-link active"
              href="#"
              >Home</a
            >
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
          <li class="nav-item" role="presentation">
            <a
              @click.prevent="this.$router.push('/premium')"
              class="nav-link"
              href="#"
              >Premium</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
