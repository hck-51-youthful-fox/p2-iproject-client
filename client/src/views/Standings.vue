<script>
import Navbar from "../components/Navbar.vue";
import Table from "../components/Table.vue";
import TableRow from "../components/TableRow.vue";
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";
import { useMatchStore } from "../stores/match";
export default {
  name: "Standings",
  components: { Navbar, Table, TableRow },
  methods: {
    ...mapActions(useMatchStore, ["fetchStandings"]),
    ...mapActions(useUserStore, ["loginState"]),
  },

  created() {
    this.loginState();
    this.fetchStandings();
  },
};
</script>

<template>
  <Navbar />

  <div class="overflow-x-auto relative flex justify-center mt-3">
    <Table />
  </div>
</template>
