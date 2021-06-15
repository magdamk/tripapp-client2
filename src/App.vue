/* eslint-disable prettier/prettier */

<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo right">Logo</a>
      <ul id="nav-mobile" class="left">
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li>
          <router-link :to="{ name: 'Places' }">Lista atrakcji</router-link>
        </li>
        <li><router-link :to="{ name: 'About' }">About</router-link></li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
