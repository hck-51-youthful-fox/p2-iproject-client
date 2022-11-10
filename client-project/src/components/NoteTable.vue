<script>
import { mapActions } from "pinia";
import { useNoteStore } from "../stores/counter";
export default {
  name: "NoteTable",
  props: ["note", "index"],
  methods: {
    ...mapActions(useNoteStore, ["deleteNotes", "editNote"]),
  },
  computed: {
    formatDate() {
      return new Date(this.note.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "long",
      });
    },
  },
};
</script>

<template>
  <tr>
    
    <td class="text-center">{{ index + 1 }}</td>
    <td>{{ note.title }}</td>
    <td>{{ note.description }}</td>
    <td>{{ formatDate }}</td>
    <td>{{ note.Category.title }}</td>
    <td>
      <a class="mr-2" @click.prevent="deleteNotes(note.id)" href="">Delete</a>
      <i @click="this.$router.push(`/notes/${note.id}`)" class="bi bi-pen"></i>
    </td>
  </tr>
</template>
