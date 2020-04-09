<template>
  <div class="split">
    <div class="split left">
      <div class="centered">

        <router-link to="/Booking"><h2>Place an Order</h2></router-link>

      </div>
      <div class="vl"></div>
    </div>

    <div class="split right">
      <div class="centered">

        <router-link to="/Orders"><h2>Order history</h2></router-link>

      </div>
    </div>
  </div>

</template>
<style scoped>
  .split {
    height: 100vh;
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;

  }

  /* Control the left side */
  .left {
    top: 60px;
    left: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.pexels.com/photos/1414221/pexels-photo-1414221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

  }

  .vl {
    border-left: 4px solid white;
    height: 500px;
    margin-left: 99.9%;
    margin-top: 15%;

  }

  /* Control the right side */
  .right {
    top: 60px;

    right: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.pexels.com/photos/6023/wood-man-holiday-vacation.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500');

  }

  /* If you want the content centered horizontally and vertically */
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  /* Style the image inside the centered container, if needed */
  .centered img {
    width: 150px;
    border-radius: 50%;
  }

  h2 {
    color: white;
  }

  h2:hover {
    cursor: pointer;
  }
</style>
