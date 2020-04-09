<template>
  <div>
    <Mininav/>
    <Option/>
  </div>


  <!-- <table class="table col-md-6 mx-auto">
      <tbody>
          <tr>
              <td>First Name  </td>
              <td>{{first_name}}</td>
          </tr>
          <tr>
              <td>Last Name</td>
              <td>{{last_name}}</td>
          </tr>
          <tr>
              <td>Email</td>
              <td>{{email}}</td>
          </tr>
      </tbody>
  </table> -->


</template>

<script>
  import jwtDecode from 'jwt-decode'
  import Option from './Option'
  import Mininav from './Mininav'

  export default {
    name: 'App',
    components: {

      'Option': Option,
      'Mininav': Mininav
    }

  }
</script>
<style scoped>
</style>
