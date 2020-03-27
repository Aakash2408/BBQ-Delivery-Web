<template>

    <div class="container-fluid">
        
  <div class="row no-gutter">
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image">
         <h3 class="logo"> Uber<span class="Grill">Grill</span></h3>
        <div class="text-container">
           <div class="text">BBQ Delivery service at the  touch  of a button </div>
           <button class="learnmore" >Learn More</button>
    </div></div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
              <ul class="nav nav-pills mx-auto">
                <li class="nav-item">
                  <a class="nav-link" :class="{ active: currentComponent == 'Register' }" @click="currentComponent = 'Register'">Register</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" :class="{ active: currentComponent == 'Login' }" @click="currentComponent = 'Login'">Login</a>
                </li>
              </ul>

                <component :is="currentComponent" @registered="currentComponent = 'Login'"></component>
          <li v-if="auth==''" class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Bree+Serif&display=swap');

/* .container{
    width: 40%;
    float: right;
    background-image: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url("https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    height: 95.6vh;
    background-repeat: no-repeat;
    background-size: cover;
} */.bg-image {
  background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/6026/man-vacation-people-summer.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
  background-position: center;
  height:100vh;
  width:60%;
  margin-top: 0;
  left:0 !important;
  float: left;
}
.logo{
  padding-top:13px;
  padding-left:10px;
  font-family: 'Bree Serif', serif;
  color:white;
}
span{
  color: rgba(72, 177, 12, 0.76);
   padding-top:13px;
  
}
.learnmore{
    padding-bottom: 15px;
    height:35px;
    width:150px;
    border: 5px 5px;
    margin-top:6%;
    font-weight:400;
}
.learnmore:hover{
    background-color: wheat;
    color:black;
    transition: 1s ease-in;
}
.text{
    /* margin-top:40%;
    margin-left:30%; */
    color: white;
    font-weight:600;
    font-size:45px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
.text-container{
    width:450px;
    height:300px;
    margin-top:38%;
    margin-left:18%;
    
}
.logo{
    height:130px;
    width:130px;
    top:2%;
}
.nav-item {
  cursor: pointer;
}
</style>
<script>
import Register from './Register'
import Login from './Login'

export default {
  name: 'App',
  components:{
    'Register': Register,
    'Login': Login,
  },
  data() {
    return {
      currentComponent: 'Register'
    }
  }
 
}
</script>

<style scoped>
.container{
  margin-lefT:-5%;

}
</style>