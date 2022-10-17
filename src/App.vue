<template>
  <nav id="nav">
    <ul id="navList">
      <li class="icoitem">
        <div id="navico">
          <router-link to="/"
            ><img src="@/assets/logo_coffe.svg" alt="logo"
          /></router-link>
        </div>
      </li>
      <li class="linkitem">
        <router-link to="/">About Us</router-link>
      </li>
      <li class="linkitem">
        <router-link to="/ourproductview">Products</router-link>
      </li>
      <li class="linkitem">
        <router-link to="/deliveryview">Delivery</router-link>
      </li>
      <li class="searchitem">
        <router-link to="/searchView">
          <div id="search">
            <img src="@/assets/search.svg" alt="search" />
            <input type="text" placeholder="Search" v-model="searchInfo" />
          </div>
        </router-link>
      </li>
      <li class="cartitem">
        <div id="cart">
          <router-link to="/cartview"
            ><img src="@/assets/cart.svg" alt="cart"
          /></router-link>
        </div>
      </li>
    </ul>
  </nav>
  <router-view />
</template>
<script>
export default {
  name: "MainApp",
  created() {
    window.addEventListener("beforeunload", (event) => {
      // to create a pop-up when the user want to leave the page
      event.preventDefault();
      window.confirm("Are you sure you want to leave?");
      event.returnValue = ""; // mandatory return value for Chromium browsers
    });
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    beforeMount: (onload = function () {
      // to load into local storage all values from the "database" ;-)
      console.log("MainApp");
      if (localStorage.getItem("Drinks") == null) {
        import("./assets/drinks.json").then((data) => {
          localStorage.setItem("drinks", JSON.stringify(data.default));
        });
        console.log("Liste des boissons créée");
      } else {
        console.log("Liste des boissons déjà créée");
      }
      if (this.localStorage.getItem("Cart") == null) {
        this.localStorage.setItem("Cart", JSON.stringify([]));
        console.log("Liste des produits ajoutés au panier créée");
      } else {
        console.log("Liste des produits ajoutés au panier déjà créée");
      }
      return null;
    }),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  z-index: abs($number: 300);
  padding: 15px;
  background-color: #c5ac87;
  border-bottom: 5px solid #ff902a;
  position: sticky;
  top: 0;
  a {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: rgba(255, 144, 42);
      filter: drop-shadow(0px 4px 4px #ff912a9e)
        drop-shadow(0px 4px 4px #ff912a9e);
    }
  }

  #navList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin: 0 10px;
    }
  }
  .linkItem {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    background-color: #ff902a;
    border-radius: 10px;
    color: black;
    font-weight: bold;
    text-decoration: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: auto;
    line-height: 27px;
  }
  /*search box styling*/
  #search {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    color: black;
    font-weight: bold;
    text-decoration: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: auto;
    line-height: 27px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    input {
      width: 150px;
      height: 30px;
      border-radius: 10px;
      background-color: white;
      border: none;
      padding: 0 10px;
      margin: 0 10px;
      outline: none;
    }
    img {
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }
  }
}
</style>
