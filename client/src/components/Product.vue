<template>
   
   <div class="main">
     <Mininav/>
  <div id="app">
  <div class="container">
    <nav class="well well-sm">
      <a  @click.prevent="isShowingCart = false" class="BBQ"><strong><h1 style="margin-top:4%; text-align:center;">BBQ Store</h1></strong></a>
     
        <div class="text-right pull-right" style="margin-top:5%;">
    <span class="stats">
      {{ cart.items.length }} 
      <template v-if="cart.items.length == 1">item</template>
      <template v-else>items</template> 
      in cart, totalling {{ cartTotal | currency }}
      <button class="btn btn-primary" @click="isShowingCart = true">View Cart</button>
       <button class="btn btn-primary" style="color:white;  background:white; "><router-link to="/booking">Booking page</router-link></button>
    </span>
    
  </div>
      <div class="btn-group">
        <!-- <a id="list" @click="listWrapper" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-th-list"></span>List
        </a>
        <a @click="gridWrapper" id="grid" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-th"></span>Grid
        </a> -->
        </div>
      
    </nav>
  

  <div class="container">
    <div v-if="!isShowingCart" id="products" class="row">
    <div v-for="product in products" :class="groupWrapper"  class="item  col-xs-4 col-lg-4">
    <div class="thumbnail">
    <img class="group list-group-image" :src="product.picture" alt="" />
    <div class="caption">
      <h4 class="group inner list-group-item-heading">
       {{product.name}}</h4>
      <p class="group inner list-group-item-text">
        {{product.description}}</p>
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <p class="lead">
            {{product.price | currency}}</p>
        </div>
        <div class="col-xs-8 flex flex-row align-center justify-right">
          <div class="number-in-stock" :class="{ few: product.inStock < 10 && product.inStock > 0, none: product.inStock == 0 }" >
             {{ product.inStock }} in stock
          </div>
          <button class="btn btn-success" @click="addProductToCart(product)" :disabled="product.inStock == 0" >Add to cart</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
  
  <div v-else>
    <h1 style="color:white">Cart</h1>
    <table v-if="cart.items.length > 0" class="table table-striped">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart.items">
          <td>{{ item.product.name }}</td>
          <td>
            {{ item.quantity }} &nbsp;
            <button class="btn btn-success" @click="increaseQuantity(item)" :disabled="item.product.inStock == 0">+</button>
            <button class="btn btn-danger" @click="decreaseQuantity(item)">-</button>
          </td>
          <td>{{ item.quantity * item.product.price | currency }}</td>
        </tr>
        
        <tr>
          <td class="text-right" colspan="2">
            <strong>Subtotal</strong>
          </td>
          
          <td>{{ cartTotal | currency }}</td>
        </tr>
        
        <tr>
          <td class="text-right" colspan="2">
            <strong>Taxes</strong>
          </td>
          
          <td>{{ taxAmount | currency }}</td>
        </tr>
        
        <tr>
          <td class="text-right" colspan="2">
            <strong>Grand total</strong>
          </td>
          
          <td>{{ cartTotal + taxAmount | currency }}</td>
        </tr>
        
        <tr>
          <td colspan="2"></td>
          <td><button class="btn btn-success" @click="checkout">Checkout</button></td>
        </tr>
      </tbody>
    </table>
    
    <p v-else>Your cart is currently empty.</p>
        
      
  </div>
  </div>
  
  
  </div>
</div>
   </div>
</template>

