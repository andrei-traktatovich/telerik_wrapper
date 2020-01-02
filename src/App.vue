<template>
  <div id="app">
    
    <div id="my-target">Target
      <anchored-menu :items="theNews"/>    
    </div>
    <button @click="addOne">dd</button>
  </div>
</template>

<script>
//import MyMenu from './components/MyMenu.vue';
import AnchoredMenu from './components/AnchoredMenu.vue';

let counter = 1;

export default {
  name: 'app',
  components: {
    //MyMenu, 
    AnchoredMenu
  },
  data: () => ({
    theNews: [{id: 0, text: 'ff'}]
  }),
  methods: {
    
    addOne() {
      this.theNews.push({ id: counter, text: counter + 'text', items: [{id: counter+10, text: 'text'}]});
      counter+=1;
    }
  },
  mounted() {
    // this is not going to be working this.news.push({ id: 2, text: "text3"});
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
