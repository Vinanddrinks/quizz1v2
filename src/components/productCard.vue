<template>
  <div class="productCard">
    <div class="productCard__image">
      <img :src="product.image" alt="product image" />
    </div>
    <div class="productCard__info">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <div class="productCard__info__price">
        <p>{{ product.price }}€</p>
        <button @click="addToCart(product)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        product: {
            type: Object,
            required: true
        }
    },
};
</script>

<style lang="scss" scoped>
.productCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  .productCard__image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .productCard__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    .productCard__info__price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      button {
        width: 100px;
        height: 30px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: white;
        cursor: pointer;
      }
    }
  }
}
</style>