<script>
import { mapActions } from "pinia";
import { useNoteStore } from "../stores/counter";
export default {
  name: "HomePage",
  methods: {
    ...mapActions(useNoteStore, ["payment", "checkPremium", "checkLogin"]),
  },
  created() {
    this.checkPremium();
  },
};
</script>

<template>
  <button @click.prevent="payment" id="pay-button">Pay!</button>
</template>
