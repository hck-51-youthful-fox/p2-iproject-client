<script>
export default {
  name: "Register",
};
</script>
<template>
  <section id="register-form">
    <div class="flex columns-1 flex-wrap">
      <div
        class="flex-1 h-screen bg-white flex justify-center flex items-center"
      >
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
              Sign Up and Chill the Movie
            </h2>
            <p
              class="mt-2 text-center text-sm text-gray-600 font-medium text-center"
            >
              Cheers Up Velas !
            </p>
          </div>
          <form action="" method="POST">
            <div class="mt-4">
              <div>
                <label class="block" for="Name">Username</label>
                <input
                  id="register-username"
                  type="text"
                  placeholder="Enter your username ..."
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="mt-4">
                <label class="block" for="email">Email</label>
                <input
                  id="register-email"
                  type="text"
                  placeholder="Enter your email ..."
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="mt-4">
                <label class="block">Password</label>
                <input
                  id="register-password"
                  type="password"
                  placeholder="Enter your password ..."
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="mt-4">
                <label class="block">Phone Number</label>
                <input
                  id="register-phone"
                  type="number"
                  placeholder="Enter your phone number ..."
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="mt-4">
                <label class="block">Address</label>
                <input
                  id="register-address"
                  type="text"
                  placeholder="Enter your phone number ..."
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="flex">
                <button
                  class="w-full py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  Create Account
                </button>
              </div>
              <div class="text-center">
                <p class="mt-8">
                  <a
                    href=""
                    @click.prevent="notRegister"
                    class="font-medium text-primary-600 hover:underline text-blue-500"
                    >Already have account? Sign In</a
                  >
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
