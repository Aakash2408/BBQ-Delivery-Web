<template>
<div class="main">
   <Mininav/>


    <div class="split left">
      
       <div class="centered">
         
           <router-link to="/booking/pickup"><span class="dot">1</span><section class="text">Arrange Delivery and Pickup</section></router-link>
          <router-link to="/booking/bbq"><span class="dot">2</span> <section class="text"> Choose your BBQ</section></router-link>
            <router-link to="/booking/addons"><span class="dot">3</span><section class="text">Add ons</section></router-link>
         
    
          <router-link to="/booking/map"><span class="dot">4</span> <section class="text"> Set up Drop-off point</section></router-link>
          <button style="height:40px;"> <router-link to="/profile"> Home</router-link> </button>
        
         </div>
        
        <div class="vl"></div>
    </div>

    <div class="split right">
    
      <router-view/>
    
    </div>
</div>

</template>

<script>
import Pickup from './Pickup'
import Mininav from './Mininav'
export default {
    name: 'App',
  components:{
    'Mininav':Mininav,
    'Pickup':Pickup

  }
}
</script>


<style scoped>
button:hover{
  transition: 0.5s ease-out;
  background-color:rgba(72, 177, 12, 0.76);
 color:white;
}
.text{
  color:white;
  cursor: pointer;
  position: relative;
  margin-top:-10.5%;
padding-left: 60px;
  display:flex;
  font-size: 37px;
}
.split {
  height: 100vh;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  
}
.dot {
  height: 45px;
  width: 45px;
  background-color: #bbb;
  border-radius: 50%;
  display: flex;
  font-size:1.80em;
  font-weight: 500;
  text-align: center;
padding-left:15px;
  color: black;
 
  margin-top:20%;
}

button{
  margin-top: 50px;
}

/* Control the left side */
.left {
    top:60px;
    left: 0;
   background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image:linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url('https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') ;

}

/* Control the right side */
.right {
    top:60px;

    right: 0;
   background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image:linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url('https://images.pexels.com/photos/1171585/pexels-photo-1171585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500') ;

 }

/* If you want the content centered horizontally and vertically */
.centered {
  position: absolute;
  top: 40.5%;
  left: 40%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.text-center{
    position: fixed;
    left: 43%;
    margin-top:-39px;
    color: rgba(72, 177, 12, 0.76);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.logo{
  padding-top:13px;
  padding-left:14px;
}
span{
  color: rgba(72, 177, 12, 0.76);;
}
.vl {
  border-left: 4px solid white;
  height: 500px;
  margin-left:99.9%;
  margin-top:15%;
  
}

.nav-link{
    left:93%;
    position: fixed;
    margin-top:-48px;
    font-size:1.15em;
    font-weight: bolder;
    color: rgba(72, 177, 12, 0.76);
        
}
.nav-link:hover{
    
    color:Black;
    background: rgb(50, 116, 6);
    transition: 1s ease-in;
}
.main-nav{
  height:60px;
  background:transparent;
}
/* p{
  cursor: pointer;
  padding-top: 172px;
  padding-left: 20px;
  color: white;
  font-size:1.7em;
  font-weight: bolder;
} */


</style>




