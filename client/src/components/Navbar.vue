<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
    <button aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbar1"
            data-toggle="collapse" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-md-center" id="navbar1">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item" v-if="auth===''">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item" v-if="auth===''">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li class="nav-item" v-if="auth==='loggedin'">
          <router-link class="nav-link" to="/profile">Profile</router-link>
        </li>
        <li class="nav-item" v-if="auth==='loggedin'">
          <a class="nav-link" href="" v-on:click="logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import EventBus from './EventBus'

  EventBus.$on('logged-in', test => {
    console.log(test)
  });
  export default {
    data() {
      return {
        auth: '',
        user: ''
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('usertoken')
      }
    },
    mounted() {
      EventBus.$on('logged-in', status => {
        this.auth = status
      })
    }
  }
</script>
