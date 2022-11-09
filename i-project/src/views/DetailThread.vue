<script>
import { mapActions, mapState } from "pinia";
import navBar from "../components/Navbar.vue";
import { useDataStore } from "../stores/data";
import cardComment from "../components/CardComment.vue";

export default {
  name: "Detail",
  computed: {
    ...mapState(useDataStore, ["detail"]),
  },
  methods: {
    ...mapActions(useDataStore, ["getDetail"]),
  },
  components: {
    navBar,
    cardComment,
  },
  created() {
    const idThread = this.$route.params.idThread;
    this.getDetail(idThread);
  },
};
</script>
<template>
  <navBar />
  {{ detail }}
  <section class="container mx-auto p-6 md:p-10 transform duration-500">
    <div class="flex items-center justify-center">
      <div class="rounded-xl border p-5 shadow-md w-9/12 bg-white">
        <div class="flex w-full items-center justify-between border-b pb-3">
          <div class="flex items-center space-x-3">
            <div
              class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"
            ></div>
            <div class="text-lg font-bold text-slate-700">Beja</div>
          </div>
        </div>

        <div class="mt-4 mb-6">
          <div class="mb-3 text-xl font-bold">
            {{ detail[0].name }}
          </div>
          <div class="text-sm text-neutral-600">
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
    <div class="flex items-center justify-center mt-4">
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
              >
                <div class="flex items-center space-x-1 sm:pr-4">
                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Upload image</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="py-2 px-4 bg-white rounded-b-lg white">
              <label for="editor" class="sr-only">Publish post</label>
              <textarea
                id="editor"
                rows="8"
                class="block px-0 w-full text-sm text-dark-800 bg-white border-white white:bg-gray-200 focus:ring-0 white:text-dark white:placeholder-gray-400"
                placeholder="Write an article..."
                required=""
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Reply Post
          </button>
        </form>
      </div>
    </div>
    <div class="flex items-center justify-center mt-4">
      <div class="rounded-xl border p-5 shadow-md w-9/12 bg-white">
        <form>
          <div
            class="mb-4 w-full bg-white-50 rounded-lg border border-gray-200 white:bg-gray-700 white:border-gray-600"
          >
            <div class="py-2 px-4 bg-white rounded-b-lg white">
              <label for="editor" class="sr-only">Publish post</label>
              <textarea
                id="editor"
                rows="8"
                class="block px-0 w-full text-sm text-dark-800 bg-white border-white white:bg-gray-200 focus:ring-0 white:text-dark white:placeholder-gray-400"
                placeholder="Write an article..."
                required=""
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
