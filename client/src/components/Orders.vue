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
    <h2 style="color: forestgreen"> My Order History</h2>
    <div class="content table-responsive" style="margin-top: 100px; padding: 10px">
      <center>
        <table class="table table-hover table-dark" style="max-width: 600px;">
          <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Placed</th>
          </tr>
          </thead>
          <tbody>
          <tr @click='' @click="goto_order(order)" style="cursor: pointer;"
              v-for="order in  orders">
            <th scope="row">{{order._id}}</th>
            <td>{{time_ago(order.placed_at)}}</td>

          </tr>

          </tbody>
        </table>
      </center>

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
        // console.log(JSON.stringify(order))
        router.push({
          name: 'Order', params: {
            order: order
          }
        })
      },
      time_ago: (time) => {

        switch (typeof time) {
          case 'number':
            break;
          case 'string':
            time = +new Date(time);
            break;
          case 'object':
            if (time.constructor === Date) time = time.getTime();
            break;
          default:
            time = +new Date();
        }
        var time_formats = [
          [60, 'seconds', 1], // 60
          [120, '1 minute ago', '1 minute from now'], // 60*2
          [3600, 'minutes', 60], // 60*60, 60
          [7200, '1 hour ago', '1 hour from now'], // 60*60*2
          [86400, 'hours', 3600], // 60*60*24, 60*60
          [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
          [604800, 'days', 86400], // 60*60*24*7, 60*60*24
          [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
          [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
          [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
          [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
          [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
          [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
          [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
          [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
        ];
        var seconds = (+new Date() - time) / 1000,
          token = 'ago',
          list_choice = 1;

        if (seconds == 0) {
          return 'Just now'
        }
        if (seconds < 0) {
          seconds = Math.abs(seconds);
          token = 'from now';
          list_choice = 2;
        }
        var i = 0,
          format;
        while (format = time_formats[i++])
          if (seconds < format[0]) {
            if (typeof format[2] == 'string')
              return format[list_choice];
            else
              return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
          }
        return time;
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

