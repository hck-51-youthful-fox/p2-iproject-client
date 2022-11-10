<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import { useDataStore } from "../stores/data";

export default {
  name: "CardThread",
  props: ["listThread"],
  methods: {
    ...mapActions(useDataStore, ["getDetail"]),
    clickHandler() {
      this.$router.push({
        name: "detail",
        params: {
          idThread: this.listThread.id,
        },
      });
    },
  },
};
</script>
<template>
  <section class="container mx-auto p-6 md:p-10 transform duration-500">
    <div class="flex items-center justify-center">
      <div class="rounded-xl border p-5 shadow-md w-9/12 bg-white">
        <div class="flex w-full items-center justify-between border-b pb-3">
          <div class="flex items-center space-x-3">
            <div
              class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"
            ></div>
            <div class="text-lg font-bold text-slate-700">User Anynomous</div>
          </div>
          <div class="flex items-center space-x-8">
            <div class="text-xs text-neutral-500">
              User rating : {{ listThread.rating }}
            </div>
          </div>
        </div>

        <div class="mt-4 mb-6">
          <a
            class="mb-3 text-xl font-bold cursor-pointer"
            @click.prevent="clickHandler()"
          >
            {{ listThread.name }}
          </a>
          <div class="text-sm text-neutral-600 cursor-pointer">
            {{ listThread.thread }}
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between text-slate-500">
            <div class="flex space-x-4 md:space-x-8">
              <div
                class="flex cursor-pointer items-center transition hover:text-slate-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-1.5 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <span @click.prevent="clickHandler()">{{
                  listThread.Comments.length
                }}</span>
              </div>
              <div
                class="flex cursor-pointer items-center transition hover:text-slate-600"
              >
                <ShareNetwork
                  network="facebook"
                  url="https://vuejs.org/"
                  title="all about typing"
                  description="typing as you can about PC"
                  hashtags="pc"
                >
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-1.5 h-5 w-5"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                      />
                    </svg>
                  </button>
                  <span class="ml-1">Share on Facebook</span>
                </ShareNetwork>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
