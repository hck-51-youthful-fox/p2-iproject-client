<script>
import { mapActions, mapState } from "pinia";
import navBar from "../components/Navbar.vue";
import { useDataStore } from "../stores/data";
import cardComment from "../components/CardComment.vue";

export default {
  name: "Detail",
  data() {
    return {
      comment: "",
      imgUrl: "",
    };
  },
  computed: {
    ...mapState(useDataStore, ["detail", "dataGif", "isLogin"]),
  },
  methods: {
    ...mapActions(useDataStore, ["getDetail", "addComment", "getGif"]),
    setImgUR(img) {
      this.imgUrl = img;
    },
    submitComment() {
      this.addComment(this.detail[0].id, this.comment, this.imgUrl);
      this.comment = "";
      this.imgUrl = "";
    },
  },
  components: {
    navBar,
    cardComment,
  },
  created() {
    const idThread = this.$route.params.idThread;
    this.comment = "";
    this.imgUrl = "";
    this.getDetail(idThread);
    this.getGif();
  },
};
</script>
<template>
  <navBar />
  <section class="container mx-auto p-6 md:p-10 transform duration-500">
    <div class="flex items-center justify-center">
      <div class="rounded-xl border p-5 shadow-md w-9/12 bg-white">
        <div class="flex w-full items-center justify-between border-b pb-3">
          <div class="flex items-center space-x-3">
            <div
              class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"
            ></div>
            <div class="text-lg font-bold text-slate-700">User Anonymous</div>
          </div>
        </div>

        <div class="mt-4 mb-6">
          <div class="mb-3 text-2xl font-bold">
            {{ detail[0].name }}
          </div>
          <div class="text-xl text-neutral-600">
            {{ detail[0].thread }}
          </div>
        </div>
      </div>
    </div>
    <cardComment
      v-for="listComment in detail[0].Comments"
      :key="listComment.id"
      :listComment="listComment"
    />
    <div class="flex items-center justify-center mt-4" v-if="isLogin !== false">
      <div class="rounded-xl border p-5 shadow-md w-9/12 bg-white">
        <form>
          <div
            class="mb-4 w-full bg-white-50 rounded-lg border border-gray-200 white:bg-gray-700 white:border-gray-600"
          >
            <div
              class="flex justify-between items-center py-2 px-3 border-b white:border-gray-600"
            >
              <div
                class="flex flex-wrap items-center divide-gray-200 sm:divide-x white:divide-gray-600"
              ></div>
            </div>
            <div class="py-2 px-4 bg-white rounded-b-lg white">
              <label for="editor" class="sr-only">Publish post</label>
              <textarea
                v-model="comment"
                id="editor"
                rows="8"
                class="w-full px-4 py-2 mt-2 h-64 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Write an article..."
                required=""
              ></textarea>
              <img
                class="rounded-lg w-64 h-64 mb-4 mt-4"
                v-if="imgUrl"
                :src="imgUrl"
                alt=""
              />
              <div class="rounded-xl border p-8 shadow-md w-full bg-white h-52">
                <div class="flex flex-rows justify-center gap-2 cursor-pointer">
                  <img
                    class="w-32 h-32 rounded-lg scale-100 hover:scale-200"
                    v-for="listGif in dataGif"
                    :src="listGif.images.original.url"
                    alt=""
                    @click="setImgUR(listGif.images.original.url)"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            @click.prevent="addComment(detail[0].id, comment, imgUrl)"
            type="submit"
            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Reply Post
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
