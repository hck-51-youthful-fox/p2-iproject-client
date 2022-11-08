<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import { mapWritableState, mapActions } from 'pinia';
// import { store } from './router/index'
import HelloWorld from './components/HelloWorld.vue'

// export default {
//   methods: {
//     ...mapActions()
//   },
// };
</script>

<template>
  <!-- START : REGISTER PAGE -->
  <section class="register-page">

    <div class="modal modal-signin position-static d-block py-5" tabindex="-1" role="dialog" id="modalSignin">
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-4 shadow">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <!-- <h1 class="modal-title fs-5" >Modal title</h1> -->
            <h1 class="fw-bold mb-0 fs-3">Register a new membership</h1>

          </div>

          <div class="modal-body p-5 pt-0">
            <form class="">

              <div class="form-floating mb-3">
                <input type="text" class="form-control rounded-3" id="floatingCallsignReg" placeholder="callsign">
                <label for="floatingCallsignReg">Callsign</label>
              </div>

              <div class="form-floating mb-3">
                <input type="email" class="form-control rounded-3" id="floatingEmailReg" placeholder="name@example.com">
                <label for="floatingEmailReg">Email address</label>
              </div>

              <div class="form-floating mb-3">
                <input type="password" class="form-control rounded-3" id="floatingPasswordReg" placeholder="Password">
                <label for="floatingPasswordReg">Password</label>
              </div>

              <div class="form-floating mb-3">
                <input type="password" class="form-control rounded-3" id="floatingRepasswordReg"
                  placeholder="Repassword">
                <label for="floatingRepasswordReg">Repassword</label>
              </div>

              <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Register</button>

              <small class="text-muted">
                <a href="">
                  I already have a membership
                </a>
              </small>
              <hr class="my-4">
              <h2 class="fs-6 fw-bold mb-3">Or use a third-party</h2>

              <button class="w-100 py-2 mb-2 btn btn-outline-danger rounded-3" type="submit">
                <i class="fa-brands fa-google"></i>
                Sign up with Google
              </button>

              <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                <i class="fa-brands fa-facebook"></i>
                Sign up with Facebook
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END : REGISTER PAGE -->

  <!-- START : LOGIN PAGE -->
  <section class="register-page">

    <div class="modal modal-signin position-static d-block py-5" tabindex="-1" role="dialog" id="modalSignin">
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-4 shadow">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <!-- <h1 class="modal-title fs-5" >Modal title</h1> -->
            <h1 class="fw-bold mb-0 fs-3">Sign in to start your session</h1>

          </div>

          <div class="modal-body p-5 pt-0">
            <form class="">

              <div class="form-floating mb-3">
                <input type="email" class="form-control rounded-3" id="floatingEmailSign" placeholder="name@example.com">
                <label for="floatingEmailSign">Email address</label>
              </div>

              <div class="form-floating mb-3">
                <input type="password" class="form-control rounded-3" id="floatingPasswordSign" placeholder="Password">
                <label for="floatingPasswordSign">Password</label>
              </div>

              <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign In</button>

              <small class="text-muted">
                <a href="">
                  Register a new membership
                </a>
              </small>
              <hr class="my-4">
              <h2 class="fs-6 fw-bold mb-3">Or use a third-party</h2>

              <button class="w-100 py-2 mb-2 btn btn-outline-danger rounded-3" type="submit">
                <i class="fa-brands fa-google"></i>
                Sign in using Google
              </button>

              <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                <i class="fa-brands fa-facebook"></i>
                Sign in using Facebook
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END : LOGIN PAGE -->

</template>