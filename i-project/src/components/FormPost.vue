<script>
import { mapActions, mapState } from "pinia";
import { useDataStore } from "../stores/data";

export default {
  name: "formPost",
  data() {
    return {
      name: "",
      rating: "",
      thread: "",
    };
  },
  methods: {
    ...mapActions(useDataStore, ["addThread"]),
  },
};
</script>
<template>
  <section class="container mx-auto p-6 md:p-10 transform duration-500">
    <div class="flex items-center justify-center">
      <form
        novalidate=""
        class="rounded-xl border p-5 shadow-md w-9/12 bg-white"
      >
        <h2 class="w-full text-3xl text-center font-bold leading-tight mb-6">
          Add Post
        </h2>
        <div>
          <label for="name" class="block mb-1 ml-1">Topic</label>
          <input
            v-model="name"
            id="name"
            type="text"
            placeholder="Your topic"
            required=""
            class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div>
          <label for="email" class="block mb-1 ml-1 mt-4">Rating</label>
          <select
            class="form-select w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
            v-model="rating"
            id="movie-rating"
            required
          >
            <option value="" selected disabled>
              -- Select Total Rating --
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label for="message" class="block mb-1 ml-1 mt-4">Thread</label>
          <textarea
            v-model="thread"
            id="message"
            type="text"
            placeholder="Your topic ..."
            class="w-full px-4 py-2 mt-2 h-32 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
          ></textarea>
        </div>
        <div>
          <button
            @click.prevent="addThread(name, rating, thread)"
            type="submit"
            class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
