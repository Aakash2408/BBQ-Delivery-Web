<template>
  <div class="main">    
                <img src="./images/logo.png" alt="Girl in a jacket" class="logo">        
                <h1 class="text-center">Welcome {{first_name}}</h1>
                <button class="logoutbtn"> <a class="nav-link" href="" v-on:click="logout">Logout</a></button>
        <div class="split left">
  <div class="centered">
    
   <router-link class="link" to="/Booking"> <h2>Place an Order</h2></router-link>
    
  </div>
  <div class="vl"></div>
</div>

<div class="split right">
  <div class="centered">
    
    <h2>Order history</h2>
    
  </div>
</div>
    </div>

         
            <!-- <table class="table col-md-6 mx-auto">
                <tbody>
                    <tr>
                        <td>First Name  </td>
                        <td>{{first_name}}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{{last_name}}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{{email}}</td>
                    </tr>
                </tbody>
            </table> -->
       
   
</template>

<script>
import jwtDecode from 'jwt-decode'
// import Booking from './Booking'
export default {
  data () {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    }
  }
}
</script>
<style scoped>
.main{
    height:100vh;
    background-color: #111;
}
.split {
  height: 90vh;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

/* Control the left side */
.left {
    top:15%;
  left: 0;
   background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') ;

}

/* Control the right side */
.right {
    top:15%;
  right: 0;
   background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://images.pexels.com/photos/1171585/pexels-photo-1171585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500') ;

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
h2{
    color: white;
}
h2:hover{
    cursor: pointer;
}
h1{
    position: fixed;
    left: 40%;
    margin-top:-5%;
    color: rgb(172, 103, 14);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.vl {
  border-left: 4px solid white;
  height: 500px;
  margin-left:99.9%;
  margin-top:15%;
  
}
.logo{
    height:130px;
    width:130px;
    top:2%;
}
.logoutbtn{
    left:90%;
    position: fixed;
    margin-top: 2%;
    
}
.logoutbtn:hover{
    
    color:Black;
    background: rgb(172, 103, 14);
    transition: 1s ease-in;
}
</style>