<script>
import Mininav from './Mininav'
export default {
    name:"pickup",
    components:{
      'Mininav':Mininav
    },
  data(){
      return {

        groupWrapper: "list-group-item",
        isShowingCart: false,
        cart: {
        items: []
        },
        products: [
        {
            id: 1,
            picture: '',
            name: "Grill 1",
            description:
            " Enjoy Outside",
            price: 2999,
            inStock: 50
        },
        { picture:'',
            id: 2,
            name: "Grill 2",
            description:
            "",
            price: 299,
            inStock: 755
        },
        {
            id: 3,
            name: "Grill 3",
            description:
            "",
            price: 149,
            inStock: 5
        },
         {
            id: 3,
            name: "Grill 3",
            description:
            "",
            price: 149,
            inStock: 5
        },
         {
            id: 3,
            name: "Grill 3",
            description:
            "",
            price: 149,
            inStock: 5
        },
         {
            id: 3,
            name: "Grill 3",
            description:
            "",
            price: 149,
            inStock: 5
        },
         {
            id: 3,
            name: "Grill 3",
            description:
            "",
            price: 149,
            inStock: 5
        },
         {
            id: 3,
            name: "Grill 3",
            description:
            "",
            price: 149,
            inStock: 5
        },
         {
            id: 3,
            name: "Grill 3",
            description:
            "",
            price: 149,
            inStock: 5
        },
         {
            id: 3,
            name: "Add On 1",
            description:
            "",
            price: 149,
            inStock: 5
        },
         {
            id: 3,
            name: "Add On 1",
            description:
            "",
            price: 149,
            inStock: 5
        },
         {
            id: 3,
            name: "Add On 1",
            description:
            "",
            price: 149,
            inStock: 5
        },
         {
            id: 3,
            name: "Add On 1",
            description:
            "",
            price: 149,
            inStock: 5
        },
         {
            id: 3,
            name: "Add On 1",
            description:
            "",
            price: 149,
            inStock: 5
        },
         {
            id: 3,
            name: "Add On 1",
            description:
            "",
            price: 149,
            inStock: 5
        },
         {
            id: 3,
            name: "Add On 1",
            description:
            "",
            price: 149,
            inStock: 5
        },

        {
            id: 3,
            name: "Add On 1",
            description:
            "",
            price: 149,
            inStock: 5
        },
         {
            id: 3,
            name: "Add On 1",
            description:
            "",
            price: 149,
            inStock: 5
        },
        ]
    }
    },
  computed:{
    cartTotal: function() {
      var total = 0;
      this.cart.items.forEach(function(item) {
        total += item.quantity * item.product.price;
      });
      return total;
    },
    taxAmount: function() {
      return this.cartTotal * 10 / 100;
    }
  },
  filters: {
    currency: function(value) {
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
      });
      return formatter.format(value);
    }
  },
  methods:{
    removeItemFromCart: function(cartItem) {
      var index = this.cart.items.indexOf(cartItem);
      
      if (index !== -1) {
        this.cart.items.splice(index, 1);
      }
    },
    checkout: function() {
      if (confirm('Are you sure that you want to purchase these products?')) {
        this.cart.items.forEach(function(item) {
          item.product.inStock += item.quantity;
        });
        
        this.cart.items = [];
      }
    },
    addProductToCart: function(product) {
      var cartItem = this.getCartItem(product);
      
      if (cartItem != null) {
        cartItem.quantity++;
      } else {
        this.cart.items.push({
          product: product,
          quantity: 1
        });
      }
      product.inStock--;
    },
    increaseQuantity: function(cartItem) {
      cartItem.product.inStock--;
      cartItem.quantity++;
    },
    decreaseQuantity: function(cartItem) {
      cartItem.quantity--;
      cartItem.product.inStock++;
      if (cartItem.quantity == 0) {
        this.removeItemFromCart(cartItem);
      }
    },
    getCartItem: function(product) {
      for (var i = 0; i < this.cart.items.length; i++) {
        if (this.cart.items[i].product.id === product.id) {
          return this.cart.items[i];
        }
      }
      
      return null;
    },
    listWrapper:function(){
      this.groupWrapper = "list-group-item"
    },
    gridWrapper:function(){
      this.groupWrapper = "grid-group-item"
    }
  }
}
</script>

<style>
.main{
  background-color: black;
}
.BBQ{
  cursor: pointer;
}
.stats{
  color: #eeeeee;
}
tr{
  color: #eeeeee;
}
.glyphicon { margin-right:5px; }
.thumbnail
{
  margin-bottom: 20px;
  padding: 0px;
  -webkit-border-radius: 0px;
  -moz-border-radius: 0px;
  border-radius: 0px;
}

.item.list-group-item
{
  float: none;
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
}
.item.list-group-item:nth-of-type(odd):hover,.item.list-group-item:hover
{
  background: #428bca;
}

.item.list-group-item .list-group-image
{
  margin-right: 10px;
}
.item.list-group-item .thumbnail
{
  margin-bottom: 0px;
}
.item.list-group-item .caption
{
  padding: 9px 9px 0px 9px;
}
.item.list-group-item:nth-of-type(odd)
{
  background: #eeeeee;
}
/* .item.list-group-item:nth-of-type(even)
{
  background:rgb(33, 218, 33);
} */
.item.list-group-item:before, .item.list-group-item:after
{
  display: table;
  content: " ";
}

.item.list-group-item img
{
  float: left;
}
.item.list-group-item:after
{
  clear: both;
}
.list-group-item-text
{
  margin: 0 0 11px;
}
</style>