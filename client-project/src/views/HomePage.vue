<script>
import { mapActions, mapState } from "pinia";
import { useNoteStore } from "../stores/counter";
import addPage from "../components/addPage.vue";
import NotePage from "../components/NotePage.vue";
export default {
  name: "HomePage",
  components: {
    addPage,
    NotePage,
  },
  methods: {
    ...mapActions(useNoteStore, ["payment", "checkPremium", "checkLogin"]),
  },
  computed: {
    ...mapState(useNoteStore, ["isPremium"]),
  },
  created() {
    this.checkPremium();
    this.checkLogin();
  },
};
</script>

<template>
  <button @click.prevent="payment" id="pay-button">Pay!</button>
</template>
