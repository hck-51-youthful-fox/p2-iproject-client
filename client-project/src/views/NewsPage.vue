<script>
import { mapActions, mapState } from 'pinia';
import { useNoteStore } from '../stores/counter';
export default {
    name: "NewsPage",
    methods: {
        ...mapActions(useNoteStore, ["fetchNewsApi"])
    },
    computed: {
        ...mapState(useNoteStore, ["news"])
    },
    created() {
        this.fetchNewsApi()
    }
}
</script>

<template>
  <div class="container">
    <div class="raw">
        <newsPage/>
    </div>
  </div>
</template>
