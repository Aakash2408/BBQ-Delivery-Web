<template>
  <div class="Orders">
      <Mininav />
       <button class="btn btn-primary" style="color:white;  background:white; text-align:center;"><router-link to="/booking">Booking page</router-link></button>
    <div class="content">

<h2>You have no not placed any Orders till now </h2>
 <router-link  to="/Booking"> <h1 style="font-size:60px;">Make your first order here</h1> </router-link>
<div class="information">
  
  <h1> {{state}}, {{city}},{{street_1}}</h1>
</div>

   </div>
  </div>
</template>

<script>
import Mininav from "./Mininav"
import jwtDecode from 'jwt-decode'
export default {
name: 'orders',
  components:{
    'Mininav':Mininav
  },
 


     data () {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      state: decoded.state,
      city: decoded.city,
      street_1: decoded.street_1,

      tel:decoded.tel
      }
  }
}

</script>

<style>
.Orders{
    height: 100vh;
    background:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://images.pexels.com/photos/6014/food-holiday-vacation-summer.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500');
    background-size: cover;
    background-position: center;
}
h2{
    color: white;
    text-align: center;
    margin-top:10%;
}
h1{
    color: rgba(72, 177, 12, 0.76);
    text-align: center;

}
.information{
  height:10vh;
  background-color:aliceblue;
}
</style>