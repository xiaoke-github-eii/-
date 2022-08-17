<template>
  <config-item :title="title">
    <el-input v-model="defauleValue" size="medium" :placeholder="placeholder" @input="onInput"></el-input>
  </config-item>
  
</template>

<script>
import ConfigItem from './config-item.vue';

export default {
  name: 'TitleTtem',
  components: {
    ConfigItem
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    name: {
      type: [String, Number],
    },
    title: {
      type: [String, Number],
      default: '标题'
    },
    value: {
      type: [String, Number]
    },
    placeholder: {
      type: [String, Number],
      default: '请输入内容'
    }
  },
  data(){
    return {
      defauleValue: ''
    }
  },
  watch: {
    value(val){
      this.defauleValue = val;
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