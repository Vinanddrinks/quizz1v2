<template>
  <div id="cardContainer">
    <div id="cardPicture">
      <img :src="image" alt="product picture " />
    </div>
    <div id="cardDescription">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
      <p>{{ price }}$</p>
    </div>
    <div id="buttonContainer">
      <ButtonTemperature @click="bgHot" text="Hot" />
      <ButtonTemperature @click="bgCold" text="Cold" />
      <TextPictureButton :text="'Order Now !'" :image="cartWhite">
      </TextPictureButton>
    </div>
  </div>
</template>

<script>
import ButtonTemperature from "./buttonTemperature.vue";
import TextPictureButton from "./textPictureButton.vue";
import cartWhite from "@/assets/cartWhite.svg";
export default {
  methods: {
    bgHot() {
      this.bgColor = "red";
    },
    bgCold() {
      this.bgColor = "#4168e0";
    },
  },
  name: "drinkCard",
  props: {
    name: { String, required: true },
    description: { String, required: true },
    price: { Number, required: true },
    image: { String, required: true },
  },
  data() {
    return {
      cartWhite,
      bgColor: "white",
    };
  },
  components: { ButtonTemperature, TextPictureButton },
};
</script>

<style lang="scss" scoped>
#cardContainer {
  box-shadow: 0 0 0 4px #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  height: 400px;
  background-color: v-bind("bgColor");
  border-radius: 10px;
  margin: 10px;
  padding: 40px;
  #cardPicture {
    width: 100%;
    height: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  #cardDescription {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  #buttonContainer {
    margin-top: 40px;
    width: 100%;
    height: 20%;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    textPictureButton {
      margin-left: 10px;
      padding: 10%;
    }
  }
}
</style>