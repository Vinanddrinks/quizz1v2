<template>
  <div id="cardContainer">
    <div id="cardPicture">
      <img :src="'api/drinks/picture/' + image" alt="product picture " />
    </div>
    <div id="cardDescription">
      <h3>{{ name }}</h3>
      <p>grade: {{ grade }}</p>
      <p>sold: {{ count }}</p>
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
      this.bgColor = "#ffac29";
    },
    bgCold() {
      this.bgColor = "#4168e0";
    },
  },
  name: "drinkCard",
  props: {
    name: { String, required: true },
    grade: { Number, required: true },
    count: { Number, required: true },
    image: { String, required: true },
    is_hot: { Boolean, required: true },
  },
  data() {
    return {
      cartWhite,
      bgColor: "white",
    };
  },
  mounted() {
    if (this.is_hot) {
      this.bgColor = "#ffac29";
    } else {
      this.bgColor = "#4168e0";
    }
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
  width: 25%;
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
      border-radius: 5%;
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