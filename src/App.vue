<template>
  <nav id="nav">
    <ul id="navList">
      <li class="icoitem">
        <div id="navico">
          <router-link to="/"><img src="@/assets/logo_coffe.svg" alt="logo" /></router-link>
        </div>
      </li>
      <li class="linkitem">
        <router-link to="/">Home</router-link>
      </li>
      <li class="linkitem">
        <router-link to="/ourproductview">About</router-link>
      </li>
      <li class="linkitem">
        <router-link to="/deliveryview">Contact</router-link>
      </li>
      <li class="searchitem">
        <div id="search">
          <img src="@/assets/search.svg" alt="search">
          <input type="text" placeholder="Search" />
        </div>
      </li>
      <li class="cartitem">
        <div id="cart">
          <router-link to="/cartview"><img src="@/assets/cart.svg" alt="cart" /></router-link>
        </div>
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
  background-color: #c5ac87;
  position: sticky;
  top: 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #ff902a;
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
    font-family: 'Poppins';
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
    font-family: 'Poppins';
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
    }
    img {
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }
  }

}
</style>
