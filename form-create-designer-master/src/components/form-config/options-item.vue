<template>
  <config-item class="options-box" :title="title">
    <template slot="action">
      <span class="action-add-container">
        <i class="el-icon-circle-plus-outline"></i>
        <span class="add-btn" @click="handleAdd">添加</span>
      </span>
    </template>
    <div class="option-items">
      <div
        class="option-item"
        v-for="(option, index) in defauleValue"
        :key="index"
      >
        <el-input
          class="option-input"
          v-model="option.label"
          size="medium"
          @input="onInput"
          placeholder="请输入内容"
        ></el-input>
        <i class="el-icon-caret-top" @click="handleUp(index)"></i>
        <i class="el-icon-caret-bottom" @click="handleDown(index)"></i>
        <i class="el-icon-delete" @click="handleDel(index)"></i>
      </div>
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
    name: {
      type: [String, Number],
    },
    title: {
      type: [String, Number],
    },
    value: {
      type: Array,
    },
  },
  data() {
    return {
      defauleValue: [],
    };
  },
  watch: {
    value: {
      handler(val) {
        this.defauleValue = val;
      },
    },
  },
  created() {
    this.defauleValue = this.value;
  },
  methods: {
    change() {
      this.$emit("change", {
        name: this.name,
        value: this.defauleValue,
      });
    },
    onInput() {
      this.defauleValue.forEach(item=>{
        item.value = item.label;
      })
      // this.change();
    },
    handleUp(index) {
      if (index == 0) {
        return;
      }
      this.defauleValue[index] = this.defauleValue.splice(
        index - 1,
        1,
        this.defauleValue[index]
      )[0];
    },
    handleDown(index) {
      if (index == this.defauleValue.length - 1) {
        return;
      }
      this.defauleValue[index] = this.defauleValue.splice(
        index + 1,
        1,
        this.defauleValue[index]
      )[0];
    },
    handleAdd() {
      this.defauleValue.push({ value: "", label: "" });
    },
    handleDel(index) {
      this.defauleValue.splice(index, 1);
    },
  },
};
</script>

<style>
.options-box .option-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.options-box .option-item:last-child {
  margin-bottom: 0;
}
.options-box .action-btn {
  display: inline-block;
  margin: 0 5px;
  width: 16px;
  height: 16px;
  background: #f00;
}
.options-box .option-input {
  flex: 1;
}

.options-box .add-btn {
  font-size: 14px;
  cursor: pointer;
}
.option-items i {
  margin-left: 8px;
  font-size: 18px;
  color: #bfbfbf;
  cursor: pointer;
}
.option-items i:hover {
  color: #828ee8;
}
.option-items i:last-of-type:hover {
  color: #fb363f;
}
.option-items .option-item:first-of-type .el-icon-caret-top {
  color: #e5e5e5;
}
.option-items .option-item:last-of-type .el-icon-caret-bottom {
  color: #e5e5e5;
}
.action-add-container{
  display: flex;
  align-items: center;
  cursor: pointer;
  color: rgba(0,0,0,0.4500);
}
.action-add-container .el-icon-circle-plus-outline{
  margin-right: 4px;
  color: rgba(0,0,0,0.4500);
}
.action-add-container:hover{
  color: #828ee8;
}
.action-add-container .el-icon-circle-plus-outline:hover{
  color: #828ee8;
}
</style>
