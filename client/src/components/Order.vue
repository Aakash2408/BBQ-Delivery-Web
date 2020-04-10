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
    <a class="btn btn-primary btn-lg" role="button">
      <router-link class="nav-link" style="color: #eeeeee" to="/Orders">Back</router-link>
    </a>
    <div class="jumbotron" v-if="item_focus">
      <span style="color: #000"><b>Order ID: </b>{{item_focus._id}}</span>
      <div style="background: #333333; color: #eeeeee; padding: 40px;">
        <div v-for="item in Object.keys(pickup)" v-if="pickup">
          <div><b>{{item}}: </b>{{pickup[item]}}</div>
        </div>
      </div>
      <hr class="my-4">
      <div style="background: #333333; color: #eeeeee; padding: 40px;">
        <div v-for="item in Object.keys(address)" v-if="pickup">
          <div><b>{{item}}: </b>{{address[item]}}</div>
        </div>
      </div>

      <hr class="my-4">
      <div style="background: #333333; color: #eeeeee; padding: 40px;">
        <div v-for="product in item_focus.cart">
          <div>
            <b>Quantity: </b>{{product.quantity}}
          </div>
          <div v-for="item in Object.keys(product.product)" v-if="product.product">
            <div><b>{{item}}: </b>{{product.product[item]}}</div>
          </div>
        </div>

      </div>
      <hr class="my-4">

    </div>

  </div>

</template>


<script>
  import Mininav from "./Mininav"

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
    methods: {},
    mounted() {
      var order_history_app = this;
      console.log(JSON.stringify(this.$route.params.order));
      order_history_app.item_focus = this.$route.params.order;
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "pickup_id": order_history_app.item_focus.pickup_id
      });

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("http://localhost:3000/get_pickup", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          order_history_app.pickup = result[0]
        })
        .catch(error => console.log("error", error));


      let new_raw = JSON.stringify({
        "address_id": order_history_app.item_focus.address_id
      });

      let newrequestOptions = {
        method: "POST",
        headers: myHeaders,
        body: new_raw,
        redirect: "follow"
      };

      fetch("http://localhost:3000/get_address", newrequestOptions)
        .then(response => response.json())
        .then(result => {
          order_history_app.address = result[0]
        })
        .catch(error => console.log("error", error));
    }
  }

</script>

