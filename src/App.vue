<template>
    <nav>
        <router-link to="/">All Task</router-link>
        <router-link to="/addtask">Add Task</router-link>
    </nav>
    <router-view v-slot="slotProps">
        <transition name="fade" mode="out-in">
            <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
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

.fade-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s ease-in;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
