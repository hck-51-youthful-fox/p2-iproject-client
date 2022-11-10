<script>
export default{
    name: "Card Product",
    props: ['currentPage', 'totalPage'],
    emits: ['fetchProduct'],
    methods: {
        fetchProduct(page) {
            this.$emit('fetchProduct', page)
        }
    }

}
</script>
<template>
    <div class="flex select-none space-x-1 text-gray-700">
  <div>
    <a href="" class="rounded-md px-4 py-2 bg-gray-200 transition duration-300 ease-in-out hover:bg-gray-400">Previous</a>
  </div>
  <div v-for="index in totalPage" >
    <a @click.prevent="fetchProduct(index)" href="" class="rounded-md px-4 py-2 bg-gray-200 transition duration-300 ease-in-out hover:bg-gray-400">{{ index }}</a>
  </div>
  <div>
    <a href="" class="rounded-md px-4 py-2 bg-gray-200 transition duration-300 ease-in-out hover:bg-gray-400">Next</a>
  </div>
</div>
</template>