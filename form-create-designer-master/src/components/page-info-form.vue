<template>
  <div class="page-info-form page-info-form-banner">
    <div class="banner">
      <img class="banner-img" :src="value.banner" alt="" srcset="" />
    </div>
    <div class="title-box">
      <el-input placeholder="请输入" :maxlength="10" class="page-title" :value="value.title" @input="handleTitle" />
    </div>
    <div class="remarks">
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        :value="value.remarks"
        @input="handleRemarks"
        :maxlength="200"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Object,
      default(){
        return {
          banner: "",
          title: "",
          remarks: "",
        }
      }
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    handleTitle(val){
      let value = {
        ...this.value
      }
      value.title = val;
      this.change(value)
    },
    handleRemarks(val){
      let value = {
        ...this.value
      }
      value.remarks = val;
      this.change(value)
    },
    change(value){
      this.$emit('change', value)
    }
  }
};
</script>

<style scoped lang="less">
.page-info-form .banner-img{
  width: 100%;
}
.page-info-form{
  border: 1px dashed rgba(0, 0, 0, 0.25);
  border-bottom: none;
  .banner{
    max-height: 240px;
    img{
      max-height: 240px;
    }
  }
}
.title-box{
  margin-top: 30px;
  margin-bottom: 4px;
  padding: 0 32px;
}
.remarks{
  padding: 0 32px;
}
</style>
