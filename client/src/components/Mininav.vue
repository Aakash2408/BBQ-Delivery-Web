<template>
  <div>
    <nav class="main-nav">
      <h3 class="logo"> Uber<span class="Grill">Grill</span></h3>
      <h3 class="text-center">Hi {{first_name}}</h3>
      <a class="nav-link" href="" v-on:click="logout"><h3>Logout</h3></a>
    </nav>
  </div>
</template>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Bree+Serif&display=swap');

  .logo {
    padding-top: 13px;
    padding-left: 10px;
    font-family: 'Bree Serif', serif;
    color: White;
    font-weight: 700;
  }

  span {
    color: rgba(72, 177, 12, 0.76);
    padding-top: 13px;
  }

  .vl {
    border-left: 4px solid white;
    height: 500px;
    margin-left: 99.9%;
    margin-top: 15%;

  }

  .text-center {
    position: fixed;
    left: 47%;
    margin-top: -41px;
    color: rgba(72, 177, 12, 0.76);
    font-family: 'Bree Serif', serif;
    font-weight: 500;
  }

  .nav-link {
    right: 4%;
    position: fixed;
    margin-top: -47px;
    font-size: 1.47em;
    font-weight: bold;
    color: white;
    font-weight: 500;
    font-family: 'Bree Serif', serif;

  }

  @media (max-width: 864px) {
    .text-center {
      left: 34%;
      display: block;


    }
  }

  .logoutbtn:hover {

    color: Black;
    background: rgb(50, 116, 6);
    transition: 1s ease-in;
  }

  .main-nav {
    background-color: black;
    height: 60px;
  }

</style>

<script>
  import jwtDecode from 'jwt-decode'

  export default {
    data() {
      const token = localStorage.usertoken;
      const decoded = jwtDecode(token);
      return {
        first_name: decoded.first_name,
        last_name: decoded.last_name,
        email: decoded.email
      }
    }
  }

</script>
