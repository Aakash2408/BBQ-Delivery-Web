<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <h3 >Experience the convenience of grilling anywhere</h3><br></br>
          <div class="form-item box-item">
            <label for="first_name">First Name</label>
            <input type="text" v-model="first_name" class="form-control" name="first_name" placeholder="Enter First Name">
          </div><br></br>
          <div class="form-item box-item">
            <label for="last_name">Last Name</label>
            <input type="text" v-model="last_name" class="form-control" name="last_name" placeholder="Enter Last Name">
          </div><br></br>
          <div class="form-item box-item">
            <label for="email">Email Address</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Enter Email">
          </div><br></br>
          <div class="form-item box-item">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" name="password" placeholder="Enter Password">
          </div><br></br>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
          <div class="olduser"><router-link  to="/login">I have an account</router-link></div>
                
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  },
   methods: {
    register () {
      axios.post('users/register', {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password
      }).then(res => {
        router.push({ name: 'Login' })
      }).catch(err => {
        window.alert(err.response.data.err)
      })
    }
  }
}
</script>
<style scoped>
h3{
  font-size:20px;
  text-align: left;
}
.form-item input[type="text"],
.form-item input[type="number"],
.form-item input[type="email"],.form-item input[type="password"] {
  display: block;
  color:black;
  font-size: 24px;
  font-weight:300;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #75759e;
  padding: 8px 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: none;
  width:140%;
}
.btn-block{
margin-left:20%;}
.olduser{
  text-align: center;
  margin-left:40%;
}
</style>