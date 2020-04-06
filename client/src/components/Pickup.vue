<template>

    <div id="app">
        <form v-on:submit.prevent="pickup">
    <h3>Enter Timings</h3>
      <div class="box1">
  <div class='col-md-6'>
               <div class="form-group">
                  <label class="control-label">Pickup Time</label>
                  <div class='input-group date' id='datetimepicker1'>
                     <input type='text' class="form-control" />
                     <span class="input-group-addon">
                     <span class="glyphicon glyphicon-calendar"></span>
                     </span>
                  </div>
               </div>
            </div>
      </div>


      
      <div class="box2">
   <div class='col-md-6'>
               <div class="form-group">
                  <label class="control-label">Dropoff Time</label>
                  <div class='input-group date' id='datetimepicker1'>
                     <input type='text' class="form-control" />
                     <span class="input-group-addon">
                     <span class="glyphicon glyphicon-calendar"></span>
                     </span>
                  </div>
               </div>
            </div>
      </div>
      </form>
</div>
</template>
<style scoped>
.container {
  margin-top: 40px;
}

.btn-primary {
  width: 100%;
}
.control-label{
  color:white;
}
.box1{
  margin-top:10%;
  margin-left:30%;
    width:100%;
}
.box2{
 
  margin-left:30%;
  width:100%;
}
.next{
  padding:5px 15px 5px 15px;
  margin-left:2%;
}
h3{
  text-align:center;
  color:white;
  margin-top:15%;
  margin-left:5%;
}

.bootstrap-datetimepicker-widget table th.disabled,
.bootstrap-datetimepicker-widget table th.disabled:hover {
  background: none;
  color: red;
  cursor: not-allowed;
}
.bootstrap-datetimepicker-widget table td span.disabled,
.bootstrap-datetimepicker-widget table td i.disabled,
.bootstrap-datetimepicker-widget table td span.disabled:hover,
.bootstrap-datetimepicker-widget table td i.disabled:hover {
  background: none;
  color: green;
  cursor: not-allowed;
}
.bootstrap-datetimepicker-widget table th.prev::after {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
  content: "Previous Month";
  color:green;
}
.bootstrap-datetimepicker-widget table td span,
.bootstrap-datetimepicker-widget table td i {
  display: inline-block;
  width: 54px;
  height: 54px;
  line-height: 54px;
  margin: 2px 1.5px;
  cursor: pointer;
  background-color:red ;
  border-radius: 0.25rem;
}
.glyphicon {
    position: relative;
    top: 2px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    height:50px;
    line-height: 2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: aliceblue;
}
.glyphicon-calendar:before {
    content: "\e109";
}
.input-group.date .input-group-addon {
    cursor: pointer;
}



</style>
<script>
//  import $ from 'jquery'
//  import bootstrap from 'bootstrap';
//   import datePicker from 'vue-bootstrap-datetimepicker';
//   import 'bootstrap/dist/css/bootstrap.css';
//   import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
//   import moment from 'moment'
 
export default {
name:"Pickup",
mounted(){
  $(function () {
    $('#datetimepicker1').datetimepicker();
 });
}
  
};
</script>