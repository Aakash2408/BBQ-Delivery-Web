<template>
<div id="app">
  <quantity></quantity>
  <div class="allin">
  <div class="container">
    <div class="tab-container">
      <h3 class="text-center" style="color:white;  margin-top:-180px;">Choose Your Addons</h3>
  <div class="row">
      <div class="col-md-12 internalPadding">
        <div class="blueBar" @click="isShow['Grill 1'] = !isShow['Grill 1']" :class="{'red': isShow['Grill 1']}">
          <div class="d-flex">
            <h2><i class="fab fa-jedi-order"></i>&nbsp; &nbsp; Portable Chairs </h2>
            <div class="ml-auto">
              <i class="fas fa-plus ml-auto"></i>
            </div>
          </div>
        </div><!-- End BlueBar -->
      </div><!-- End col -->
    </div><!-- End Row -->
    <transition name="slide">
      <div class="row content internalPadding" v-if="isShow['Grill 1']">
        <div class="col-12">
       <div class="item-container">
              <div><p>Hourely Rate: 2$</p>
              <p>Daily rate:20$</p></div>

               <div class="quantity-toggle" style="display:inline-block;">
      <button @click="decrement()">&mdash;</button>
      <input type="text" :value="quantity" readonly>
      <button @click="increment()">&#xff0b;</button>
    </div>
              
              <img src="https://images-na.ssl-images-amazon.com/images/I/61VFxtELL7L._AC_SX522_.jpg" height="250px;">
         </div>
        </div><!-- End Col -->
        <div class="col-md-12 internalPadding" style="margin-top: 15px;">
          <div @click="isShow['Grill 1'] = !isShow['Grill 1']">
            <div class="d-flex">
             
            <button class="ml-auto">
              <slot>Hide</slot>
            </button>
          </div>
        </div>
        </div><!-- End Col -->
      </div><!-- End Row -->
    </transition>
     <div class="row">
      <div class="col-md-12 internalPadding">
        <div class="blueBar" @click="isShow['Grill 2'] = !isShow['Grill 2']" :class="{'red': isShow['Grill 2']}">
          <div class="d-flex">
            <h2><i class="fab fa-jedi-order"></i>&nbsp; &nbsp; BBQ Dragon </h2>
            <div class="ml-auto">
              <i class="fas fa-plus ml-auto"></i>
            </div>
          </div>
        </div><!-- End BlueBar -->
      </div><!-- End col -->
    </div><!-- End Row -->
    <transition name="slide">
      <div class="row content internalPadding" v-if="isShow['Grill 2']">
        <div class="col-12">
                          <p style="margin-top:-20px;">The BBQ Dragon is a high-powered cooling fan that's attached to a clamp by a gooseneck. Its creators claim it will help you with the time-consuming task of lighting a charcoal fire. The Dragon recharges via USB port, meaning you can use the household chargers you probably already own. The fan has a multi-level speed control, so you could use it to light other fires in your life, like your fireplace. But the big sell is that it supposedly can light a charcoal barbecue in under 10 minutes.</p>
        
          <div class="item-container">
              
            <div>
                <p>Hourely Rate: 3$</p>
                <p>Daily rate:40$</p></div>
               <div class="quantity-toggle" style="display:inline-block;">
      <button @click="decrement()">&mdash;</button>
      <input type="text" :value="quantity" readonly>
      <button @click="increment()">&#xff0b;</button>
    </div>
              <img src="https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/54cb1158ab4e9_-_bbq-gadgets-02-0513-lgn.jpg?crop=1xw:1.0xh;center,top&resize=980:*" height="250px;">
         </div>
         
        </div><!-- End Col -->
        <div class="col-md-12 internalPadding" style="margin-top: 15px;">
          <div @click="isShow['Grill 2'] = !isShow['Grill 2']">
            <div class="d-flex">
               
            <button class="ml-auto">
              <slot>Hide</slot>
            </button>
          </div>
        </div>
        </div><!-- End Col -->
      </div><!-- End Row -->
    </transition>
    
     <div class="row">
      <div class="col-md-12 internalPadding">
        <div class="blueBar" @click="isShow['Grill 3'] = !isShow['Grill 3']" :class="{'red': isShow['Grill 3']}">
          <div class="d-flex">
            <h2><i class="fas fa-sleigh"></i>&nbsp; &nbsp;Artificial Turf </h2>
            <div class="ml-auto">
              <i class="fas fa-plus ml-auto"></i>
            </div>
          </div>
        </div><!-- End BlueBar -->
      </div><!-- End col -->
    </div><!-- End Row -->
    <transition name="slide">
      <div class="row content internalPadding" v-if="isShow['Grill 3']">
        <div class="col-12">
            <p style="margin-top:-20px;">While artificial grass may not burn, it does melt when exposed to high temperatures, fire or hot objects. ... Homeowners should always avoid placing hot or flaming objects on their artificial lawn, including BBQs, grills, patio heaters and firepits, to prevent melting the grass material</p>
         <div class="item-container">
              <div><p>Hourely Rate: 5$</p>
              <p>Daily rate:70$</p></div>
               <div class="quantity-toggle" style="display:inline-block;">
      <button @click="decrement()">&mdash;</button>
      <input type="text" :value="quantity" readonly>
      <button @click="increment()">&#xff0b;</button>
    </div>
              <img src="https://images-na.ssl-images-amazon.com/images/I/81doS8J8%2BSL._AC_SY450_.jpg" height="250px;">
         </div>
       </div><!-- End Col -->
        <div class="col-md-12 internalPadding" style="margin-top: 15px;">
          <div @click="isShow['Grill 3'] = !isShow['Grill 3']">
            <div class="d-flex">
              
            <button class="ml-auto">
              <slot>Hide</slot>
            </button>
          </div>
        </div>
        </div><!-- End Col -->
      </div><!-- End Row -->
    </transition>
    
             <div class="row">
      <div class="col-md-12 internalPadding">
        <div class="blueBar" @click="isShow['Grill 5'] = !isShow['Grill 5']" :class="{'red': isShow['Grill 5']}">
          <div class="d-flex">
            <h2><i class="fab fa-jedi-order"></i>&nbsp; &nbsp; Portable Wood Pellet Pizza Oven </h2>
            <div class="ml-auto">
              <i class="fas fa-plus ml-auto"></i>
            </div>
          </div>
        </div><!-- End BlueBar -->
      </div><!-- End col -->
    </div><!-- End Row -->
    <transition name="slide">
      <div class="row content internalPadding" v-if="isShow['Grill 5']">
        <div class="col-12">
       <p style="margin-top:-20px;">You can always cook a pizza by throwing one right on the grill, but if you really want to step things up you'll need a separate pizza oven to complement your BBQ. That can quickly turn into an expensive proposition, but this fairly affordable one from Uuni gets high marks from Serious Eats, which found it to be compact and portable but still able to deliver the high temperatures needed for great wood-fired pizzas. That's done with wood pellets, which require a bit more practice </p>
        <div class="item-container" >
              <div><p>Hourely Rate: 5$</p>
              <p>Daily rate:70$</p></div>
               <div class="quantity-toggle" style="display:inline-block;">
      <button @click="decrement()">&mdash;</button>
      <input type="text" :value="quantity" readonly>
      <button @click="increment()">&#xff0b;</button>
    </div>
              <img src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/21/1280x781/screen-shot-2017-05-25-at-44013-pm.png?resize=980:*" height="250px;" width="270px;">
         </div>
        </div><!-- End Col -->
        <div class="col-md-12 internalPadding" style="margin-top: 15px;">
          <div @click="isShow['Grill 5'] = !isShow['Grill 5']">
            <div class="d-flex">
                
            <button class="ml-auto">
              <slot>Hide</slot>
            </button>
          </div>
        </div>
        </div><!-- End Col -->
      </div><!-- End Row -->
    </transition>
     


    </div><!-- End tab container -->
  </div><!-- End Container -->
