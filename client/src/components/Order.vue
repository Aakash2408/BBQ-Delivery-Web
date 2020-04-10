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
    <h2 style="color: forestgreen"> Booking Details</h2>
    <center>
      <div class="jumbotron" v-if="item_focus" style="margin-top: 100px; padding: 10px;max-width: 600px;">
        <div style="color: #000;margin: 40px"><b>Order ID: </b>{{item_focus._id}}</div>
        <div style="color: #000;margin: 40px"><b>Placed : </b>{{time_ago(item_focus.placed_at)}}</div>
        <div style="color: #000;margin: 40px"><b>Drop Off Address : </b>
          <span v-for="item in ['street_1','street_2','city','state','telephone']" v-if="pickup">
          {{address[item]}}, </span>
        </div>
        <div style="color: #000;margin: 40px"><b>Products : </b>
          <span v-for="product in item_focus.cart">{{product.product.name}}, </span>

        </div>

        <div style="color: #000;margin: 40px"><b>Booking Totals : </b>
          <span>$ {{item_focus.cart.reduce((total,item)=>{
        // console.log(item.product.price);
        return total + (parseFloat(item.product.price) * parseFloat(item.quantity));
      },0)}}/- </span>

        </div>
        <!--      <div style="background: #333333; color: #eeeeee; padding: 40px;">-->
        <!--        <div v-for="item in Object.keys(pickup)" v-if="pickup">-->
        <!--          <div><b>{{item}}: </b>{{pickup[item]}}</div>-->
        <!--        </div>-->
        <!--      </div>-->
        <!--      <hr class="my-4">-->
        <!--      <div style="background: #333333; color: #eeeeee; padding: 40px;">-->
        <!--        <div v-for="item in Object.keys(address)" v-if="pickup">-->
        <!--          <div><b>{{item}}: </b>{{address[item]}}</div>-->
        <!--        </div>-->
        <!--      </div>-->

        <!--      <hr class="my-4">-->
        <!--      <div style="background: #333333; color: #eeeeee; padding: 40px;">-->
        <!--        <div v-for="product in item_focus.cart">-->
        <!--          <div>-->
        <!--            <b>Quantity: </b>{{product.quantity}}-->
        <!--          </div>-->
        <!--          <div v-for="item in Object.keys(product.product)" v-if="product.product">-->
        <!--            <div><b>{{item}}: </b>{{product.product[item]}}</div>-->
        <!--          </div>-->
        <!--        </div>-->

        <!--      </div>-->
        <hr class="my-4">

      </div>
    </center>



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
    methods: {
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
      var order_history_app = this;
      order_history_app.item_focus = this.$route.params.order;
      order_history_app.total = order_history_app.item_focus.cart.reduce((total,item)=>{
        console.log(item.product.quantity);
        return total + parseFloat(item.product.price);
      },0);
      console.log(order_history_app.total)
      console.log(JSON.stringify(this.$route.params.order));
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

