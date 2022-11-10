<script>
import { mapActions, mapState } from "pinia";
import { useNoteStore } from "../stores/counter";
export default {
  name: "editPage",
  data() {
    return {
      noteLocal: {
        title: "",
        description: "",
        date: "",
      },
    };
  },
  computed: {
    // ini pake yg dipake itu yg balikan data dari by Id
    ...mapState(useNoteStore, ["dataById"]),
  },
  methods: {
    ...mapActions(useNoteStore, ["editNote", "getNoteById"]),
  },
  created() {
    this.getNoteById(this.dataById);
    this.noteLocal.title = dataById.title;
    this.noteLocal.description = dataById.description;
    this.noteLocal.date = dataById.date;
  },
};
</script>

<template>
  <div class="bg-light" id="Add-New-Notes">
    <div class="container">
      <h3 class="mb-5 pt-3 border-1">Edit Notes</h3>
      <form id="notes-form" @submit.prevent="editNote">
        <div class="form-group">
          <label for="notes-title" class="form-label">Title</label>
          <input
            v-model="noteLocal.title"
            type="text"
            class="form-control"
            id="notes-name"
            placeholder="Enter name notes"
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <label for="notes-description" class="form-label">Description</label>
          <input
            v-model="noteLocal.description"
            type="text"
            class="form-control"
            id="notes-description"
            placeholder="Enter description notes"
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <label for="notes-date" class="form-label">Date</label>
          <input
            v-model="noteLocal.date"
            type="date"
            class="form-control"
            id="notes-price"
            placeholder="Enter price notes"
            autocomplete="off"
          />
        </div>
        <label for="notes-category" class="form-label">Category</label>
        <select
          v-model="noteLocal.categoryId"
          id="notes-category"
          class="form-select"
        >
          <option value="" selected disabled>-- Select Category --</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.title }}
          </option>
        </select>

        <div class="col-1 d-flex align-items-end mb-2">
          <button class="btn btn-secondary" type="submit">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>
