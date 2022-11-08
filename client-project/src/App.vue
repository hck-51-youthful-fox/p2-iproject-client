<script>
import LoginPage from "./views/LoginPage.vue";
import RegisterPage from "./views/RegisterPage.vue";
import HomePage from "./views/HomePage.vue";
export default {
  name: "App",
  components: {
    LoginPage,
    RegisterPage,
    HomePage,
  },
};
</script>

<template>
  <div>
    <LoginPage />
    <RegisterPage />
    <HomePage />
  </div>
</template>
