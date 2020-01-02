<template>
    <div>
    <kendo-contextmenu @open="onOpen" @close="onClose" :target="target" :show-on="showOn" @select="onItemSelected" :data-source="ds"/>
      {{ dsData }}
    </div>
</template>

<script>
import kendo from '@progress/kendo-ui'
import $ from 'jquery';
export default {
  props: [ 'items', 'target', 'showOn' ],
  data: () => ({
    ds: new kendo.data.HierarchicalDataSource({ data: [] })
    , stuff: null
  }),
  computed: {
    dsData() {
      return this.items.map(item => Object.assign({}, item, { attr: { 'data-item-key': item.id }}));
    }
  },
  watch: {
    dsData(val) {
      this.ds.data(val);
    },
  },
  methods: {
    onItemSelected(e) {
      this.stuff = e.item;
      const key = $(e.item).data('uid');
      // eslint-disable-next-line no-console
      console.log(key, this.ds.getByUid(key));
      e.dataItem = this.ds.getByUid(key);
      if (!e.dataItem.items) this.$emit('select', e);
    },
    onOpen(e) {
      this.$emit('open', e);
    },
    onClose(e) {
      this.$emit('close', e);
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
