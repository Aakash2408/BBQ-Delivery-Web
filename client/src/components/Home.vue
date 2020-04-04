<template>

    <div class="container-fluid">
        
  <div class="row no-gutter">
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image">
         <h3 class="logo"> Uber<span class="Grill">Grill</span></h3>
        <div class="text-container">
           <div class="text">BBQ Delivery service at the  touch  of a button </div>
           <button  @click="modalAction()" class="learnmore" >Learn More</button>
           <div  v-if="modal" class="bg-black absolute pin-t pin-l  h-screen w-full flex items center">
        <div class ="popup">
           <div class="popup-container">
           <button  @click="modalAction()"  style="position:absolute; top:5%; left:50%;  background-color:transparent; color:white;text-align:center;" >X</button>
        <h1 style="text-align:center; font-size:4.5em; margin-top:10%; color:White">You Ask , We Deliver!</h1>
        <h3 style="text-align:center; color: rgba(72, 177, 12, 0.76);">Throwing the best BBQ on the block just become easier!</h3>
        <div class="main-container">
          <div class="container1">
            <img src="https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" style="border-radius:50%; height:140px; width:140px; margin-left:30%; margin-top:4%;">
            <h4 style="text-align:center; margin-top:5%; font-size:1.9em;">Convenience</h4>
            <p style=" margin-left:10%; max-width:80%; text-align:center;  margin-rights:10%; font-size:1.1em;">Get a BBQ grill and accessories delievered wherever you need at the tap of a button.Whether its a family gathering or a sporting event,we've got you covered!</p>
          </div>
          <div class="container2">
            <img src="https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  style="border-radius:50%; height:140px; width:140px; margin-left:30%; margin-top:4%;">
            <h4 style="text-align:center; margin-top:5%; font-size:1.9em;">Affordable Luxury</h4>
            <p style=" margin-left:8%; max-width:80%;  text-align:center; margin-rights:15%; font-size:1.1em;">We stock only the best quality grills on the market and offer them for hourly or daily rental at a juicy price</p>
          </div>
          <div class="container3">
            <img src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" style="border-radius:50%; height:140px; width:140px; margin-left:30%; margin-top:4%;">
            <h4 style="text-align:center; margin-top:5%; font-size:1.9em;"> Quality</h4>
            <p style=" margin-left:10%; text-align:center; max-width:80%; margin-rights:10%; font-size:1.1em;">All grills come pre-inspected with a full tank of propane.We take care of the maintenance so you can focus on the important stuff - like becoming the next grill boss</p>
          </div>
        </div>
           </div>
        <!-- <button class="bg-teal text-white font-bond px-4 py-2 rounded-full">Close</button> -->
     
     </div> 
    </div> 
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
.popup{
  position:fixed;
  height:100vh;
  top:0%;
  left:0%;
  /* transform:translate(-50%,-50%); */
  z-index:99;
  width:198.9vh;
  max-width:200vh;
  background-color:black;
}
@media only screen and (max-width: 1674px){

  h1{
    /* margin-left:5% !important; */
   text-align: center !important;
    font-size:60px !important;
    margin-right:15% !important;
  }
  h3{
    text-align:center !important;
    font-size:30px !important;
    margin-right:15% !important;
  }
  .popup{
    position:fixed;
    height:100vh;
   width:230vh;
    background-color:black;
    z-index:99;
    top:0%;
  left:0%;
  }
 
} 
@media only screen and (max-width: 880px){
  .main-container{
    display: flex;
    flex-direction: column;
  }
  .container1{
  
  height:40vh;
  border-radius:10px;

  width:35vh;
  background: white;
  margin-left:-4%;
  } 
  .container2{
  
  height:40vh;
  border-radius:10px;

  width:35vh;
  background: white;
  
  margin-top:5%;
  } 
  .popup{
    height:100%;
    background-color: black ;
    position: absolute;
  }
  
  
}
@media only screen and (max-width: 1184px){
 
  img{
    height:70px !important;
    width:70px !important;
    margin-left:40% !important; 
  }
   h1{
   
    text-align:center !important;
    font-size:60px !important;
    margin-right:25% !important;
     margin-top:5% !important;
  }
  h3{
    text-align:center !important;
    font-size:30px !important;
    margin-right:29% !important;
  }
  p{
    font-size:24px;
  }
   .main-container{
    display: flex;
    margin-right:70% !important;
  }
  .container1{
  
  height:40vh;
  border-radius:10px;

  width:35vh;
  background: white;
  
  } 
  .container2{
  
  height:40vh;
  border-radius:10px;

  width:35vh;
  background: white;

 
  } 

}
@media only screen and (min-width: 1917px){
.popup{
 
   width:220vh;
    max-width:220vh;
}
.main-container{
  margin-left:16% !important;
}

}


.main-container{
  display: flex;
  margin-left:23%;
  margin-top:5%;
}
.container1{
  height:40vh;
  border-radius:10px;

  width:35vh;
  background: white;
}
.container2{
  height:40vh;
  border-radius:10px;

  width:35vh;
  background: white;
  margin-left:3%;
  }
  
.container3{
   height:40vh;
  border-radius:10px;

  width:35vh;
  background: white;
  margin-left:3%;
  }

.bg-image {
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
      currentComponent: 'Register',
      modal:false
    }
    
  },
  methods:{
    modalAction(){
       if (this.modal == false){
         this.modal =true
       }else{
         this.modal=false
       }
    }
  }
 
}
</script>

<style scoped>
.container{
  margin-lefT:-5%;

}
</style>