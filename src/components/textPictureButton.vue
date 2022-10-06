<template>
    <div id="buttonContainer">
      <div id="buttonText">
        <p>{{ text }}</p>
      </div>
      <div id="buttonImage">
        <img :src="image" alt="buttonImage" />
      </div>
    </div>
</template>

<script>
export default {
    name: 'textPictureButton',
  props: {
    text: {
      type: String,
    },
    image: {
      type: String,
      default : "",
    },
  },
  watch: {
  },
  methods: {
  },

}
</script>

<style lang="scss" scoped>
    #buttonContainer {
        display: inline-flex;
        white-space: nowrap;
        padding: 1%;
        text-align: center;
        border-radius: 20px;
        overflow: visible;
        justify-content: center;
        align-items: center;
        background-color: #2c3e50;
        #buttonText {
        p {
            font-size: 1rem;
            color: white;
            text-decoration: none;
            text-decoration-line: none;
            margin-left: 1rem;
        }
        }
        }
        #buttonImage {
        margin-left: 1rem;
        img {
            width: 1.5rem;
            margin-right: 1rem;
        }
        }
</style>