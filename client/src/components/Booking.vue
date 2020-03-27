<template>
<div class="main">
   <Mininav/>


    <div class="split left">
       <div class="centered">
         <div class="dot1"> <span class="dot"></span> Hey</div>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <div class="vl"></div>
    </div>

    <div class="split right">
      <div class="centered">
      
      </div>
    </div>
</div>

</template>

<script>
import Mininav from './Mininav'
export default {
    name: 'App',
  components:{
    'Mininav':Mininav
  }
}
</script>


<style scoped>
.split {
  height: 100vh;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  
}
.dot {
  height: 55px;
  width: 55px;
  background-color: #bbb;
  border-radius: 50%;
  display: flex;
}
.dot1{
  display: flex;
  font-size:1.17em;
  font-weight: 500;
  padding-top:-40;
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
  top: 50%;
  left: 50%;
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


</style>




