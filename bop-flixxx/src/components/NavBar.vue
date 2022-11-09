<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/customer";

export default {
  name: "Navbar",
  computed: {
    ...mapState(useUserStore, ["isLogin", "username"]),
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),
  },
};
</script>

<template>
  <section id="navbar-section" class="sticky-top">
    <nav
      class="navbar navbar-expand-lg bg-light"
      style="background-color: #e3f2fd"
    >
      <div class="container-fluid">
        <a
          @click.prevent="$router.push({ name: 'home' })"
          class="navbar-brand"
          href="#"
        >
          <img
            src="../image/icons8-career-path-64.png"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Joby
        </a>
        <div id="nav-button" class="nav-signup" v-if="!isLogin">
          <button
            @click="$router.push({ name: 'login' })"
            type="button"
            class="btn btn-nav btn-outline-dark"
          >
            Log In
          </button>
          <button
            @click="$router.push({ name: 'register' })"
            type="button"
            class="btn btn-nav btn-outline-dark"
          >
            Sign Up
          </button>
        </div>
        <div class="dropdown" v-if="isLogin">
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Welcome {{ username }}
          </button>
          <ul class="dropdown-menu" style="min-width: 100%">
            <li>
              <a @click.prevent="logout" class="dropdown-item" href="#"
                >Log Out</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<style>
.navbar-collapse {
  display: flex;
  justify-content: center;
}

.btn-nav {
  margin-right: 15px;
}

.nav-signup {
  display: flex;
  align-items: center;
}
</style>
