<script>
import { mapActions, mapState } from "pinia";
import { useNoteStore } from "../stores/counter";
export default {
  name: "addPage",
  data() {
    return {
      addNote: {
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
      this.addNotes(this.addNote);
      this.addNote.title = "";
      this.addNote.description = "";
      this.addNote.date = "";
      this.addNote.categoryId = "";
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
  <div class="bg-light p-2" id="Add-New-Notes">
    <div class="container mt-3">
      <div class="mt-5">
        <h3 class="mb-5 pt-3 border-1 mt-5">Add new notes</h3>
      </div>
      <form id="notes-form" @submit.prevent="handleAdd(this.$route.params.id)">
        <div class="form-group">
          <label for="notes-title" class="form-label">Title</label>
          <input
            v-model="addNote.title"
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
            v-model="addNote.description"
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
            v-model="addNote.date"
            type="date"
            class="form-control"
            id="notes-date"
            placeholder="Enter date notes"
            autocomplete="off"
          />
        </div>
        <div>
          <div>
            <label for="notes-category" class="form-label">Category</label>
          </div>
          <div>
            <select
              v-model="addNote.categoryId"
              id="notes-categoryId"
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
          </div>
        </div>

        <div class="d-flex justify-content-start mb-2 mt-3">
          <button class="btn btn-secondary" type="submit">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>
