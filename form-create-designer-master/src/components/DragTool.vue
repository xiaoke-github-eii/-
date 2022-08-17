<template>
  <div class="drag-tool" @click.stop="active" :class="{active: state.active === id}">
    <div class="drag-mask" v-if="mask"></div>
    <div class="drag-l">
      <div class="drag-btn _fc-drag-btn" v-if="state.active === id && dragBtn !== false" style="cursor: move;">
        <i class="fc-icon icon-move"></i>
      </div>
    </div>
    <div class="drag-r">
      <!-- <div class="drag-btn" @click="$emit('add')">
        
        <i class="el-icon-circle-plus-outline"></i>
      </div> -->
      <div class="drag-btn" @click="$emit('copy')">
        <i class="el-icon-document-copy"></i>
      </div>
      <div class="drag-btn" v-if="children" @click="$emit('addChild')">
        <i class="fc-icon icon-add-child"></i>
      </div>
      <div class="drag-btn drag-btn-danger" @click="$emit('delete')">
        <i class="el-icon-delete"></i>
      </div>
    </div>
    <slot name="default"></slot>
  </div>
</template>

<script>
let id = 1;
export default {
    name: 'DragTool',
    inject: ['fcx'],
    props: ['dragBtn', 'children', 'unique', 'mask'],
    data() {
        return {
            id: this.unique || id++,
            state: this.fcx
        };
    },
    methods: {
        active() {
            this.$emit('click');
            if (this.state.active === this.id) return;
            this.state.active = this.id;
            this.$emit('active');
        }
    },
    beforeDestroy() {
        this.state = {};
    }
};
</script>

<style>
.drag-tool {
  position: relative;
  min-height: 20px;
  box-sizing: border-box;
  padding: 2px;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
  padding: 2px 32px;
  margin: 8px 0;
  padding-bottom: 0;
}

.drag-tool .drag-tool {
  margin: 5px;
}

.drag-tool + .drag-tool {
  margin-top: 5px;
}

.drag-tool .el-form-item{
  padding-top: 20px;
}
.drag-tool .el-form-item__label{
  
  font-size: 16px;
  height: 24px;
  font-weight: 600;
  color: rgba(0,0,0,0.8500);
  line-height: 24px;
  margin-bottom: 8px;
}
.drag-tool.active {
  /* outline: 2px solid #2E73FF; */
  background: #F2F4FD;
}
.drag-tool .el-form-item__content{
  margin-bottom: 8px;
}
.drag-tool.active > div > .drag-btn {
  display: flex;
}

.drag-tool .drag-btn {
  display: none;
}

.drag-r {
  position: absolute;
  right: 32px;
  z-index: 1904;
  top: 20px;
}

.drag-l {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1904

}

.drag-btn {
  height: 18px;
  width: 18px;
  text-align: center;
  line-height: 20px;
  padding-bottom: 1px;
  float: left;
  cursor: pointer;
  justify-content: center;
  color: #8E8B91;
}
._fc-drag-btn{
  width: 100%;
  background: #F2F4FD;
  color: #000;
}
.drag-btn + .drag-btn {
  margin-left: 2px;
}

.drag-btn-danger .el-icon-delete:hover{
  color: #f30;
}

.drag-btn i {
  font-size: 18px;
  line-height: 20px;
}
.drag-btn i:hover{
  color: #828EE8;
}
.drag-mask{
    z-index: 1900;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
;}
</style>
