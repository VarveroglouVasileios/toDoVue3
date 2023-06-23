<template>
  <items-form @saveData="submitData"></items-form>
</template>

<script>
import ItemsForm from "./ItemsForm.vue";
export default {
  components: {
    ItemsForm,
  },

  methods: {
    submitData(data) {
      console.log("displatch", data);
      this.$store.dispatch("items/createToDo", data);
    },
  },
};
</script>

<style scoped></style>
