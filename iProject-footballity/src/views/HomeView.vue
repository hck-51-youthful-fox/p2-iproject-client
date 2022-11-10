<script>
import Navbar from "../components/Navbar.vue";
import MyTeamView from "./MyTeamView.vue";
import TablesPLComponents from "../components/TablesPLComponents.vue";
import CorouselComponents from "../components/CorouselComponents.vue";

export default {
  name: "HomeView",
  data() {
    return {
      name: localStorage.username,
    };
  },
  components: {
    Navbar,
    MyTeamView,
    TablesPLComponents,
    CorouselComponents,
  },
};
</script>

<template>
  <Navbar />
  <section class="bg bg-dark" style="padding-top: 70px">
    <div class="row">
      <div
        style="text-align: center; padding-top: 20px; padding-bottom: 40px"
        class="mt-4"
      >
        <h1>Welcome to your homeground coach {{ name }}</h1>
        <p style="color: white">
          Build your dream XI to share with your friends
        </p>
      </div>
      <CorouselComponents />
    </div>
    <div class="row">
      <div class="col col-8">
        <div class="row" style="margin-top: 100px">
          <div class="col col-2"></div>
          <div class="col col 10">
            <h1 style="color: white">
              Hello all over coaches around the world
            </h1>
            <h4>
              Karena saya adalah orang indonesia maka saya akan memperkenalkan
              diri dengan bahasa indonesia
            </h4>
            <p style="color: white; line-height: 3">
              nama saya ibrahim adam. saya saat ini berstatus sebagai murid di
              Hacktiv8. website ini adalah salah satu project dan portofolio
              saya yang sedang saya kembangkan dan saya harap website ini bisa
              dikembangkan lebih jauh kedepannya. kepada para pengunjung yang
              hadir di website ini saya ucapkan terimakasih dan mohon sarannya
              jika ada masukkan yang ingin disampaikan. masukkan bisa
              disampaikan melalui email dengan alamat sebagai berikut:
              <strong>Ibrahim.ad90@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
      <div class="col col-4">
        <TablesPLComponents />
      </div>
    </div>
  </section>
</template>
<style></style>
