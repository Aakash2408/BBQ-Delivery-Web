
<template>
   <div class="container">
  <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="address" >
          <h3 >Enter your Delivery Address</h3><br></br>
         
        
          <div class="form-item box-item">
            <label for="street_1">Street 1</label>
            <input type="text" v-model="street_1" class="form-control" name="street_1" placeholder="Street 1">
          </div><br></br>
          <div class="form-item box-item">
            <label for="street_2">Street 2</label>
            <input type="text" v-model="street_2" class="form-control" name="email" placeholder="Street 2">
          </div><br></br>
            <div class="form-item box-item">
            <label for="city">City</label>
            <input type="text" v-model="city" class="form-control" name="city" placeholder="Enter Your City">
          </div><br></br>
           <div class="form-item box-item">
            <label for="state">State</label>
            <input type="text" v-model="state" class="form-control" name="state" placeholder="Enter Your State">
          </div><br></br>
          <div class="form-item box-item">
            <label for="tel">Contact Number </label>
            <input type="tel" v-model="telephone" class="form-control" name="tel" placeholder="Enter your Contact Number">
          </div><br></br>
          <button class="btn btn-lg btn-primary btn-block"   @click="modalAction()"type="submit" style="color:white">Book Now</button>
         
        </form>
        <!--MOdal -->


         <div  v-if="modal" class="bg-black absolute pin-t pin-l  h-screen w-full flex items center">
      <div class ="popup">
        <div class="popup-container">
        <button  @click="modalAction()"  style="position:absolute; top:5%; left:50%; transform:translateX(-50%); background-color:transparent; color:white;text-align:center;" >X</button>
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
        

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import Orders from './Orders'
import EventBus from './EventBus'
export default {
  data () {
   return {
      street_1: '',
      street_2: '',
      state: '',
      city: '',
      tel:''
    }
  },
   methods: {
    register () {
      axios.post('http://localhost:7000/address/address', {
        street_1: this.street_1,
        street_2: this.street_2,
        state: this.state,
        city: this.city,
        tel:this.tel
      }).then(res => {
        // router.push({ name: 'Login' })
        this.$emit('addressed');
      }).catch(err => {
        window.alert(err.response.data.err)
      })
    }
  }

  }

</script>

<style>
label{
color: white;
}
</style>