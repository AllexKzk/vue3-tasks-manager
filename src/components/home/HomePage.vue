<template>
  <main>
    <div class="nav-container">
      <h1>Welcome Home!</h1>
      <nav>
        <RouterLink to="/tasks">
          Tasks
        </RouterLink>
        <RouterLink to="/tasks">
          Add new task
        </RouterLink>
      </nav>
      <div style="width: fit-content; margin: 2em auto;">
        <h2>Tasks for today:</h2>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>
<style scoped>
@import '/src/styles/_colors.css';

h1 {
  color: #30E3CA;
  background: linear-gradient(90deg, rgba(48,227,202,1) 0%, rgba(17,153,158,1) 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.nav-container {
  width: fit-content;
  margin: -20em  auto;

  nav {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
    a {
      margin: 0.3em auto;
      transition: all 0.3s;
    }
    a:hover {
      color: #11999E;
    }
  }
}
</style>