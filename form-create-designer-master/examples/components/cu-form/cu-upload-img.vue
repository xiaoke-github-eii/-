<template>
  <div>
    <el-button @click="test">测试</el-button>
  </div>
</template>

<script>
export default {
  name: "CuUploadImg",
  props: {
    value: {
      type: [Array],
    },
  },
  model: {
    prop: "value",
    event: "change",
  },
  data() {
    return {
      fileList: [],
    };
  },

  mounted() {
    this.fileList = this.value;
  },

  methods: {
    test() {
      console.log(this.fileList,this.value)
      this.fileList = [222,333]
      this.change();
    },
    change(){
      this.$emit('change',this.fileList)
      setTimeout(() => {
        console.log(this.fileList,this.value)
      }, 333);
      
    },
  },
};
</script>

<style lang="less" scoped>
</style>