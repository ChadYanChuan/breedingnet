<template>

  <div class="hello">
    <headerVue index="1"/>
    <skyVue />
    <contetnVue />
    <footerVue />
  </div>
</template>

<script>
import skyVue from './sky/index.vue';
import headerVue from './Header.vue';
import footerVue from './Footer.vue';
import contetnVue from './indexContent/index.vue';

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {headerVue,skyVue,contetnVue,footerVue}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
