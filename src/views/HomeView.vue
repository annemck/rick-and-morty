<template lang="html">
  <div class="container">
      <img class="hover-image" src="../../public/r_and_m_portal.jpg" alt="Rick and Morty Portal"></img>
    <div class="middle">
      <div class="hover-text">
        <router-link :to="{name: 'episodes'}"><p>Enter The Citadel Of Ricks</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="css" scoped>
img {
  opacity: 1;
  padding-top: 60px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.middle {
  transition: .2s ease;
  opacity: 0;
  position: absolute;
  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 4%;
  padding-right: 4%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.middle:hover {
  opacity: 1;
}
.hover-text {
  margin-top: 60px;
  background-color: black;
  color: white;
  font-size: 16px;
}
a {
  min-width: 100%;
  font-size: 30px;
  color: white;
}
</style>
