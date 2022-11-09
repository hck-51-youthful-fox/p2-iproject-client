<script>
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
    payment() {
      snap.pay("3fbbacd9-b827-47d7-9ec1-1ea8131c2f93", {
        onSuccess(result) {
          console.log(result);
          console.log("Berhasillllllll");
        },
      });
    },
  },
  created() {},
};
</script>

<template>
  <p class="text-2xl font-black">Ini halaman Subscribe</p>
  <P>Bayar subscription di halaman ini</P>
  <br />
  <br />
  <div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      @click.prevent="payment"
      id="pay-button"
    >
      Pay, Pay, Pay!
    </button>
  </div>
</template>
