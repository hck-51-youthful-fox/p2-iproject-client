<script>
import { mapActions } from "pinia";
import { useCustomerStore } from "../stores/stores";
import { RouterLink } from "vue-router";

export default {
  name: "RegisterView",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    };
  },
  methods: {
    ...mapActions(useCustomerStore, ["register"]),
    onClickRegister() {
      this.register({
        name: this.name,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        address: this.address,
      });
    },
  },
};
</script>

<template>
  <section class="bg-cover bg-slate-50">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h2
            class="text-center text-3xl font-bold tracking-tight text-gray-900"
          >
            Daftar
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Daftar akun untuk pesan makanan kesukaanmu!
          </p>
          <form @submit.prevent="onClickRegister" class="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div class="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="register-name" class="sr-only">Username</label>
                <input
                  v-model="name"
                  type="text"
                  class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-400 sm:text-sm"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label for="register-email" class="sr-only"
                  >Email address</label
                >
                <input
                  v-model="email"
                  id="register-email"
                  name="register-email"
                  type="email"
                  autocomplete="off"
                  class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-400 sm:text-sm"
                  placeholder="Email"
                />
              </div>

              <div>
                <label for="register-password" class="sr-only">Password</label>
                <input
                  v-model="password"
                  id="register-password"
                  name="register-password"
                  type="password"
                  autocomplete="off"
                  class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-400 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <div>
                <label for="register-phone" class="sr-only">Phone Number</label>
                <input
                  v-model="phoneNumber"
                  id="register-phone"
                  name="register-phone"
                  type="number"
                  autocomplete="off"
                  class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-400 sm:text-sm"
                  placeholder="No. Handphone (Opsional)"
                />
              </div>

              <div class="pb-8">
                <label for="register-adress" class="sr-only">Alamat</label>
                <textarea
                  v-model="address"
                  id="register-adress"
                  name="register-adress"
                  type="text"
                  autocomplete="off"
                  class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-400 sm:text-sm"
                  placeholder="Adress (Optional)"
                ></textarea>
              </div>

              <div class="pb-4">
                <button
                  type="submit"
                  class="group relative flex w-full justify-center rounded-md border border-transparent bg-[#00B14F] py-2 px-4 text-sm font-medium text-white hover:bg-[#13984f] focus:outline-none focus:ring-2 focus:bg-[#13984f] focus:ring-offset-2"
                >
                  <span
                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                  >
                  </span>
                  Daftar
                </button>
              </div>
              <p class="mt-2 text-center text-sm text-gray-600">
                Sudah memiliki akun?
                <RouterLink
                  :to="{ name: 'login' }"
                  class="font-medium text-primary-900 hover:underline"
                  >Masuk</RouterLink
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
