<script>
export default {
  name: "tableIncart",
  props: ["data"],
};
</script>

<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 w-1/2">
    <td class="p-5 flex flex-row">
      <img class="w-2/12 rounded" :src="data.Product.imageUrl" alt="" />
      <h1 class="items-center justify-center">nutrisari</h1>
    </td>

    <td class="py-4 px-6">Rp. {{ data.Product.price }}</td>
    <td class="py-4 px-6">
      <input
        v-model="data.quantity"
        type="number"
        class="border border-orange-600 w-20 h-10 text-black text-center rounded"
      />
    </td>
    <td class="py-4 px-6">Rp. {{ data.Product.price * data.quantity }}</td>
    <td class="py-4 px-6">
      <a
        href="#"
        class="font-medium text-red-600 dark:text-blue-500 hover:underline"
      >
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </td>
  </tr>
</template>
