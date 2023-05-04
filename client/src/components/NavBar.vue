<script>
import { mapState } from "pinia";
import { useAllStore } from "../stores/all";

export default {
  name: "NavBar",
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {
    moveToCart() {
      this.$router.push("/cart");
    },
    logout() {
      localStorage.clear();
      this.isLogin = false;
      this.$router.push({ name: "menu-page" });
    },
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="/kohihihihi.png" width="100"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">MENU</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PROMO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">OUTLETS</a>
          </li>
          <li class="nav-item dropdown" v-if="isLogin">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Profile
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#" @click.prevent="logout"
                  >Logout</a
                >
              </li>
            </ul>
          </li>
        </ul>
        <div class="cart-link">
          <div class="notification" @click.prevent="moveToCart">
            <img src="@/assets/cart.svg" href="#" alt="" srcset="" />
            <span class="badge">4</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  font-family: "Lato", sans-serif;
  font-weight: 500;
  border-bottom: 1px solid;
}

.cart-link {
  cursor: pointer;
}

.notification {
  text-decoration: none;
  padding: 15px 23px;
  position: relative;
  display: inline-block;
  border-radius: 2px;
}

.notification:hover {
  border: 1px solid;
}

.notification .badge {
  position: absolute;
  border-radius: 50%;
  background-color: red;
  color: white;
}
</style>
