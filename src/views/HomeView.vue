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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed minima eaque esse fugiat quo possimus enim itaque. Fugit cupiditate repudiandae exercitationem atque deleniti ipsum quibusdam magnam nemo porro nihil? Quisquam.</p>
    </section>
  </div>
</template>

<script>
import textPictureButton from "@/components/textPictureButton.vue";
import textButton from "@/components/textButton.vue";
import cartWhite from "@/assets/cartWhite.svg";
import TextButton from "../components/textButton.vue";
export default {
  name: "HomeView",
  data() {
    return {
      cartWhite,
    };
  },
  computed: {},
  methods: {},
  components: {
    textPictureButton,
    textButton,
    TextButton,
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
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));
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
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
