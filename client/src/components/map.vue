<template>
   <div class="container">
  <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="address" >
          <h3 >Enter your Delivery Address</h3><br></br>
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
            <input type="tel" v-model="telephone" class="form-control" name="telephone" placeholder="Enter your Contact Number">
          </div><br></br>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Book Now</button>
         
        </form>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      city: '',
      street_1: '',
      street_2: '',
      tel: ''
    }
  },
   methods: {
    register () {
      axios.post('users/address', {
        city: this.city,
        street_1: this.street_1,
        street_2: this.street_2,
        tel: this.tel
      }).then(res => {
        // router.push({ name: 'Login' })
        this.$emit('Address');
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