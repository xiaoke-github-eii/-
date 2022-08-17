<template>
  <div class="config-from-box">
    <div class="from-label">{{config.label}}</div>
    <TitleItem name="title" :value="title" @change="baseChange"  />
    <div class="props-list">
      <template v-for="item in propsRule">
        <component
          :key="item.field"
          :is="item.type"
          :title="item.title"
          :name="item.field"
          :value="activeRule[item.field]"
          @change="baseChange"
          v-if="item.form == 'base'"
        />
        <component
          :key="item.field"
          :is="item.type"
          :title="item.title"
          :name="item.field"
          :value="activeRule.props[item.field]"
          @change="propChange"
          v-else
        />
      </template>
      
    </div>
    <RrequiredItem @change="setRrequired" :value="required" v-if="showRequire" />
  </div>
</template>

<script>
import TitleItem from "./title-item.vue";
import InputItem from "./input-item.vue";
import RrequiredItem from "./required-item.vue";
import WordLimitItem from './word-limit-item.vue';
import OptionsItem from './options-item.vue';
import AddressItem from './address-item.vue';
import ChangeImage from './change-image.vue';
import LimitItem from './limit-item.vue'
export default {
  components: {
    InputItem,
    TitleItem,
    RrequiredItem,
    WordLimitItem,
    OptionsItem,
    AddressItem,
    ChangeImage,
    LimitItem
  },
  props: {
    activeRule: {
      type: Object,
    },
    baseForm: {
      type: Object,
    },
    propsForm: {
      type: Object,
    },
  },
  data() {
    return {
      title: "",
      required: false,
      propsRule: []
    };
  },
  computed: {
    config(){
      return this.activeRule.config.config;
    },
    showRequire(){
      if(this.activeRule.config.config.name == 'image'){
        return false;
      }else{
         return true;
      }
    },
  },
  watch: {
    activeRule: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val) {
          this.title = val.title;
          if (val.effect && val.effect.required) {
            this.required = true;
          } else {
            this.required = false;
          }
        }
      },
    },
    propsForm: {
      deep: true,
      immediate: true,
      handler(val) {
        this.propsRule = val.rule;
      },
    },
  },
  created() {
  },
  methods: {
    baseChange(field){
      this.$emit("baseChange", field.name, field.value, {}, this.baseForm.api);
    },
    propChange(field) {
      if(field.name == 'minlength' && field.value > 0){
        this.setRrequired(true)
        this.required = true;
      }
      this.$emit(
        "propChange",
        field.name,
        field.value,
        {},
        this.propsForm.api
      );
    },
    setRrequired(val) {
      this.$emit(
        "propChange",
        "formCreateEffect>required",
        val,
        {},
        this.propsForm.api
      );
    },
  },
};
</script>

<style>
.config-from-box{
  width: 100%;
}
.config-from-box .from-label {
  line-height: 55px;
  padding-left: 16px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0,0,0,0.8500);
  border-bottom: 1px solid rgba(0,0,0,0.0600);
}
</style>
