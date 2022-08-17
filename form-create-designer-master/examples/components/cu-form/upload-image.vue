<template>
  <div class="cu-image-container">
    <img :src="src" alt="">
  </div>
</template>

<script>
export default {
  name: "FormCreateDesignerCuImage",
  props: {
    src: {
      type: [String, Number],
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.cu-image-container {
  max-height: 400px;
  max-width: 90%;
}
.cu-image-container{
  max-height: 400px;
  width: auto;
}
</style>