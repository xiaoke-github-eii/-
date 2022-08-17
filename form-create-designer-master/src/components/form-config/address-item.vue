<template>
  <config-item :title="title">
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
      v-model="defauleValue"
      @change="onInput"
    ></el-cascader>
  </config-item>
  
</template>

<script>
import ConfigItem from './config-item.vue';
import addressData from "@/utils/addressData";
export default {
  name: 'addressItem',
  components: {
    ConfigItem
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    name: {
      type: [String, Number]
    },
    title: {
      type: [String, Number]
    },
    value: {
      type: [Array]
    },
    placeholder: {
      type: [String, Number],
      default: '请输入内容'
    }
  },
  data(){
    return {
      defauleValue: [],
      addressData:addressData,
    }
  },
  watch: {
    value: {
      handler(val){
        this.defauleValue = val;
      }
    }
  },
  created(){
    this.defauleValue = this.value;
  },
  methods: {
    onInput(){
      this.$emit('change', {
        name: this.name,
        value: this.defauleValue,
      });
    }
  }
}
</script>

<style>

</style>