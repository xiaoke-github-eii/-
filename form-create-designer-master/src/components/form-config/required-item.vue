<template>
  <config-item title="必填" mode="vertical">
    <div>
      <el-switch
        v-model="defauleValue"
        active-color="#828EE8"
        inactive-color="rgb(191 191 191)"
        @change="onChange"
      >
      </el-switch>
    </div>
  </config-item>
</template>

<script>
import ConfigItem from "./config-item.vue";

export default {
  name: "TitleTtem",
  components: {
    ConfigItem,
  },
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: Boolean,
    },
  },
  data() {
    return {
      defauleValue: false,
    };
  },
  watch: {
    value(val) {
      this.defauleValue = val;
    },
  },
  created() {
    this.defauleValue = this.value;
  },
  methods: {
    onChange() {
      this.$emit("change", this.defauleValue);
    },
  },
};
</script>

<style></style>
