<template>
    <div id="app">
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
</style>
<script>
 import $ from 'jquery'
 import bootstrap from 'bootstrap';
  import datePicker from 'vue-bootstrap-datetimepicker';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
  import moment from 'moment'
 
export default {
name:"Pickup",

mounted(){
  $(function () {
    $('#datetimepicker1').datetimepicker();
 });

}
  
};
</script>