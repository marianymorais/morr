<template>
  <hi />
</template>

<script>
  import hi from './components/Button/hi.vue'
  export default {
    name: 'App',
    data: ()=> {
      return {
        items: ['first','second','third']
      }
    },
    components: {
      hi
    }
  }
</script>