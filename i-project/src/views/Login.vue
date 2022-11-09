<script>
export default {
  name: "Login",
};
</script>
<template>
  <section id="login-form">
    <div class="flex-1 h-screen bg-white flex justify-center flex items-center">
      <div class="w-full max-w-md space-y-8">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="./img/chill_logo.svg"
            alt="d'Movie"
          />
          <h2
            class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
          >
            Login and Chill
          </h2>
          <p
            class="mt-2 text-center text-sm text-gray-600 font-medium text-center"
          >
            Log in on your profile to autocomplete your purchase order with your
            personal data
          </p>
        </div>
        <form>
          <div class="mt-4">
            <label class="block" for="Name">Username</label>
            <input
              id="register-username"
              name="login-username"
              type="text"
              placeholder="Enter your username ..."
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="mt-4">
            <label class="block">Password</label>
            <input
              id="register-password"
              name="login-password"
              type="password"
              placeholder="Enter your password ..."
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="flex">
            <button
              type="submit"
              id="login"
              class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              @click="alreadyLogin"
            >
              Login
            </button>
          </div>
        </form>
        <div class="flex">
          <button
            type="submit"
            class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            @click="alreadyLogin"
          >
            Trial
          </button>
        </div>
        <div class="text-center">
          <p>or Login With</p>
        </div>
        <div id="buttonDiv"></div>
        <div class="text-center">
          <p class="mt-4">
            <a
              href=""
              @click.prevent="alreadyRegister"
              class="font-medium text-primary-600 hover:underline text-blue-500"
              >Don't have an account yet? Sign up</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
