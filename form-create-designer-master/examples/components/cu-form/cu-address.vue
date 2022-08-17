<template>
  <div>
    <el-cascader
      clearable
      placeholder="省/市/区"
      :props="{
        expandTrigger: 'hover',
        value: 'areaName',
        label: 'areaName',
        children: 'child',
      }"
      :options="addressData"
      :value="address"
    ></el-cascader>
  </div>
</template>

<script>
import addressData from "@/utils/addressData";
export default {
  name: 'CuAddress',
  props: {
    address: {
      type: [Array]
    }
  },
  created(){
  },
  data(){
    return{
      addressData:addressData,
    }
  },
}
</script>

<style lang="less" scoped>
</style>