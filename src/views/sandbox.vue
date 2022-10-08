<template>
  <h1>Sandbox Zone for component testing purposes</h1>
  <div>
    <ButtonTemperature text="Hot" />
    <ButtonTemperature text="Cold" />
  </div>
</template>

<script>
import ButtonTemperature from "@/components/buttonTemperature.vue";
export default {
  name: "sandBox",
  components: {
    ButtonTemperature,
},
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>