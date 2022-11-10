<script>
import { mapActions } from "pinia";
import { useAllStore } from "../stores/all";

export default {
  name: "Subscribe",
  data() {
    return {};
  },
  props: [""],
  emits: [""],
  computed: {},
  watch: {},
  methods: {
    ...mapActions(useAllStore, ["payment"]),
  },
  created() {
    console.log(localStorage.getItem("UserId"));
  },
};
</script>

<template>
  <p class="text-2xl font-black">Ini halaman Subscribe</p>
  <P>Bayar subscription di halaman ini</P>
  <br />
  <br />
  <p>Subs price: Rp10.000</p>
  <div>
    <button
      @click.prevent="payment"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      id="pay-button"
    >
      Pay, Pay, Pay!
    </button>
  </div>
</template>
