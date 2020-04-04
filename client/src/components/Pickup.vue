<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
         <ejs-datetimepicker id="datetimepicker" :placeholder="waterMarkText" :min="minDate" :max="maxDate" :value="date"></ejs-datetimepicker>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import { DateTimePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DateTimePickerPlugin);
export default Vue.extend({
  data: function() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    return {
      waterMarkText: "Select a date and time",
      date: new Date(year, month, 14, 10, 30),
      minDate: new Date(year, month, 7, 10),
      maxDate: new Date(year, month, 27, 22, 30)
    };
  }
});
</script>



<style scoped>
#wrapper {
  max-width: 246px;
  margin: 30px auto;
  padding-top: 15px;
}
</style>