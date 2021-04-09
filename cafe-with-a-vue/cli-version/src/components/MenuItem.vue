<script>
export default {
  name: 'MenuItem',
  props: ['addToShoppingCart', 'image', 'inStock', 'name', 'price', 'quantity'],
  data (){
    return { onSale: false}
  },
  computed: {
    generatedPrice(){
      if( this.onSale)
        return (this.price *9 /10).toFixed(2)
      
      return this.price
    }
  },
  beforeMount() {
    const currentDay = new Date().getDay();
    if( currentDay %2 === 0) // day is even
      // every price is displayed at 10% off
      this.onSale = true;
  }
}
</script>

<template>
  <div class="menu-item">
    <img class="menu-item__image" :src="image.source" :alt="image.alt" />
    <div>
      <h3>{{ name }}</h3>
      <p>Price: {{ generatedPrice }} <span v-if="onSale">(10% Off) </span></p>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <div>
        <label for="add-item-quantity">Quantity: {{ quantity }}</label>
        <input v-model.number="quantity" id="add-item-quantity" type="number" />
        <button @click="addToShoppingCart(quantity)">
          Add to Shopping Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style>
span{
  color:red
}
</style>
