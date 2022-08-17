<template>
  <div class="cu-radio">
    <el-radio-group v-model="defaultValue" @change="change" >
      <el-radio v-for="(item,index) in options" :label="item.label" :key="index">{{
        item.label
      }}</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "FormCreateDesignerCuRadio",
  model:{
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number],
    },
    options: {
      type: [Array],
    },
  },
  data() {
    return {
      defaultValue:'',
    };
  },
 
  mounted() {
   this.defaultValue = this.value;
  },

  methods: {
    change(val){
      this.$emit('change',val)
    },
  },
};
</script>

<style lang="less" scoped>
.cu-radio{
  .el-radio-group{
    display: flex;
    flex-direction: column;
  }
  .el-radio{
    margin-bottom: 8px;
  }
}
</style>