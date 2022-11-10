<script>
import { useAllStore } from "../stores/all";
import { mapActions, mapState } from "pinia";
const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const sr = new Recognition();

export default {
  name: "Navbar",
  data() {
    return {
      isModalOpen: false,
      query: "",
    };
  },
  props: ["page"],
  computed: {
    ...mapState(useAllStore, ["isLogin", "profPic", "isPremium"]),
  },
  methods: {
    ...mapActions(useAllStore, ["snapPayment", "fetchVideos", "logout"]),
    handleSubmit() {
      this.fetchVideos(this.query);
    },
    start() {
      sr.start();
    },
  },
  mounted() {
    sr.onresult = (evt) => {
      const t = Array.from(evt.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      this.query = t;
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <nav class="navbar bg-white navbar-expand-lg sticky-top py-2 px-0">
      <div class="container-fluid">
        <button href="" class="nav-link ms-2">
          <span class="icon material-symbols-outlined">menu</span>
        </button>
        <a
          @click.prevent="$router.push('/')"
          href=""
          class="border-none col-md-3 col-lg-2 me-0 px-3 fs-6"
        >
          <img
            src="../assets/YouTube_Logo_2017.svg"
            alt=""
            class="img-fluid ms-2"
            width="100"
        /></a>

        <button
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
        <div class="collapse navbar-collapse row" id="navbarNavAltMarkup">
          <div class="col-9">
            <div v-if="page === 'home'" class="d-flex justify-content-center">
              <div class="w-50">
                <form
                  class="input-group input-group-sm"
                  @submit.prevent="handleSubmit"
                >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search.."
                    v-model="query"
                  />
                  <!-- <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  > -->
                  <span
                    class="input-group-text material-symbols-outlined bg-white"
                    id="basic-addon2"
                    >search</span
                  >
                  <!-- </button> -->
                </form>
              </div>
              <button
                @click.prevent="start"
                class="btn btn-light rounded-pill ms-3"
              >
                <span class="icon material-symbols-outlined">mic</span>
              </button>
            </div>
          </div>
          <div class="col-3">
            <div
              v-if="page !== 'login' && page !== 'register'"
              class="d-flex justify-content-end"
            >
              <a
                v-if="!isLogin"
                class="px-2 fw-bold nav-link"
                @click.prevent="$router.push('/login')"
              >
                Sign in</a
              >
            </div>
            <div
              v-if="page !== 'login' && page !== 'register' && isLogin"
              class="navbar-nav d-flex justify-content-end me-2"
            >
              <div class="dropdown dropstart pt-1">
                <a
                  href=""
                  class="dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    class="rounded-circle"
                    width="30"
                    :src="
                      profPic ||
                      'https://st3.depositphotos.com/6672868/13801/v/600/depositphotos_138013506-stock-illustration-user-profile-group.jpg'
                    "
                    alt=""
                  />
                </a>

                <ul class="dropdown-menu">
                  <li>
                    <h6 class="dropdown-header">
                      {{ isPremium ? "Premium" : "Free Member" }}
                    </h6>
                  </li>
                  <li v-if="!isPremium">
                    <a
                      class="dropdown-item"
                      role="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      href="#"
                      @click.prevent="isModalOpen = true"
                      >Go Premium</a
                    >
                  </li>
                  <li v-else>
                    <button
                      @click="$router.push('/likes')"
                      class="dropdown-item"
                      href="#"
                    >
                      Liked Videos
                    </button>
                  </li>
                  <li v-if="isLogin">
                    <a @click.prevent="logout" class="dropdown-item" href="#"
                      >Sign Out</a
                    >
                  </li>
                </ul>
              </div>
              <a href="" @click.prevent="" class="nav-link">
                <span class="icon material-symbols-outlined"
                  >notifications</span
                >
              </a>
              <!-- <a href="" class="nav-link fs-sm" @click.prevent="handleLogout">
                Sign out</a
              > -->
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div
      v-if="isModalOpen"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered text-center">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Premium Account
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body fw-bold">
            <div class="row text-start">
              <div class="col-6 text-center">
                <h6 class="fs-6">IDR</h6>
                <h1>34,990 <br /></h1>
                <h5>/month</h5>

                <p>
                  or save more by subscribing to our <a href="">family plan</a>
                </p>
              </div>
              <div class="col-6">
                <ul>
                  <li>Make all videos downloadable</li>
                  <li>Access to your personalised liked video list</li>
                </ul>
                <button
                  id="pay-button"
                  class="btn btn-danger text-center w-100 fw-bold rounded-pill"
                  @click="snapPayment"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <!-- <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-control,
.input-group-text {
  height: 40px;
  border-radius: 20px;
}

.input-group-text {
  padding-top: 8px;
  font-size: 20px;
}
</style>
