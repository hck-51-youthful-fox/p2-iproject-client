<script>
export default {
  name: "cardComment",
  props: ["listComment"],
};
</script>
<template>
  <div class="flex items-center justify-center mt-4">
    <div class="rounded-xl border p-5 shadow-md w-9/12 bg-white">
      <div class="flex w-full items-center justify-between border-b pb-3">
        <div class="flex items-center space-x-3">
          <div
            class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"
          ></div>
          <div class="text-lg font-bold text-slate-700">
            {{ listComment.User.username }}
          </div>
        </div>
      </div>

      <div class="mt-4 mb-6">
        <div class="mb-3 text-xl font-bold">
          Nulla sed leo tempus, feugiat velit vel, rhoncus neque?
        </div>
        <div class="text-sm text-neutral-600">
          {{ listComment.comment }}
        </div>
        <div class="mt-4">
          <img
            class="w-32 h-32 rounded-lg"
            src="https://i.pravatar.cc/32"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
