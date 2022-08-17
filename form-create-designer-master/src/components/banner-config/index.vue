<template>
  <div class="config-from-box">
    <div class="from-label">页眉</div>
    <div class="setting-body">
      <div class="config-item">
        <div class="item-title">
          <span class="title-text">图片</span>
          <div>
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
        </div>
        <div class="item-body">
          <img class="thumbnail" :src="src" alt="" srcset="" />
          <div class="tip">建议图片尺寸750*224，500k以内</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    src: {
      type: String,
    },
  },
  data() {
    return {
      contentImgLink: [],
    };
  },
  computed: {
    config() {},
  },
  watch: {},
  created() {},
  methods: {
    handleUp(url) {
      this.$emit("change", url);
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
        this.handleUp(res.data.image_url)
      } else {
        this.$message.error("上传失败");
      }
    },
  },
};
</script>

<style scoped>
.config-from-box {
  width: 100%;
}
.config-from-box .from-label {
  line-height: 55px;
  padding-left: 16px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.config-from-box .thumbnail {
  width: 100%;
}
.tip{
  margin-top: 5px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0,0,0,0.4500);
}
</style>
