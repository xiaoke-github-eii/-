<template>
  <config-item :title="title">
    <el-select v-model="defauleValue" placeholder="请选择" @change="changes">
      <el-option v-for="item in arr" :key="item" :label="item" :value="item">
      </el-option>
    </el-select>
  </config-item>
</template>

<script>
import ConfigItem from "./config-item.vue";
export default {
  name: "LimitItem",
  components: {
    ConfigItem,
  },
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    name: {
      type: [String, Number],
    },
    title: {
      type: [String],
    },
    value: {
      type: [Number],
    },
    placeholder: {
      type: [String],
    },
  },
  data() {
    return {
      defauleValue: 1,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  mounted() {
    this.defauleValue = this.value;
  },

  methods: {
    changes(val) {
      this.$emit("change", {
        name: this.name,
        value: this.defauleValue,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.el-select{
  width: 100%;
}
</style>