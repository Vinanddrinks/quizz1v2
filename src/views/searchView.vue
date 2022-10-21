<template>
  <header>
    <div class="container">
      <button @click="updateMenuType">Change Menu Type</button>
      <p>Current Menu Type: {{ menuType }}</p>
    </div>
  </header>
  <div id="globalContainer">
    <AWPDrinksMenu :menuType="this.menuType" :key="menuKey" />
  </div>
</template>

<script>
import AWPDrinksMenu from "@/components/AWPDrinksMenu.vue";
export default {
  name: "SearchView",
  components: {
    AWPDrinksMenu,
  },
  data() {
    return {
      types: ["best", "Hot", "Cold", "popular"],
      menuType: "popular",
      menuKey: 0,
    };
  },
  methods: {
    updateMenuType() {
      this.menuType = this.types[this.menuKey % 4];
      this.menuKey += 1;
    },
  },
};
</script>

<style scoped lang="scss">
#globalContainer {
  background-color: #f9d9aa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.container {
  background-color: #ffe3ae;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>