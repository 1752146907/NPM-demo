<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <PigButton />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import PigButton from "../package/pig-button/index.vue";

export default {
  name: "App",
  components: {
    PigButton,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
