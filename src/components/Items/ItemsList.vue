<template>
  <div>
    <base-card>
      <h3 class="title__text">ToDo List</h3>
      <ul class="items__list">
        <li class="list" v-for="item in todos" :key="item.id">
          <input
            class="radio__button"
            type="radio"
            :name="item.id"
            @click="complete(item.id)"
            :checked="item.completed"
          />
          <p class="list__text" :class="{ 'line-through': item.completed }">{{ item.title }}</p>
          <p class="list__text" :class="{ 'line-through': item.completed }">
            Expires At: {{ formatDate(item.createdAt) }}
          </p>
          <button class="button__list" @click="deleteItem(item.id)">Delete</button>
        </li>
      </ul>
    </base-card>
  </div>
</template>

<script>
import { format } from 'date-fns'
export default {
  methods: {
    complete(itemId) {
      this.$store.commit('items/completeItem', itemId)
    },
    deleteItem(itemId) {
      console.log(itemId)
      console.log('clicked')
      this.$store.dispatch('items/deleteItem', itemId)
    }
  },
  created() {
    this.$store.dispatch('items/loadData')
  },
  computed: {
    formatDate() {
      return (timestamp) => format(new Date(timestamp), 'yyyy-MM-dd')
    },
    todos() {
      return this.$store.getters['items/todos']
    }
  }
}
</script>

<style scoped>
.items__list {
  padding: 2rem 0;
}

.list {
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  text-decoration: none;
}

.list__content {
  flex-grow: 1;
}

.line-through {
  text-decoration: line-through;
}

.radio__button {
  border-right: 0.2rem solid red;
}

.list__text {
  font-size: 1.2rem;
  color: royalblue;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
}

.button__list {
  color: red;
  padding: 0.8rem 1.6rem;
  border: none;
  background: none;
}

.button__list:hover {
  color: royalblue;
  border: none;
  background: none;
}

.title__text {
  font-size: 2rem;
  font-weight: 400;
  color: goldenrod;
  text-align: center;
}
</style>
