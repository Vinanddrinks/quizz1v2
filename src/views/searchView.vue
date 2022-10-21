<template>
  <div id="globalContainer">
    <AWPDrinksMenu :menuType="this.menuType" />
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
      menuType: "popular",
    };
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
</style>