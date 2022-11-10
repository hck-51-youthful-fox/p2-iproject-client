<script>
import { mapActions, mapWritableState } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import { useGlobalStore } from "./stores/global";
export default {
  methods: {
    ...mapActions(useGlobalStore, ["logout"]),
  },
  computed: {
    ...mapWritableState(useGlobalStore, ["loggedIn"]),
  },
  created() {
    if (localStorage.getItem("access_token")) this.loggedIn = true;
  },
};
</script>

<template>
  <!-- NAVBAR -->

  <div class="container-fluid">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
    >
      <a
        href="/"
        class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <img
          src="./assets/Rent-a-pet-removebg-preview.png"
          style="width: 60px; height: 60px"
          alt=""
        />
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-dark"> </a></li>
        <li></li>
        <li>
          <RouterLink to="/" href="#" class="nav-link px-2 link-dark"
            >Home</RouterLink
          >
        </li>
        <li></li>
        <li>
          <RouterLink
            v-if="loggedIn"
            to="/rents"
            href="#"
            class="nav-link px-2 link-dark"
            >Rents</RouterLink
          >
        </li>
      </ul>

      <div class="col-md-3 text-end">
        <button
          v-if="!loggedIn"
          type="button"
          class="btn btn-outline-success me-2"
          @click.prevent="$router.push('/login')"
        >
          Login
        </button>
        <button
          v-if="!loggedIn"
          type="button"
          class="btn btn-outline-success"
          @click.prevent="$router.push('/register')"
        >
          Sign-up
        </button>
        <button
          type="button"
          class="btn btn-outline-danger"
          v-if="loggedIn"
          @click="logout"
        >
          logout
        </button>
      </div>
    </header>
  </div>
  <RouterView />
</template>
