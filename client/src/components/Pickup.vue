<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">

        <div class="form-item box-item">
          <label for="pickUp_time">Pickup Date</label>
          <input class="form-control" id="picker1" name="pickUp_time" placeholder="choose Pickup Date" type="text">
          <!--            <h5 style="color:white">format:YYYY:MM:DDThh:mm</h5>-->

        </div>
        <br>
        <div class="form-item box-item">
          <label for="dropOff_time">DropOff Date</label>
          <input class="form-control" id="picker2" name="dropOff_time" placeholder="choose Dropoff date" type="text">
          <!--            <h5 style="color:white">format:YYYY:MM:DDThh:mm</h5>-->
        </div>
        <br></br>

        <button @click="pickup" class="btn btn-lg btn-primary btn-block">Next</button>

      </div>
    </div>
  </div>

</template>
<style scoped>
  .row {
    margin-top: 25%;
  }

  label {
    color: white;
  }

  .xdsoft_datetimepicker {
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.506);
    background: #fff;
    border-bottom: 1px solid #bbb;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-top: 1px solid #ccc;
    color: #333;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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

  .xdsoft_datetimepicker .xdsoft_calendar td > div {
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
  import router from '../router'
  import Product from './Product'

  export default {
    data() {
      return {
        pickUp_time: '',
        dropOff_time: ''
      }
    },
    methods: {
      pickup() {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
          pickUp_time: this.pickUp_time,
          dropOff_time: this.dropOff_time
        });
        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://localhost:3000/pickup", requestOptions)
          .then(response => response.json())
          .then(result => {
            localStorage.setItem('pickup_id', result.pickup_id);
            router.push({name: 'Product'});
            this.$emit('Pickuped');
            // console.log(result)
          })
          .catch(error => console.log('error', error));
      }
    },
    mounted() {
      var pickup = this;
      $('#picker1').datetimepicker({
        timepicker: true,
        datepicker: true,
        format: 'Y-m-d H:i',
        onShow: function (ct) {
          this.setOptions({
            maxDate: $('#picker2').val() ? $('#picker2').val() : false
          })
        },
        onChangeDateTime: function (ct) {
          // console.log($("#picker1").val());
          pickup.pickUp_time = $("#picker1").val().toString();
        }
      });

      $('#picker2').datetimepicker({
        timepicker: true,
        datepicker: true,
        format: 'Y-m-d H:i',
        onShow: function (ct) {
          this.setOptions({
            minDate: $('#picker1').val() ? $('#picker1').val() : false
          })
        },
        onChangeDateTime: function (ct) {
          // console.log($("#picker2").val());
          pickup.dropOff_time = $("#picker2").val().toString();
        }
      });
    }

  };
</script>
