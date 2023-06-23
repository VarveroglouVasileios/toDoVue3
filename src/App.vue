<template>
  <the-header></the-header>
  <items-created></items-created>
  <items-list></items-list>
</template>

<script>
import ItemsList from './components/Items/ItemsList.vue'
import ItemsCreated from './components/Items/ItemsCreated.vue'
import TheHeader from './components/Layout/TheHeader.vue'
export default {
  components: {
    TheHeader,
    ItemsCreated,
    ItemsList
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}
</style>