</div><!-- End App -->
</div>
</template>

<script>
export default {
  
 name:"app",
     
    props:{
        msg:"string"
    },
    data(){return {
    quantity:1,
    title: "Hello",
      isShow: {
        'Grill 1': false,
        'Grill 2':false,
        'Grill 3': false,
        'Grill 4': false,
        'Grill 5': false,
        'Grill 6': false,
      },
       methods: {
    increment () {
      this.quantity++
    },
    decrement () {
      if(this.quantity === 1) {
        alert('Negative quantity not allowed')
      } else {
        this.quantity--
      }
    }
    }
    }
    }
    
};
</script>

<style>
.quantity-toggle{
  display: flex;
  margin-top:45%;
  width:90%;
  margin-left:-30%;
}
.select{
  padding-top:2px;

}
.item-container
{
  margin-left:10%;
  display: flex;
  flex-direction: row;
}
img{
  margin-left:5%;
}
p{
  display:flex;
  margin-top:34%;
  
}
.seperator {

  border-top: 1px solid #F5F7FA;
  padding-top: 25px;
}
.blueBar {
  background: #F5F7FA;
  color: #707070;
  padding: 15px 20px;
  margin-top: 15px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 50px;
}
.blueBar:hover {
  opacity: 0.8;
  cursor: pointer;
  transition: all 1s;
}
.blueBar:hover h5 {
  color: #ffffff;
}
.blueBar h2 {
  text-transform: uppercase;
  margin: 0;
  color: #707070;
  font-size: 16px;
}
.blueBar .fa-bars {
  transform: rotate(90deg);
}
.red .fa-chevron-down,
.red .fa-plus {
  animation: rotate-in 0.5s forwards;
}
@keyframes rotate-in {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(45deg);
  }
}
.slide-enter-active {
  -moz-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
.slide-leave-active {
  -moz-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}
.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
.content {
  margin-top: 20px;
  background: none;
  color: #ffffff;
}
.internalPadding {
  padding: 0 25px;
}
button {
  
  color: #707070;
  border: none;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 5px 15px;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  transition: all 1s;
}
button:hover {
  background: #FFB715;
  box-shadow: none;
  cursor: pointer;
}
button:focus {
  outline: none;
}
.tab-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}
h1 {
  text-transform: uppercase;
  margin: 0;
  color: #F5F7FA;
  font-size: 48px;
  letter-spacing: 25px;
  margin-bottom: 1rem;
  font-weight: light;
}
</style>