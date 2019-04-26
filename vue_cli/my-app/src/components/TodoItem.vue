<template>
  <li class='item'>
    <input type="checkbox" v-model="checked">
    <slot name="item" v-bind="{checked}"></slot>
  </li>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      checked: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item {
    color:red;
  }
</style>
