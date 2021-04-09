<script>
export default {
    name: 'MenueItem',
    props: ['addToShoppingCart','image','name','inStock','quantity']
}
</script>

<template>
    <div >
        <img class="menu-item__image" :src="image.source" :alt="image.alt"
        />
        <div>
            <h3> {{ name }} </h3>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <div>
                <label for="add-item-quantity"> Quantity: {{ quantity }} </label>
                <input
                    v-model.number="quantity"
                    id="add-item-quantity"
                    type="number"
                />
                <button @click="addToShoppingCart">
                    Add to Shopping Cart
                </button>
            </div>
        </div>
    </div>
</template>

<style></style>