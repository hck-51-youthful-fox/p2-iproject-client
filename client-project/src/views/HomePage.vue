<script>
import { mapActions, mapState } from "pinia";
import { useNoteStore } from "../stores/counter";
import addPage from "../components/addPage.vue";
import NotePage from "../components/NotePage.vue";
export default {
  name: "HomePage",
  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },
  components: {
    addPage,
    NotePage,
  },
  methods: {
    ...mapActions(useNoteStore, [
      "payment",
      "checkPremium",
      // "fetchNotes",
      // "fetchCategories",
    ]),
  },
  computed: {
    ...mapState(useNoteStore, ["isPremium", "payments"]),
  },
  created() {
    this.checkPremium();
    // this.fetchNotes();
    // this.fetchCategories();
  },
};
</script>

<template>
  <div class="bg-light" id="home">
    <div class="container d-flex justify-content-center align-items-center">
      <h3 class="mb-5 pt-3 border-1">Welcome to My Notes</h3>
    </div>
    <div class="d-flex justify-content-center">
      <div class="text-center card col-6 p-5">
        <span>Hello, {{ username }}</span>
        <span v-if="isPremium" class="mt-4">Enjoy your note</span>
        <span v-if="!isPremium" class="mt-4">See your note</span>
      </div>
    </div>

    <br /><br />
    <div class="d-flex justify-content-center">
      <div class="text-center card col-6 p-5">
        <span v-if="!isPremium" class="mt-4"
          >If you want to enjoy your note,</span
        >
        <button
          v-if="!isPremium"
          class="btn btn-dark mb-3"
          @click.prevent="payment"
          id="pay-button"
        >
          click here!
        </button>
        <span v-if="isPremium" class="mt-4">Thanks for choice us</span>
      </div>
    </div>

    <NotePage />
  </div>
</template>
