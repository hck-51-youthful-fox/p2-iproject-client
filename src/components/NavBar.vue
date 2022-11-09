<script>
import { RouterLink } from "vue-router";

export default {
  nama: "NavBar",
  components: {
    RouterLink,
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink
        class="d-flex justify-content-center align-items-center navbar-brand pl-3"
        :to="'/'"
        ><img src="@/assets/logosmall.png" height="55"
      /></RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDarkDropdown"
        aria-controls="navbarNavDarkDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-flex justify-content-between"
        id="navbarNavDarkDropdown"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <RouterLink
              class="nav-link text-white"
              :to="'/login'"
              ><i class="bi bi-door-open"></i> Login</RouterLink
            >
          </li>
          <li class="nav-item active">
            <RouterLink
              class="nav-link text-white"
              :to="'/register'"
              ><i class="bi bi-person-plus"></i> Register</RouterLink
            >
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDarkDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              User Menu
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="navbarDarkDropdownMenuLink"
            >
              <li><RouterLink class="dropdown-item" :to="'/user'">User Details</RouterLink></li>
              <li><a class="dropdown-item" href="/" @click.prevent="logout" >Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- <nav
    class="navbar navbar-expand-lg navbar-light bg-dark sticky-top shadow py-2 px-3"
  >
    <RouterLink
      class="d-flex justify-content-center align-items-center navbar-brand pl-3"
      :to="'/'"
      ><img src="@/assets/logosmall.png" height="55"
    /></RouterLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active mx-5">
          <RouterLink class="nav-link text-white" :to="'/'"
            ><i class="bi bi-house-fill"></i> Home</RouterLink
          >
        </li>
      </ul>

      Dropdown, Logout, My Favorite -->
  <!-- <div class="nav-item dropdown pr-4">
        <a
          class="nav-link dropdown-toggle text-decoration-none text-white"
          href=""
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="bi bi-person-circle"></i> Dropdown disini
        </a>
        <div
          class="dropdown-menu d-flex-col align-items-center justify-content-center"
          aria-labelledby="navbarDropdown"
        >
          <RouterLink class="dropdown-item" :to="'/favorites'">
            <i class="bi bi-heart-fill"></i> My Favorite</RouterLink
          >
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" @click.prevent="logoutCustomer"
            ><i class="bi bi-door-open-fill"></i> Logout</a
          >
        </div>
      </div> -->

  <!-- Login & Register -->
  <!-- <div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a
              class="nav-link text-white"
              href="#"
              @click="$router.push('/login')"
              ><i class="bi bi-door-open"></i> Login</a
            >
          </li>
          <li class="nav-item active">
            <a
              class="nav-link text-white"
              href="#"
              @click="$router.push('/register')"
              ><i class="bi bi-person-plus"></i> Register</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
</template>
