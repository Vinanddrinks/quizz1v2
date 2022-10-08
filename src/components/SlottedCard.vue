<template>
  <div id="slottedCardContainer">
    <div id="slottedCard">
      <div class="division">
        <slot name="top"></slot>
      </div>
      <div class="division">
        <slot name="middle"></slot>
      </div>
      <div class="division">
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlottedCard",
};
</script>

<style lang="scss" scoped>
#slottedCardContainer {
  display: flex;
  background-color: white;
  border-radius: 10px;
  justify-self: center;
  padding: 5%;
  #slottedCard {
    height: 30em;
    overflow: hidden;
  }
  .division {
    height: 33.33%;
    display: flex;
    justify-content: center;
    white-space: inherit;
    align-items: center;
    padding: 1%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  max-height: 35em;
  overflow: hidden;
}
</style>