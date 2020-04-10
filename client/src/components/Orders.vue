<template>
  <div class="Orders">
    <Mininav/>
    <button class="btn btn-primary" style="color:white;  background:white; text-align:center;">
      <router-link to="/booking">Booking page</router-link>
    </button>
    <div class="content">

      <span style="color: #eeeeee">{{orders}}</span>
      <!--      <h5 v-for="order in  orders"> {{order._id}}{{order.cart}}{{order.address_id}}</h5>-->
    </div>

  </div>

</template>

<script>
  import Mininav from "./Mininav"
  import jwtDecode from 'jwt-decode'

  export default {
    name: 'Orders',
    components: {
      'Mininav': Mininav
    },


    data() {
      const token = localStorage.usertoken;
      const decoded = jwtDecode(token);
      return {

        orders: [],
        state: decoded.state,
        city: decoded.city,
        street_1: decoded.street_1,
        tel: decoded.tel
      }
    },
    mounted() {
      let orders_app = this;
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        user_id: localStorage.getItem('userid')
      });

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:3000/get_orders", requestOptions)
        .then(response => response.json())
        .then(result => orders_app.orders = result)
        .catch(error => console.log('error', error));
    }
  }

</script>

<style>
  .Orders {
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.pexels.com/photos/6014/food-holiday-vacation-summer.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500');
    background-size: cover;
    background-position: center;
  }

  h2 {
    color: white;
    text-align: center;
    margin-top: 10%;
  }

  h1 {
    color: rgba(72, 177, 12, 0.76);
    text-align: center;

  }

  .information {
    height: 10vh;
    background-color: aliceblue;
  }
</style>
