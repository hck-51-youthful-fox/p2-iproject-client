<script>
export default {
  name: "LandingPage",
  methods: {
    moveToHome() {
      this.$router.push({ name: "menu-page" });
    },
    moveToRegister() {
      this.$router.push({ name: "register" });
    },
    moveToLogin() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<template>
  <body>
    <div class="container">
      <img src="@/assets/kohihihihi500.png" />
      <div class="frame">
        <button class="custom-btn btn-6" @click.prevent="moveToHome">
          <span> MENU </span>
        </button>
        <button class="custom-btn btn-6" @click.prevent="moveToRegister">
          <span> REGISTER </span>
        </button>
        <button class="custom-btn btn-6" @click.prevent="moveToLogin">
          <span> LOGIN </span>
        </button>
      </div>
    </div>
  </body>
</template>

<style>
.container {
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border: 5px solid #000;
}

.container img {
  margin-top: 6%;
  width: 200px;
  border-radius: 50%;
}

.frame {
  width: 90%;
  margin: 40px auto;
  text-align: center;
}

button {
  margin: 20px;
  outline: none;
}
.custom-btn {
  width: 130px;
  height: 40px;
  padding: 10px 25px;
  border: 2px solid #000;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

/* 6 */
.btn-6 {
  background: #000;
  color: #fff;
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-6 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-6:before,
.btn-6:after {
  position: absolute;
  content: "";
  height: 0%;
  width: 2px;
  background: #000;
}
.btn-6:before {
  right: 0;
  top: 0;
  transition: all 500ms ease;
}
.btn-6:after {
  left: 0;
  bottom: 0;
  transition: all 500ms ease;
}
.btn-6:hover {
  color: #000;
  background: transparent;
}
.btn-6:hover:before {
  transition: all 500ms ease;
  height: 100%;
}
.btn-6:hover:after {
  transition: all 500ms ease;
  height: 100%;
}
.btn-6 span:before,
.btn-6 span:after {
  position: absolute;
  content: "";
  background: #000;
}
.btn-6 span:before {
  left: 0;
  top: 0;
  width: 0%;
  height: 2px;
  transition: all 500ms ease;
}
.btn-6 span:after {
  right: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  transition: all 500ms ease;
}
.btn-6 span:hover:before {
  width: 100%;
}
.btn-6 span:hover:after {
  width: 100%;
}
</style>
