<template>
    <nav>
        <router-link to="/">All Task</router-link>
        <router-link to="/addtask">Add Task</router-link>
    </nav>
    <router-view/>
</template>

<script>

export default {
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');

*{
    margin: 0;
    padding: 0;
    font-family: 'Fira Sans', sans-serif;
    box-sizing: border-box;
    outline: none;
}

body{
    background-color: #081a2f;
    color: #FFF;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

nav{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 5px;
}

nav a {
  font-weight: bold;
  color: #ccc;
  transition: transform 0.2s ease-in-out;
}

nav a.router-link-exact-active {
  /* color: #42b983; */
  transform: scale(1.1);
}
</style>
