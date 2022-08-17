<template>
  <config-item :title="title">
    <div class="word-limit-item">
      <span>最少填</span>
      <el-input
        class="limit-input"
        v-model.number="defauleValue.minlength"
        size="medium"
        placeholder="不填写默认无限制"
        @input="onInput"
      ></el-input>
      <span>个字</span>
    </div>

    <div class="word-limit-item">
      <span>最多填</span>
      <el-input
        class="limit-input"
        v-model.number="defauleValue.maxlength"
        size="medium"
        placeholder="不填写默认无限制"
        @input="onInput"
      ></el-input>
      <span>个字</span>
    </div>
  </config-item>
</template>

<script>
import ConfigItem from "./config-item.vue";

export default {
  name: "WordLimitItem",
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
      type: Object,
      default: {
        maxlength: "",
        minlength: "",
      },
    },
  },
  data() {
    return {
      defauleValue: {
        maxlength: "",
        minlength: "",
      },
    };
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler(val) {
        this.defauleValue = val;
      },
    },
    "defauleValue.minlength": {
      handler(val) {
        if (val > 0) {
          if (this.defauleValue.maxlength > 0) {
            if (val > this.defauleValue.maxlength) {
              this.defauleValue.minlength = this.defauleValue.maxlength;
              this.onInput();
            }
          }
        } else {
          if (val == 0) {
            this.defauleValue.minlength = "";
            this.onInput();
          } else {
            this.defauleValue.minlength = val.replace(/\D/g, "");
            this.onInput();
          }
        }
      },
    },
    "defauleValue.maxlength": {
      handler(val) {
        if (val > 0) {
          if (this.defauleValue.minlength > 0) {
            if (val < this.defauleValue.minlength) {
              this.defauleValue.maxlength = this.defauleValue.minlength;
              this.onInput();
            }
          }
        } else {
          if (val == 0) {
            this.defauleValue.minlength = "";
            this.onInput();
          } else {
            this.defauleValue.minlength = val.replace(/\D/g, "");
            this.onInput();
          }
        }
      },
    },
  },
  created() {},
  methods: {
    onInput() {
      this.$emit("change", {
        name: this.name,
        value: this.defauleValue,
      });
      this.$emit("change", {
        name: "maxlength",
        value: this.defauleValue.maxlength,
      });
      this.$emit("change", {
        name: "minlength",
        value: this.defauleValue.minlength,
      });
    },
  },
};
</script>

<style>
.word-limit-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 400;
  color: rgba(0,0,0,0.6500);
  font-size: 14px;
}
.word-limit-item:last-child {
  margin-bottom: 0;
}
.word-limit-item .limit-input {
  flex: 1;
  margin: 0 8px;
}
</style>
