<script>
export default {
  name: "TableRow",
  props: ["standing"],
};
</script>

<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      #
    </th>
    <td class="py-4 px-6">
      <img
        class="w-10 h-9 rounded-full"
        :src="standing.teamLogo"
        alt="profile picture"
      />
    </td>
    <td class="py-4 px-6">{{ standing.team }}</td>
    <td class="py-4 px-6">{{ standing.conference }}</td>
    <td class="py-4 px-6">{{ standing.rank }}</td>
    <td class="py-4 px-6">{{ standing.totalWin }} match</td>
    <td class="py-4 px-6">{{ standing.totalLoses }} match</td>
  </tr>
</template>
