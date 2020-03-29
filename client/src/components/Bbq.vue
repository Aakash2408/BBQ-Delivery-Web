<template>
<div class="app">
  <div class="container">
    <div class="tab-container">
      <h1 class="text-center">Choose Your BBQ</h1>
      <div class="row">
        <div class="col-md-12 internalpadding">
          <div class="blueBar" @click="isShow['Star'] = !isShow['Star']" :class="{'red': isShow['Star']}" >
            <div class="d-flex">
    <h2><i class="fab fa-jedi-order"></i>&nbsp; &nbsp;Gas Grills </h2>

    <div class="ml-auto">
                    <i class="fas fa-plus ml-auto"></i>
    </div>
            </div>
          </div><!--End BlueBar-->
        </div><!--End col-->
      </div><!--end-row-->
      <transition name="slide">
         <div class="row content internalPadding"  v-if="isShow['Star']" >
           <div class="col-12">
             <h2><i class="fab fa-jedi-order"></i>&nbsp; &nbsp;Gas Grills</h2>
             <p>This is the most popular type of backyard grill. They can run either on bottled propane or natural gas from your utility provider. Most gas grills are designed for propane, but can be converted to natural gas fairly easily. Some people argue the merits of propane or methane, but there is very little difference between the two.  If you have access to a natural gas line, utilizing it is certainly more convenient and less expensive than refilling propane tanks.
            </p>
            <p>Best for: The impatient chef who wants to quickly fire up the grill and cook a meal without having to worry about the preparation and cleanup of charcoal.</p>
           </div>
           <div class="col-md-12 internalPadding" style="margin-top:15px;">
           <div @click="isShow['Star'] = !isShow['Star']">
            <div class="d-flex">
            <button class="ml-auto">
              <slot>Hide</slot>
            </button>
            </div>
          </div>
           </div>
         </div>
      </transition>
         
         <div class="row">
           <div class="col-md-12 internalpadding">
             <div class="blueBar"  @click="isShow['Diehard'] = !isShow['Diehard']" :class="{'red': isShow['Diehard']}">
               <div class="d-flex">
                 <h2><i class="fas fa-sleigh"></i>&nbsp; &nbsp; Charcoal Grills</h2>
                 <div class="ml-auto">
                   <i class="fas fa-plus ml-auto"></i>
                 </div>
               </div>
             </div><!--BlueBar End-->
           </div><!--End col-->
         </div><!--End Row-->

         <transition name="slide">
            <div class="row content internalPadding" if="isShow['Diehard']">
              <div class="col-12">
                <h2><i class="fas fa-sleigh"></i>&nbsp; &nbsp; Charcoal Grills</h2>
                <p>
These grills use charcoal briquettes as the fuel and fire power for cooking. Cooking with charcoal is more time-consuming and expensive than a gas grill, but some people will always prefer the taste of cooking with charcoal, especially when it is made of natural wood.</p>
<p>
Best for: The purist. If you long for that smoky, grilled flavor or you enjoy smoking meats, the only way to achieve both is with a charcoal grill. Charcoal burns at a higher temperature than gas, allowing a skilled grillmaster to easily sear meat. Finally, cooking with charcoal has a distinct romance that is clearly lacking with a modern gas grill.</p>
              </div><!--End col-->

            <div class="col-md-12 internalPadding" style="margin-top: 15px;">
              <div @click="isShow['Diehard'] = !isShow['Diehard']">
              <div class="d-flex">
                <button class="ml-auto">
                  <slot>hide</slot>
                </button>
              </div>
              </div>
            </div><!--End Col-->
          </div><!--Row close-->
         </transition>



         <div class="row">
           <div class="col-md-12 internalPadding">
             <div class="blueBar" @click="isShow['Predator'] = !isShow['Predator']" :class="{'red': isShow['Diehard']}">
               <div class="d-flex">
                  <h2><i class="fab fa-reddit-alien"></i>&nbsp; &nbsp;Electric Grills </h2>
                  <div class="ml-auto">
                    <i class="fas fa-plus ml-auto"></i>
                  </div>
               </div>
             </div><!--End BlueBar-->
           </div><!--End Col-->
         </div><!--End Row-->
          
          <transition name="slide">
            <div class="row content internalPadding" if="isShow['Predator']">
              <div class="col-12">
                <h2><i class="fab fa-reddit-alien"></i>&nbsp; &nbsp;Electric Grills</h2>
                <p>
                  These grills can run on propane or charcoal, but have one thing in common – they are easily transported from one location to another.

Best for: The tailgater. If you love a good outdoor picnic or a perfectly cooked brat in the parking lot before the big game, this is the grill for you. You can buy portable grills of all different styles for picnics or for tailgating. Weber and others make miniature charcoal kettle grills, and there are some smaller propane grills on the market as well (e.g. Weber 1520 Propane Gas Go-Anywhere Grill pictured above).
                </p>
              </div><!--End col-->
              <div class="col-md-12 internalPadding" style="mrgin-top:15px">
                <div @click="isShow['Predator'] = !isShow['Predator']">
                <div class="d-flex">
                <button class="ml-auto">
                  <slot>Hide</slot>
                </button>
               </div>
                </div>
              </div><!--End col -->
            </div><!--End Row -->
          </transition> 

         
    </div><!--End Tab-container-->
  </div><!--End Container-->
</div><!--End App -->
</template>

<script>

export default {
  el: "#app",
 name:"app",
     
    props:{
        msg:"string"
    },
    data: {
    title: "Hello",
      isShow: {
        'Star': false,
        'Diehard': false,
        'Predator': false,
      }
    }
    
    
};
</script>

<style>


.seperator {
  margin-top: 25px;
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
  background: #nag-bg;
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