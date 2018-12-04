<template>
  <div id="header-box">
    <header-menu></header-menu>
    <search-box></search-box>
  </div>
</template>

<script>
    import HeaderMenu from "./HeaderMenu";
    import SearchBox from "./SearchBox";
    export default {
        name: "IndexHeader",
      components: {SearchBox, HeaderMenu}
    }
</script>

<style scoped>
  #header-box{
    /*width: 3.6rem;*/
    /*-webkit-flex-direction: column;*/
    position: fixed;
    z-index: 10;
    top: 0px;
    left: 0px;
  }

</style>
