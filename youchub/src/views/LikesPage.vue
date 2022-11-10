<script>
// import ProductCard from "../components/ProductCard.vue";
import Navbar from "../components/Navbar.vue";
import VideoCard from "../components/VideoCard.vue";
import { useAllStore } from "../stores/all";
import { mapState, mapActions } from "pinia";

export default {
  name: "LikesPage",
  data() {
    return {
      currentPage: 0,
      // likes: [
      //   {
      //     link: "https://i.ytimg.com/vi/TOrFzCfwPrg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpcYPdcPmJyOFL4OG0i8TQjxOYVg",
      //     title:
      //       "Uncle Roger Review REYNOLD POERNOMO Fried Rice (Masterchef Finalist)",
      //     channel: "mrnigelng",
      //     views: "6.3M",
      //     publishedDate: "20111031",
      //   },
      //   {
      //     link: "https://i.ytimg.com/vi/TOrFzCfwPrg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpcYPdcPmJyOFL4OG0i8TQjxOYVg",
      //     title:
      //       "Uncle Roger Review REYNOLD POERNOMO Fried Rice (Masterchef Finalist)",
      //     channel: "mrnigelng",
      //     views: "6.3M",
      //     publishedDate: "20111031",
      //   },
      //   {
      //     link: "https://i.ytimg.com/vi/TOrFzCfwPrg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpcYPdcPmJyOFL4OG0i8TQjxOYVg",
      //     title:
      //       "Uncle Roger Review REYNOLD POERNOMO Fried Rice (Masterchef Finalist)",
      //     channel: "mrnigelng",
      //     views: "6.3M",
      //     publishedDate: "20111031",
      //   },
      //   {
      //     link: "https://i.ytimg.com/vi/TOrFzCfwPrg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpcYPdcPmJyOFL4OG0i8TQjxOYVg",
      //     title:
      //       "Uncle Roger Review REYNOLD POERNOMO Fried Rice (Masterchef Finalist)",
      //     channel: "mrnigelng",
      //     views: "6.3M",
      //     publishedDate: "20111031",
      //   },
      //   {
      //     link: "https://i.ytimg.com/vi/TOrFzCfwPrg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpcYPdcPmJyOFL4OG0i8TQjxOYVg",
      //     title:
      //       "Uncle Roger Review REYNOLD POERNOMO Fried Rice (Masterchef Finalist)",
      //     channel: "mrnigelng",
      //     views: "6.3M",
      //     publishedDate: "20111031",
      //   },
      //   {
      //     link: "https://i.ytimg.com/vi/TOrFzCfwPrg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpcYPdcPmJyOFL4OG0i8TQjxOYVg",
      //     title:
      //       "Uncle Roger Review REYNOLD POERNOMO Fried Rice (Masterchef Finalist)",
      //     channel: "mrnigelng",
      //     views: "6.3M",
      //     publishedDate: "20111031",
      //   },
      //   {
      //     link: "https://i.ytimg.com/vi/TOrFzCfwPrg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpcYPdcPmJyOFL4OG0i8TQjxOYVg",
      //     title:
      //       "Uncle Roger Review REYNOLD POERNOMO Fried Rice (Masterchef Finalist)",
      //     channel: "mrnigelng",
      //     views: "6.3M",
      //     publishedDate: "20111031",
      //   },
      //   {
      //     link: "https://i.ytimg.com/vi/TOrFzCfwPrg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpcYPdcPmJyOFL4OG0i8TQjxOYVg",
      //     title:
      //       "Uncle Roger Review REYNOLD POERNOMO Fried Rice (Masterchef Finalist)",
      //     channel: "mrnigelng",
      //     views: "6.3M",
      //     publishedDate: "20111031",
      //   },
      // ],
    };
  },
  components: {
    // ProductCard,
    Navbar,
    VideoCard,
  },
  computed: {
    ...mapState(useAllStore, ["likes"]),
  },
  methods: {
    ...mapActions(useAllStore, ["fetchLikes"]),
  },
  created() {
    this.fetchLikes();
  },
};
</script>

<template>
  <main>
    <Navbar page="likes" />
    <!-- tambah searchbar + btn speech recognition, akun, tombol lonceng di navbar  -->
    <section class="container-fluid my-3" id="home-section">
      <h1 class="text-center">
        <span class="material-symbols-outlined"> favorite </span>
        My Liked Videos
        <span class="material-symbols-outlined"> favorite </span>
      </h1>
      <div class="ms-sm-auto px-md-5">
        <div>
          <!-- tambah button isi category2 -->
          <CategoryBar />
        </div>
        <div class="row gx-5 p-3">
          <VideoCard
            v-for="(like, i) in likes"
            :key="i"
            :video="like.Video"
            :date="like.Video.publishedDate.slice(0, 10)"
            page="likes"
          />
          <!-- isi homenya, render card video -->
          <!-- <div class="d-flex flex-column align-items-center"> -->
          <!-- <img
                src="../assets/NothingFound-595b40b65ba036ed117d20ae.svg"
                class="mt-5 pt-3 img-fluid w-25"
                alt=""
              />
              <h4 class="fw-bold">OOPSIE</h4>
              <p class="text-muted">
                Sorry, we cannot find what you're looking for :&lpar;
              </p> -->
          <!-- </div> -->
        </div>
        <!-- pagination -->
        <!-- <div v-if="totalPage > 1" class="d-flex justify-content-end mt-5">
            <nav aria-label="">
              <ul class="pagination">
                <li
                  class="page-item"
                  :class="currentPage === 0 ? 'disabled' : ''"
                >
                  <a
                    @click.prevent="handleClick(currentPage - 1)"
                    class="page-link"
                    >Previous</a
                  >
                </li>
                <li
                  v-for="index in totalPage"
                  :key="index"
                  class="page-item"
                  :class="currentPage === index - 1 ? 'disabled' : ''"
                >
                  <a
                    @click.prevent="handleClick(index - 1)"
                    class="page-link"
                    href="#"
                    >{{ index }}</a
                  >
                </li>
                <li
                  class="page-item"
                  :class="currentPage === totalPage - 1 ? 'disabled' : ''"
                >
                  <a
                    @click.prevent="handleClick(currentPage + 1)"
                    class="page-link"
                    href="#"
                    disabled
                    >Next</a
                  >
                </li>
              </ul>
            </nav>
          </div> -->
      </div>
    </section>
  </main>
</template>
