<script>
export default {
  name: "SearchPlayerView",
};
</script>
<template>
  <section class="bg bg-dark">
    <div class="row d-flex justify-content-center pt-5">
      <h3>Search your favourite player here!</h3>
      <form action="post" style="width: 400px">
        <input type="text" class="form-control" placeholder="Search a player" />
        <button type="submit" class="btn btn-success mt-3">Search</button>
      </form>
    </div>
    <div class="row"></div>
  </section>
</template>
