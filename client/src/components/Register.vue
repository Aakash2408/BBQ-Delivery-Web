<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <h3>Experience the convenience of grilling anywhere</h3><br></br>
          <div class="form-item box-item">
            <label for="first_name">First Name</label>
            <input class="form-control" name="first_name" placeholder="Enter First Name" type="text"
                   v-model="first_name">
          </div>
          <br></br>
          <div class="form-item box-item">
            <label for="last_name">Last Name</label>
            <input class="form-control" name="last_name" placeholder="Enter Last Name" type="text" v-model="last_name">
          </div>
          <br></br>
          <div class="form-item box-item">
            <label for="email">Email Address</label>
            <input class="form-control" name="email" placeholder="Enter Email" type="email" v-model="email">
          </div>
          <br></br>
          <div class="form-item box-item">
            <label for="password">Password</label>
            <input class="form-control" name="password" placeholder="Enter Password" type="password" v-model="password">
          </div>
          <br></br>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>

        </form>
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
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      register() {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
          "first_name": this.first_name,
          "last_name": this.last_name,
          "email": this.email,
          "password": this.password
        });

        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://localhost:3000/users/register", requestOptions)
          .then(response => response.text())
          .then(result => {
            console.log(result);
            this.$emit('registered');
          })
          .catch(error => console.log('error', error));
      }
    }
  }
</script>
<style scoped>
  h3 {
    font-size: 20px;
    text-align: left;
  }

  .form-item input[type="text"],
  .form-item input[type="number"],
  .form-item input[type="email"], .form-item input[type="password"] {
    display: block;
    color: black;
    font-size: 24px;
    font-weight: 300;
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #54b7e663;
    padding: 8px 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    width: 120%;
  }

  .btn-block {
    margin-left: 20%;
  }

  .olduser {
    text-align: center;
    margin-left: 40%;
  }
</style>
