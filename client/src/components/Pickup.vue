<template>
 <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="pickup">
        
          <div class="form-item box-item">
            <label for="pickUp_time">Pickup Date</label>
            <input type="text" id="picker1"  v-model="pickUp_time" class="form-control" name="pickUp_time" placeholder="choose Pickup Date">
            <h5 style="color:white">format:YYYY:MM:DDTHH:SS</h5>
            
          </div><br>
          <div class="form-item box-item">
            <label for="dropOff_time">DropOff Date</label>
            <input type="text" id="picker2" v-model="dropOff_time" class="form-control" name="dropOff_time" placeholder="choose Dropoff date">
             <h5 style="color:white">format:YYYY:MM:DDTHH:SS</h5>
          </div><br></br>
         
         <button class="btn btn-lg btn-primary btn-block" type="submit">Next</button>
         
        </form>
      </div>
    </div>
  </div>

</template>
<style scoped>
.row{
  margin-top:25%;
}
label{
  color:white;
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
import Product from './Product'
export default {
 data () {
    return {
      pickUp_time:'',
      dropOff_time: ''
    }
  },
 methods: {
    pickup () {
      axios.post('http://localhost:7000/pickup/pickup', {
        pickUp_time:this.pickUp_time,
        dropOff_time: this.dropOff_time
       
      }).then(res => {
        router.push({ name: 'Product' })
        this.$emit('Pickuped');
      }).catch(err => {
        window.alert(err.response.data.err)
      })
    }
  }
,
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