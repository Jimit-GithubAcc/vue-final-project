<template>
  <nav>
    <b-navbar variant="primary" type="dark" tag="ul">
      <b-navbar-brand href="#" class="topleft" tag="li">
        Shopping App
      </b-navbar-brand>
      <b-navbar-nav tag="li">
        <b-nav-item to="/home">Home</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav tag="li">
        <b-nav-item to="/NoteBooks">NoteBooks</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav tag="li">
        <b-nav-item to="/Mobile">Mobiles</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="topright" tag="li">
        <b-nav-item to="/cart">
          <b-icon icon="cart2" font-scale="2"></b-icon>
          <span> {{ total }}</span>
        </b-nav-item>
      </b-navbar-nav>
      </b-navbar><br />
  </nav>
</template>
<style scoped>
ul {
  justify-content: center;
  align-items: center;
  height: 3.5rem;
}
li {
  padding-right: 1.5em;
  display: flex;
}
.topright {
  position: initial;
  font-size: 18px;
  top: 8px;
  right: inherit;
}
.topleft {
  position: initial;
  top: 17px;
}
</style>
<script>
export default {
  computed: {
    total () {
      // Fetching total items in cart
      return this.$store.getters.CartData.length
    }
  }
}
</script>
