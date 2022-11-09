<script>
import { mapActions, mapState } from "pinia";
import { useNoteStore } from "../stores/counter";
export default {
  name: "addPage",
  data() {
    return {
      addNotes: {
        title: "",
        description: "",
        date: "",
        categoryId: "",
      },
    };
  },
  methods: {
    ...mapActions(useNoteStore, ["addNotes", "fetchCategories"]),
    handleAdd() {
      this.fetchCategories(this.addNotes);
      (this.addNotes.title = ""), (this.addNotes.description = "");
      (this.addNotes.date = ""), (this.addNotes.categoryId = "");
    },
  },
  computed: {
    ...mapState(useNoteStore, ["categories"]),
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<template>
  <div class="bg-light" id="Add-New-Notes">
    <div class="container">
      <h3 class="mb-5 pt-3 border-1">Add new notes</h3>
      <form id="notes-form" @submit.prevent="handleAdd">
        <div class="form-group">
          <label for="notes-title" class="form-label">Title</label>
          <input
            v-model="addNotes.title"
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
            v-model="addNotes.description"
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
            v-model="addNotes.date"
            type="date"
            class="form-control"
            id="notes-price"
            placeholder="Enter price notes"
            autocomplete="off"
          />
        </div>
        <label for="notes-category" class="form-label">Category</label>
        <select
          v-model="addNotes.categoryId"
          id="notes-category"
          class="form-select"
        >
          <option value="" selected disabled>-- Select Category --</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>

        <div class="col-1 d-flex align-items-end mb-2">
          <button class="btn btn-secondary" type="submit">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>
