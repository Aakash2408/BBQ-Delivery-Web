<template>
<div id="app">
  <div class="container">
    <div class="tab-container">
      <h1 class="text-center">Vue.js Tabs</h1>
    <div class="row">
      <div class="col-md-12 internalPadding">
        <div class="blueBar" @click="isShow['Star'] = !isShow['Star']" :class="{'red': isShow['Star']}">
          <div class="d-flex">
            <h2><i class="fab fa-jedi-order"></i>&nbsp; &nbsp;Star Wars </h2>
            <div class="ml-auto">
              <i class="fas fa-plus ml-auto"></i>
            </div>
          </div>
        </div><!-- End BlueBar -->
      </div><!-- End col -->
    </div><!-- End Row -->
    
    
    </div><!-- End tab container -->
  </div><!-- End Container -->
</div><!-- End App -->
</template>

<script>

export default {
 name:"Bbq",
    props:{
        msg:"string"
    }
    
};
</script>

<style>

</style>