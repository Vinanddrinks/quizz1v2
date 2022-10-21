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
  methods: {
    getDrinks(menuType) {
      fetch("/api/drinks/" + menuType)
        .then((response) => response.json())
        .then((data) => {
          this.drinks = data;
        });
    },
  },
  props: {
    menuType: {
      type: String,
      required: true,
    },
  },
  name: "searchView",
  components: {
    drinkCardNoDesc,
  },
  data() {
    return {
      drinks: [],
    };
  },
  // Before we create the component, we call the getDrinks method
  beforeCreate() {
    var component = this;
    if (
      component.menuType == "popular" ||
      component.menuType == "best" ||
      component.menuType == "Hot" ||
      component.menuType == "Cold"
    ) {
      fetch("/api/drinks/" + component.menuType)
        .then((response) => response.json())
        .then((data) => {
          this.drinks = data;
        });
    } else {
      fetch("/api/drinks/")
        .then((response) => response.json())
        .then((data) => {
          this.drinks = data;
        });
    }
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