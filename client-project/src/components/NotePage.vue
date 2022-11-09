<script>
import { mapActions, mapState } from "pinia";
import { useNoteStore } from "../stores/counter";
import NoteTable from "./NoteTable.vue";
export default {
  name: "NotePage",
  components: {
    NoteTable,
  },
  methods: {
    ...mapActions(useNoteStore, ["fetchNotes"]),
  },
  computed: {
    ...mapState(useNoteStore, ["notes"]),
  },
  created() {
    this.fetchNotes();
  },
};
</script>

<template>
  <div class="expense-table mt-5">
    <div class="">
      <div class="col-12 table-responsive">
        <table class="table bg-light">
          <thead>
            <tr>
              <th class="text-center" scope="col">No</th>
              <th scope="col">Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <NoteTable
              v-for="(note, index) in notes"
              :key="note.id"
              :note="note"
              :index="index"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
