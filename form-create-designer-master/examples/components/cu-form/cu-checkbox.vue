<template>
  <div class="cu-checkbox">
    <el-checkbox-group v-model="defaultValue" @change="change">
      <el-checkbox
        v-for="(item, index) in options"
        :label="item.label"
        :key="index"
        >{{ item.label }}</el-checkbox
      >
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "FormCreateDesignerCuCheckbox",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: [String, Number, Array],
    },
    options: {
      type: [Array],
    },
  },
  data() {
    return {
      defaultValue: [],
    };
  },

  mounted() {
  },

  methods: {
    change(val) {
      this.$emit("change", val);
    },
  },
};
</script>

<style lang="less" scoped>
.cu-checkbox {
  .el-checkbox-group {
    display: flex;
    flex-direction: column;
  }
}
</style>