<template>
  <section id="content">
    <div id="result">
      <drinkCardNoDesc
        v-for="drink in drinks"
        :key="drink.id"
        :name="drink.name"
        :grade="drink.average_rating"
        :count="drink.count_orders"
        :image="drink.image"
        :is_hot="drink.is_hot"
      >
      </drinkCardNoDesc>
    </div>
  </section>
</template>

<script>
import drinkCardNoDesc from "@/components/drinkCardNoDesc.vue";
export default {
  name: "searchView",
  components: {
    drinkCardNoDesc,
  },
  data() {
    return {
      drinks: [],
    };
  },
  beforeMount() {
    fetch("api/drinks")
      .then((response) => response.json())
      .then((data) => {
        this.drinks = data;
      });
  },
};
</script>

<style scoped lang="scss">
#content {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
#result {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>