<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <h3>Enter your Delivery Address</h3><br></br>
        <button @click="address" class="btn btn-lg btn-primary btn-block" style="color:white">Book Now</button>


        <div class="form-item box-item">
          <label for="street_1">Street 1</label>
          <input class="form-control" name="street_1" placeholder="Street 1" type="text" v-model="street_1">
        </div>
        <br></br>
        <div class="form-item box-item">
          <label for="street_2">Street 2</label>
          <input class="form-control" name="email" placeholder="Street 2" type="text" v-model="street_2">
        </div>
        <br></br>
        <div class="form-item box-item">
          <label for="city">City</label>
          <input class="form-control" name="city" placeholder="Enter Your City" type="text" v-model="city">
        </div>
        <br></br>
        <div class="form-item box-item">
          <label for="state">State</label>
          <input class="form-control" name="state" placeholder="Enter Your State" type="text" v-model="state">
        </div>
        <br></br>
        <div class="form-item box-item">
          <label for="telephone">Contact Number </label>
          <input class="form-control" name="telephone" placeholder="Enter your Contact Number" type="text"
                 v-model="telephone">
        </div>
        <br></br>

      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import router from '../router'

  export default {
    data() {
      return {
        state: '',
        city: '',
        street_1: '',
        street_2: '',
        telephone: ''
      }
    },
    methods: {
      address() {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
          state: this.state,
          city: this.city,
          street_1: this.street_1,
          street_2: this.street_2,
          telephone: this.telephone
        });

        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://localhost:3000/address", requestOptions)
          .then(response => response.json())
          .then(result => {
            localStorage.setItem('address_id', result.address_id);
            console.log(result)
          })
          .catch(error => console.log('error', error));
        // axios.post('http://localhost:7000/address/address', {
        //   state: this.state,
        //   city: this.city,
        //   street_1: this.street_1,
        //   street_2: this.street_2,
        //   telephone: this.telephone
        // }).then(res => {
        //   router.push({name: 'Orders'});
        //   this.$emit('Addressed');
        // }).catch(err => {
        //   window.alert(err.response.data.err)
        // })
      }
    },
    mounted() {
      var address_app = this;
    }
  }
</script>

<style>
  label {
    color: white;
  }
</style>
