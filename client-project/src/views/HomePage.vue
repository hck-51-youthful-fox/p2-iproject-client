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
    ...mapActions(useNoteStore, ["payment", "checkPremium"]),
  },
  computed: {
    ...mapState(useNoteStore, ["isPremium"]),
  },
  created() {
    this.checkPremium();
  
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="row d-flex align-content-sm-center p-5">
      <div>
        <span class="display-5">Welcome to My Notes</span>
      </div>
    </div>
    <div class="text-center card col-6 p-5">
      <span>Hello, {{ username }}</span>
      <span v-if="isPremium" class="mt-4">Enjoy your note</span>
      <span v-if="!isPremium" class="mt-4">See your note</span>
    </div>
    <div class="text-center card col-6 p-5">
      <span v-if="!isPremium" class="mt-4"
        >If you want to enjoy your note,</span
      >
      <button @click.prevent="payment" id="pay-button">click here!</button>
    </div>
    <addPage />
    <NotePage />
  </div>
</template>
