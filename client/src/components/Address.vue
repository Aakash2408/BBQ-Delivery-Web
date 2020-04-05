<template>
   <div class="container">
  <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="address" >
          <h3 >Enter your Delivery Address</h3><br></br>
          <div class="form-item box-item">
            <label for="state">State</label>
            <input type="text" v-model="state" class="form-control" name="state" placeholder="Enter Your State">
          </div><br></br>
          <div class="form-item box-item">
            <label for="city">City</label>
            <input type="text" v-model="city" class="form-control" name="city" placeholder="Enter Your City">
          </div><br></br>
          <div class="form-item box-item">
            <label for="street_1">Street 1</label>
            <input type="text" v-model="street_1" class="form-control" name="street_1" placeholder="Street 1">
          </div><br></br>
          <div class="form-item box-item">
            <label for="street_2">Street 2</label>
            <input type="text" v-model="street_2" class="form-control" name="email" placeholder="Street 2">
          </div><br></br>
          <div class="form-item box-item">
            <label for="tel">Contact Number </label>
            <input type="tel" v-model="telephone" class="form-control" name="tel" placeholder="Enter your Contact Number">
          </div><br></br>
          <button class="btn btn-lg btn-primary btn-block" type="submit" style="color:white"><router-link to="/orders">Book Now</router-link></button>
         
        </form>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      state:'',
      city: '',
      street_1: '',
      street_2: '',
      tel: ''
    }
  },
   methods: {
    address () {
      axios.post('address/Address', {
        state:this.state,
        city: this.city,
        street_1: this.street_1,
        street_2: this.street_2,
        tel: this.tel
      }).then(res => {
        // router.push({ name: 'orders' })
        this.$emit('Addressed');
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