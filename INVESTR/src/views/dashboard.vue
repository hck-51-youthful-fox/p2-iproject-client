<script>
import { mapState } from "pinia";
import { useInvestrStore } from "../stores";

export default {
  name: "dashboard",
  computed: {
    ...mapState(useInvestrStore, ["realtimeStock", "realtimeLabel"]),
  },
  methods: {
    renderChart() {
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
      const myChart = new Chart(
        document.getElementById("worldwide-sales"),
        config
      );
    },
  },
  mounted() {
    this.renderChart();
  },
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
            <h6 class="mb-0">Jhon Doe</h6>
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
              <span class="d-none d-lg-inline-flex">John Doe</span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0"
            >
              <a href="#" class="dropdown-item">My Profile</a>
              <a href="#" class="dropdown-item">Settings</a>
              <a href="#" class="dropdown-item">Log Out</a>
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
                <h6 class="mb-0">Worldwide Sales</h6>
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
            <h6 class="mb-0">Recent Salse</h6>
            <!-- <a href="">Show All</a> -->
          </div>
          <div class="table-responsive">
            <table
              class="table text-start align-middle table-bordered table-hover mb-0"
            >
              <thead>
                <tr class="text-white">
                  <th scope="col">Date</th>
                  <th scope="col">Invoice</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <a class="btn btn-sm btn-primary me-1" href="">Detail</a>
                    <a class="btn btn-sm btn-primary me-1" href="">Buy</a>
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
