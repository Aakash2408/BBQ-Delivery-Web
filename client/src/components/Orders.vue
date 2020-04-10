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

<template>
  <div class="Orders">
    <Mininav/>
    <button class="btn btn-primary" style="color:white;  background:white; text-align:center;">
      <router-link to="/booking">Booking page</router-link>
    </button>
    <div class="content table-responsive" style="margin-top: 100px;" v-if="!item_focus">
      <table class="table table-hover table-dark">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Address ID</th>
          <th scope="col">Pickup ID</th>
        </tr>
        </thead>
        <tbody>
        <tr @click='' @click="goto_order(order)" style="cursor: pointer;"
            v-for="order in  orders">
          <th scope="row">{{order._id}}</th>
          <td>{{order.address_id}}</td>
          <td>{{order.pickup_id}}</td>

        </tr>

        </tbody>
      </table>

    </div>

  </div>

</template>


<script>
  import Mininav from "./Mininav"
  import router from "../router";

  export default {
    name: 'Orders',
    components: {
      'Mininav': Mininav
    },
    data() {
      return {
        item_focus: null,
        orders: [],
        pickup: null,
        address: null
      }
    },
    methods: {
      goto_order: (order) => {
        // localStorage.setItem('address_id', address_id);
        // localStorage.setItem('pickup_id', pickup_id);
        router.push({
          name: 'Order', params: {
            order: order
          }
        })
      }
    },
    mounted() {
      var orders_history_app = this;
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
        .then(result => orders_history_app.orders = result)
        .catch(error => console.log('error', error));
    }
  }

</script>

