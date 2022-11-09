<script>
import { mapActions, mapState } from "pinia";
import { useAllStore } from "../stores/all";
import Section from "../components/Section.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Section,
  },
  props: [""],
  emits: [""],
  computed: {},
  watch: {},
  methods: {},
  created() {},
};
</script>

<template>
  <div class="container mx-auto">
    <Section :section="'Most Popular'" />

    <Section :section="'Free to Play'" />
  </div>
</template>
