<script>
import TableRow from "./TableRow.vue";
import { useMatchStore } from "../stores/match";
import { mapState } from "pinia";
export default {
  name: "Table",
  props: ["standing"],
  components: { TableRow, TableRow },
  computed: {
    ...mapState(useMatchStore, ["standings"]),
  },
};
</script>

<template>
  <table
    class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mx-8 mt-2 mb-3 border-2"
  >
    <thead
      class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        <th scope="col" class="py-3 px-6">#</th>
        <th scope="col" class="py-3 px-6">team logo</th>
        <th scope="col" class="py-3 px-6">team name</th>
        <th scope="col" class="py-3 px-6">conference</th>
        <th scope="col" class="py-3 px-6">rank</th>
        <th scope="col" class="py-3 px-6">total win</th>
        <th scope="col" class="py-3 px-6">total loss</th>
      </tr>
    </thead>
    <tbody>
      <TableRow
        v-for="standing in standings"
        :key="standing.id"
        :standing="standing"
      />
    </tbody>
  </table>
</template>
