<template>
  <div class="home">
    <section id="aboutUS">
      <div id="titleContainer">
        <div class="text">
          <h1>
            Enjoy your
            <p class="emphasis">coffee!</p>
            before your activity
            <p class="emphasis">;-)</p>
          </h1>
          <h3 id="titleDescription">
            Boost your productivity and build your mood with a glass of coffee
            in the morning
          </h3>
        </div>
        <div class="titleElements">
          <router-link to="/cartview">
            <textPictureButton
              :text="'Order Now !'"
              :image="cartWhite"
            ></textPictureButton>
          </router-link>
          <router-link to="/">
            <TextButton :text="'More information'"> </TextButton>
          </router-link>
        </div>
      </div>
      <div id="promoPicture">
        <img src="@/assets/img-hero.svg" alt="coffee" />
      </div>
    </section>
    <section id="topProducts">
      <h2>Top products</h2>
      <div id="topProductsContainer">
        <DrinkCard
          :key="drinks.drinks[0].id"
          :name="drinks.drinks[0].name"
          :description="drinks.drinks[0].description"
          :price="drinks.drinks[0].price"
          :image="drinks.drinks[0].image"
        ></DrinkCard>
        <DrinkCard
          :key="drinks.drinks[1].id"
          :name="drinks.drinks[1].name"
          :description="drinks.drinks[1].description"
          :price="drinks.drinks[1].price"
          :image="drinks.drinks[1].image"
        ></DrinkCard>
        <DrinkCard
          :key="drinks.drinks[2].id"
          :name="drinks.drinks[2].name"
          :description="drinks.drinks[2].description"
          :price="drinks.drinks[2].price"
          :image="drinks.drinks[2].image"
        ></DrinkCard>
      </div>
    </section>
    <section id="slotCardSection">
      <h2>Slotted Cards:</h2>
      <div id="cardContainer">
        <SlottedCard>
          <template #top>
            <h2>Our coffee</h2>
          </template>
          <template #middle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptas, quae, quod, voluptates quibusdam voluptatibus quidem
              voluptatum quos quia quas nesciunt. Quisquam, quae. Quisquam
              voluptas, quae, quod, voluptates quibusdam voluptatibus quidem
              voluptatum quos quia quas nesciunt. Quisquam, quae.
            </p>
          </template>
          <template #bottom>
            <router-link to="/">
              <TextButton :text="'More information'"> </TextButton>
            </router-link>
          </template>
        </SlottedCard>
        <SlottedCard>
          <template #top
            ><img src="@/assets/cart.svg" alt="cart logo"
          /></template>
          <template #middle><p>The cart logo</p></template>
          <template #bottom>
            <router-link to="/cartview">
              <TextButton :text="'Link to the cart view'"> </TextButton>
            </router-link>
          </template>
        </SlottedCard>
      </div>
    </section>
  </div>
</template>

<script>
import textPictureButton from "@/components/textPictureButton.vue";
import textButton from "@/components/textButton.vue";
import cartWhite from "@/assets/cartWhite.svg";
import TextButton from "../components/textButton.vue";
import DrinkCard from "../components/drinkCard.vue";
import SlottedCard from "@/components/SlottedCard.vue";
export default {
  name: "HomeView",
  data() {
    return {
      cartWhite,
      drinks: [],
      topDrinks: [],
    };
  },
  computed: {},
  methods: {},
  beforeMount() {
    this.drinks = JSON.parse(localStorage.getItem("drinks"));
  },
  components: {
    textPictureButton,
    textButton,
    TextButton,
    DrinkCard,
    SlottedCard,
  },
};
</script>

<style lang="scss">
.home {
  #aboutUS {
    background-color: #f9d9aa;
    background-image: url("../assets/bg_img_hero.svg");
    border-bottom: #ff902a 5px solid;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    #titleContainer {
      width: 30%;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))
        drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));
      border-radius: 20px;
      display: inline-block;
      h1 {
        font-size: 3rem;
        .emphasis {
          color: #ff902a;
          display: inline;
        }
        display: inline;
      }
      #titleDescription {
        font-size: 1rem;
        color: #7e7d7a;
      }
      .titleElements {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        textPictureButton & textButton {
          margin: 1rem 1rem;
        }
      }
    }
  }
  #promoPicture {
    width: 30%;
    img {
      width: 100%;
    }
  }
  #topProducts {
    background-color: #f9d9aa;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    #topProductsContainer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 2rem;
      margin-block: 2rem;
      width: 50%;
      margin-inline: auto;
      drinkCard {
        margin: 1rem;
      }
    }
  }
  #slotCardSection {
    background-color: #f9d9aa;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    #cardContainer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 2rem;
      margin-block: 2rem;
      width: 50%;
      margin-inline: auto;
    }
  }
}
</style>
