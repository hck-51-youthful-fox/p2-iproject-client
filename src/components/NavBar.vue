<script>
export default {
  name: "NavBar",
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="#!">News</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#!">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Community Posts</a>
          </li>
        </ul>
        <form class="d-flex">
          <!-- Login & Register Show when Not Logged In -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#!">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#!"
                >Register</a
              >
            </li>
            <a class="nav-link active" aria-current="page" href="#!" style="pointer-events: none;"
              >Hey, User</a
            >
            <!-- Profile Show when Logged In -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Profile</a
              >
              <li class="nav-item">
            </li>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <!-- Buy Premium Show when User Not Premium When Clicked Auto redirect to midtrans payment -->
                <li><a class="dropdown-item" href="#!">Buy Premium</a></li>
                <li><a class="dropdown-item" href="#!">Your Posts</a></li>
              </ul>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </nav>
</template>
