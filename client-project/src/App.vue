<script>
import LoginPage from "./views/LoginPage.vue";
import RegisterPage from "./views/RegisterPage.vue";
export default {
  name: "App",
  components: {
    LoginPage,
    RegisterPage,
  },
};
</script>

<template>
  <div>
    <LoginPage />
    <RegisterPage />
  </div>
</template>
