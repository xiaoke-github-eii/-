<template>
  <config-item :title="title">
    <div slot="action">
      <el-upload
        class="avatar-uploader"
        action="/app/uploadImage"
        :show-file-list="false"
        :before-upload="beforeAvatarUpload"
        :on-success="(res) => handleRemove(res)"
        @change="handchange($event)"
      >
        <el-button size="mini" type="text" style="color:#828ee8;">更换图片</el-button>
      </el-upload>
    </div>
    <div class="default-image">
      <img :src="defauleValue" alt="" />
    </div>
  </config-item>
</template>

<script>
import ConfigItem from "./config-item.vue";

export default {
  name: "imageTtem",
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
      type: [String, Number],
    },
  },
  data() {
    return {
      defauleValue: "",
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
    handleUp(url) {
      this.$emit("change", {
        name: this.name,
        value: url,
      });
    },
    beforeAvatarUpload(file) {
      //上传文件类型限制
      const isJPG = file.type.indexOf("image") > -1;
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("仅支持上传图片!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleRemove(res) {
      //上传图片
      const that = this;
      if (res.res == 0) {
        this.handleUp(res.data.image_url);
      } else {
        this.$message.error("上传失败");
      }
    },
  },
};
</script>

<style scoped>
.default-image {
  width: 266px;
  height: 148px;
}
.default-image img {
  width: 100%;
  height: 100%;
}
</style>