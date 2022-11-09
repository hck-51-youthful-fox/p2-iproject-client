<script>
export default {
  name: "Sidebar",
  components: {},
  data() {
    return {
      query: {
        name: "",
        minPrice: "",
        maxPrice: "",
        category: "",
      },
    };
  },
};
</script>

<template>
  <nav
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    id="sidebar-menu"
  >
    <div class="position-sticky pt-3 ms-1">
      <ul class="nav flex-column border-bottom py-3">
        <li class="nav-item">
          <a class="nav-link active" href="" id="nav-dashboard">
            <span class="icon material-symbols-outlined me-3">home</span>Home</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="" id="nav-category">
            <span class="icon material-symbols-outlined me-3">thumb_up</span
            >Liked Videos</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="" id="nav-product">
            <span class="icon material-symbols-outlined me-3"
              >subscriptions</span
            >Subscriptions</a
          >
        </li>
      </ul>
      <ul class="nav flex-column border-bottom py-3">
        <li class="nav-item">
          <a class="nav-link active" href="" id="nav-dashboard">
            <span class="icon material-symbols-outlined me-3">history</span
            >History</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="" id="nav-product">
            <span class="icon material-symbols-outlined me-3"
              >smart_display</span
            >Your Videos</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="" id="nav-category">
            <span class="icon material-symbols-outlined me-3">schedule</span
            >Watch Later</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="" id="nav-product">
            <span class="icon material-symbols-outlined me-3"
              >video_library</span
            >library</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="" id="nav-product">
            <span class="icon material-symbols-outlined me-3"
              >playlist_play</span
            >Rituals</a
          >
        </li>
      </ul>
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase"
      >
        <span>Subscriptions</span>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <a class="nav-link">
            <span class="icon material-symbols-outlined me-3">person</span>Hej,
            <span id="username">Ziady!</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="" id="nav-logout">
            <span class="icon material-symbols-outlined me-3">logout</span
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
