<template>
  <Header>
    <h1>{{ title }}</h1>
  </Header>
</template>

<script>
export default {
  data() {
    return {
      title: 'ToDo List'
    }
  }
}
</script>

<style scoped>
header {
  background-color: blueviolet;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}
h1 {
  font-size: 2.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  color: lightsalmon;
}
</style>
