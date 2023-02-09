// MyComponent.vue
<template>
  <div>{{ message }}</div>
</template>
<script>
export default {
  data() {
    return { message: 'Hello from MyComponent' }
  }
}
</script>
// main.js import Vue from 'vue' import MyComponent from './MyComponent.vue' Vue.component('MyComponent', MyComponent)
// Build the components library using a tool such as Webpack and export it as a module
<style scoped>

</style>