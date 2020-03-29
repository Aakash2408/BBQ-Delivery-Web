<template>
  <div class="Orders">
      <Mininav />
    <div class="content">
<h2>You have no not placed any Orders till now </h2>
 <router-link  to="/Booking"> <h1>Make your first order here</h1> </router-link>
   </div>
  </div>
</template>

<script>
import Mininav from "./Mininav"
export default {
name: 'App',
  components:{
    'Mininav':Mininav
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
</style>