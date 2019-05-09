<template>
  <div class="sidemenu">
    <a href="#home">Home</a>
    <div class="submenu">
      <button class="submenu-button">App 1 Header</button>
      <div class="submenu-content">
        <a href="#">App 1.1</a>
        <a href="#">App 1.2</a>
      </div>
    </div>
    <div class="submenu">
      <button class="submenu-button">App 2 Header</button>
      <div class="submenu-content">
        <a href="#">App 2.1</a>
        <a href="#">App 2.2</a>
        <a href="#">App 2.3</a>
      </div>
    </div>
    <a href="#app3">App 3</a>
  </div>
</template>

<script>
export default {
  name: 'Sidemenu',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

.sidemenu {
  height: 100%;
  background-color: gray;
  width: 200px;
  float: none;
  padding: 0;
  position:fixed;
  z-index:1;
  overflow:auto;
}

</style>
