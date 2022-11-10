<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useAllStore } from "../stores/all";

export default {
  name: "UserDetail",
  data() {
    return {};
  },
  props: [""],
  emits: [""],
  computed: {
    ...mapState(useAllStore, ["status"]),
  },
  watch: {},
  methods: {
    ...mapActions(useAllStore, ["fetchUserDetail"]),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUserDetail(id);
  },
};
</script>

<template>
  <p class="text-2xl font-black">Ini halaman User Detail</p>
  <p>Ini Status emailku: {{ status.email }}</p>
  <p>Ini Status membershipku: {{ status.status }}</p>
</template>
