<script>
export default {
  name: "SidebarLink",
  props: ["icon", "title"],
};
</script>

<template>
  <li class="nav-item">
    <a class="nav-link active" href="" id="nav-dashboard">
      <span class="icon material-symbols-outlined me-3">{{ icon }}</span
      >{{ title }}</a
    >
  </li>
</template>
