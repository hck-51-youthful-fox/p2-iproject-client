<script>
import { mapActions, mapState } from "pinia";
import { useInvestrStore } from "../stores";
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "dashboard",
  components: {
    VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
  computed: {
    ...mapState(useInvestrStore, [
      "realtimeStock",
      "realtimeLabel",
      "aapl",
      "amzn",
      "goog",
      "email",
    ]),
  },
  watch: {
    realtimeLabel() {
      this.renderChart();
      this.unwatch();
    },
  },
  methods: {
    ...mapActions(useInvestrStore, ["snapPayment", "logout"]),
    renderChart() {
      // console.log(this.realtimeLabel);
      // console.log(this.realtimeStock);
      let myChart = null;
      const data = {
        labels: this.realtimeLabel,
        datasets: [
          {
            label: "AAPL",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: this.realtimeStock,
            pointRadius: 0,
          },
        ],
      };

      const config = {
        type: "line",
        data: data,
        options: { responsive: true },
      };

      // if (myChart != null) chart.update();

      myChart = new Chart(document.getElementById("worldwide-sales"), config);
      // console.log(myChart);
    },
    unwatch() {
      this.$watch("realtimeLabel", callback);
    },
  },
  // mounted() {
  //   this.renderChart();
  // },
};
</script>
<template>
  <div class="container-fluid position-relative d-flex p-0">
    <!-- Sidebar Start -->
    <div class="sidebar pe-4 pb-3">
      <nav class="navbar bg-secondary navbar-dark">
        <a href="index.html" class="navbar-brand mx-4 mb-3">
          <h3 class="text-primary">INVESTR</h3>
        </a>
        <div class="d-flex align-items-center ms-4 mb-4">
          <div class="position-relative"></div>
          <div class="ms-3">
            <h6 class="mb-0">{{ email }}</h6>
            <span>Investor</span>
          </div>
        </div>
        <div class="navbar-nav w-100">
          <a
            @click.prevent="this.$router.push('/')"
            class="nav-item nav-link active"
            ><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a
          >
          <a
            @click.prevent="this.$router.push('/tables')"
            class="nav-item nav-link"
            ><i class="fa fa-table me-2"></i>Your Investment</a
          >
        </div>
      </nav>
    </div>
    <!-- Sidebar End -->

    <!-- Content Start -->
    <div class="content">
      <!-- Navbar Start -->
      <nav
        class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0"
      >
        <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
          <h2 class="text-primary mb-0">INVESTR</h2>
        </a>
        <div class="navbar-nav align-items-center ms-auto">
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <span class="d-none d-lg-inline-flex">{{ email }}</span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0"
            >
              <a href="#" class="dropdown-item" @click.prevent="logout"
                >Log Out</a
              >
            </div>
          </div>
        </div>
      </nav>
      <!-- Navbar End -->

      <!-- Sales Chart Start -->
      <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
          <div class="col-sm-12 col-xl-12">
            <div class="bg-secondary text-center rounded p-4">
              <div
                class="d-flex align-items-center justify-content-between mb-4"
              >
                <h6 class="mb-0">Worldwide Stocks</h6>
                <!-- <a href="">Show All</a> -->
              </div>
              <canvas id="worldwide-sales"></canvas>
            </div>
          </div>
        </div>
      </div>
      <!-- Sales Chart End -->

      <!-- Recent Sales Start -->
      <div class="container-fluid pt-4 px-4">
        <div class="bg-secondary text-center rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">Recent Stocks</h6>
            <!-- <a href="">Show All</a> -->
          </div>
          <div class="table-responsive">
            <table
              class="table text-center align-middle table-bordered table-hover mb-0"
            >
              <thead>
                <tr class="text-white">
                  <th scope="col">Symbol</th>
                  <th scope="col">Current Price</th>
                  <th scope="col">High</th>
                  <th scope="col">Low</th>
                  <th scope="col">Previous Close</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>AAPL</strong></td>
                  <td>{{ aapl.c }}</td>
                  <td>{{ aapl.h }}</td>
                  <td>{{ aapl.l }}</td>
                  <td>{{ aapl.pc }}</td>
                  <td>
                    <a
                      class="btn btn-sm btn-primary m-2"
                      @click.prevent="snapPayment(1)"
                      href=""
                      >Buy</a
                    >
                  </td>
                </tr>
                <tr>
                  <td><strong>AMZN</strong></td>
                  <td>{{ amzn.c }}</td>
                  <td>{{ amzn.h }}</td>
                  <td>{{ amzn.l }}</td>
                  <td>{{ amzn.pc }}</td>
                  <td>
                    <a
                      class="btn btn-sm btn-primary m-2"
                      @click.prevent="snapPayment(2)"
                      href=""
                      >Buy</a
                    >
                  </td>
                </tr>
                <tr>
                  <td><strong>GOOG</strong></td>
                  <td>{{ goog.c }}</td>
                  <td>{{ goog.h }}</td>
                  <td>{{ goog.l }}</td>
                  <td>{{ goog.pc }}</td>
                  <td>
                    <a
                      class="btn btn-sm btn-primary m-2"
                      @click.prevent="snapPayment(3)"
                      href=""
                      >Buy</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Recent Sales End -->

      <!-- Widgets Start -->
      <!-- Widgets End -->

      <!-- Footer Start -->
      <!-- <div class="container-fluid pt-4 px-4">
        <div class="bg-secondary rounded-top p-4">
          <div class="row">
            <div class="col-12 col-sm-6 text-center text-sm-start">
              &copy; <a href="#">Your Site Name</a>, All Right Reserved.
            </div>
            <div class="col-12 col-sm-6 text-center text-sm-end"> -->
      <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
      <!-- Designed By <a href="https://htmlcodex.com">HTML Codex</a>
              <br />Distributed By:
              <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div> -->
      <!-- Footer End -->
    </div>
    <!-- Content End -->

    <!-- Back to Top -->
    <!-- <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"
      ><i class="bi bi-arrow-up"></i
    ></a> -->
  </div>
</template>
