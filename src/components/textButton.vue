<template>
  <div id="buttonContainer">
    <div id="buttonText">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "textButton",
  props: {
    text: {
      type: String,
    },
  },
  watch: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#buttonContainer {
  display: inline-flex;
  padding: 1%;
  white-space: nowrap;
  text-align: center;
  border-radius: 20px;
  overflow: visible;
  justify-content: center;
  align-items: center;
  background-color: #ff902a;
  #buttonText {
    p {
      font-size: 1rem;
      color: white;
      text-decoration: none;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
}
</style>
