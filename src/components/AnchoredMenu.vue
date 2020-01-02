<template>
    <div style="display: inline;">
        {{ opened }}
        <div id="target" style="color: blue; display: inline-block" :class="{ '.my-target': true, 'rotated': opened }">
            &#x39B;
            </div>
        <my-menu @open="onOpened" @select="onSelected" @close="onClosed" :target="'#target'" :items='items' :show-on="'click'"/> 
    </div>
</template>
<style scoped>
    .rotated {
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
    }
</style>
<script>
import MyMenu from './MyMenu.vue';
export default {
    props: [ 'items' ],
    components: {
        MyMenu
    },
    data: () => ({
        opened: false
    }),
    methods: {
        onOpened(e) {
            if (e.event) this.opened = true;
        },
        onClosed(e) {
            // eslint-disable-next-line no-console
            console.log(e);
            if (e.event) this.opened = false;
        },
        onSelected(e) {
            this.opened = false;
            this.$emit('select', e);

        }
    }
}
</script>