<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/test2">Test2</router-link> |
      <router-link to="/adDemo">AdDemo</router-link> |
      <router-link to="/adDemo2">AdDemo2</router-link> |
      <router-link to="/vueClassComponent">VueClassComponent</router-link> |
      <router-link to="/vuePropertyDecortor">VuePropertyDecortor</router-link> |
      <router-link to="/vuexClassTest">VuexClassTest</router-link> |
      <router-link to="/vueRenderCreateElement">VueRenderCreateElement</router-link> |
      <router-link to="/vueRenderJsx">VueRenderJsx</router-link> |
      <router-link to="/slotTest">SlotTest</router-link> |
      <router-link to="/directTest">DirectTest</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
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
