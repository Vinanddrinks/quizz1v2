<template>
  <div id="buttonContainer">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "buttonTemperature",
  props: {
    text: { String, required: true },
  },
};
</script>

<style lang="scss" scoped>
#buttonContainer {
  border-radius: 10px;
  border: 3px solid #ff902a;
  background-color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  white-space: hidden;
  justify-content: space-around;
  align-items: center;
  padding: 3%;
  p {
    font-weight: 500;
    text-align: center;
    color: white;
  }
}
</style>