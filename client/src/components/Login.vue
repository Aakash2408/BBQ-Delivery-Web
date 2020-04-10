<template>
  <div class="container">
    <div class="row">
      <h1 class="login-h1">Welcome Back!</h1><br></br>
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="login">
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
          <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
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
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
          email: this.email,
          password: this.password
        });

        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://localhost:3000/users/login", requestOptions)
          .then(response => response.json())
          .then(result => {
            localStorage.setItem('usertoken', result.token);
            localStorage.setItem('userid', result._id);
            router.push({name: 'Profile'})
          })
          .catch(error => {
            console.log('error', error);
            window.alert(error)
          });
        this.emitMethod()
      },
      emitMethod() {
        EventBus.$emit('logged-in', 'loggedin')
      }
    }
  }
</script>
<style scoped>
  .form-item input[type="text"],
  .form-item input[type="number"],
  .form-item input[type="email"], .form-item input[type="password"] {
    display: block;
    color: black;
    font-size: 24px;
    font-weight: 300;
    width: 140%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #54b7e663;
    padding: 8px 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }

  .login-h1 {
    text-align: center;
    margin-left: 45%;
    margin-top: 5%;
    font-size: 34px;
  }

  .login-h3 {
    text-align: center;

    font-size: 24px;

  }
</style>
