<template>

<div>
  
  <form v-on:submit.prevent="pickup">
    <h1>Enter Timings</h1>
<div class="main">
<div class="container mt-5 mb-5" style="width:400px">
  <h3>Pickup Date</h3>
  <input type="text" id="picker1" v-model="pickup_date" class="form-control" placeholder="Choose Pickup Date">
  <h3>Dropoff Date </h3>
  <input type="text" id="picker2" v-model="dropoff_date" class="form-control"  placeholder="Enter First Name">
 </div>
</div>
<router-link to="/product"><button class="next" type="submit">Next</button></router-link>
  </form>
</div>

</template>
<style scoped>
.form{
  color:white;
}
h1{
  color: white;
  text-align:center;
}
h3{
  color: white;
}
.box1{
  margin-top:10%;
  margin-left:30%;
    width:100%;
}
.main{
  margin-top:25%;
}
.box2{
 
  margin-left:30%;
  width:100%;
}
.container {
  margin-top: 40px;
}
.control-label{
  color:white;
}
.next{
  padding:5px 15px 5px 15px;
  margin-left:47%;
  text-align: center;
}
.xdsoft_datetimepicker {
    box-shadow: 0 5px 15px -5px rgba(0,0,0,0.506);
    background: #fff;
    border-bottom: 1px solid #bbb;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-top: 1px solid #ccc;
    color: #333;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 8px;
    padding-left: 0;
    padding-top: 2px;
    position: absolute;
    z-index: 9999;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: none;
}
.xdsoft_datetimepicker .xdsoft_month {
    width: 100px;
    text-align: right;
}
.xdsoft_datetimepicker .xdsoft_label {
    display: inline;
    position: relative;
    z-index: 9999;
    margin: 0;
    padding: 5px 3px;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    background-color: #fff;
    float: left;
    width: 182px;
    text-align: center;
    cursor: pointer;
}
.xdsoft_datetimepicker .xdsoft_prev, .xdsoft_datetimepicker .xdsoft_today_button {
    background-color: transparent;
    background-repeat: no-repeat;
    border: 0 none;
    cursor: pointer;
    display: block;
    height: 30px;
    opacity: .5;
    -ms-filter: "alpha(opacity=50)";
    outline: medium none;
    overflow: hidden;
    padding: 0;
    position: relative;
    text-indent: 100%;
    white-space: nowrap;
    width: 20px;
    min-width: 0;
}
.xdsoft_datetimepicker .xdsoft_next {
    float: right;
    background-position: 0 0;
}
.xdsoft_datetimepicker .xdsoft_prev {
    float: left;
    background-position: -20px 0;
}
button:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {
    cursor: pointer;
}
.xdsoft_datetimepicker .xdsoft_calendar td>div {
    padding-right: 5px;
}


</style>
<script>
//  import $ from 'jquery'
//  import bootstrap from 'bootstrap';
//   import datePicker from 'vue-bootstrap-datetimepicker';
//   import 'bootstrap/dist/css/bootstrap.css';
//   import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
//   import moment from 'moment'
 import axios from 'axios'
import router from '../router'
export default {
 data () {
    return {
      pickup_date:'',
      dropoff_date: ''
    }
  },
 methods: {
    pickup () {
      axios.post('http://localhost:7000/pickup/pickup', {
        pickup_date:this.pickup_date,
        dropoff_date: this.dropoff_date
      }).then(res => {
        // router.push({ name: 'orders' })
        this.$emit('Pickuped');
      }).catch(err => {
        window.alert(err.response.data.err)
      })
    }
  },
mounted(){
 $('#picker1').datetimepicker({
   timepicker:true,
   datepicker:true,
   format:'Y-m-d H:i',
   onShow:function(ct){
     this.setOptions({
       maxDate:$('#picker2').val() ? $('#picker2').val():false
     })
   }
 })

 $('#picker2').datetimepicker({
   timepicker:true,
   datepicker:true,
   format:'Y-m-d H:i',
   onShow:function(ct){
     this.setOptions({
       minDate:$('#picker1').val() ? $('#picker1').val():false
     })
   }
 })
}
  
};
</script>