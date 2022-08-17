<template>
  <div class="config-item" :class="[mode]">
    <div class="item-title">
      <span class="title-text">{{ title }}</span>
      <div>
        <slot name="action"></slot>
      </div>
    </div>
    <div class="item-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: [String, Number]
    },
    mode: {
      type: String,
      default: 'horizontal' // horizontal / vertical
    }
  }
}
</script>

<style>
.config-item{
  padding: 15px;
  border-bottom: 1px solid rgba(0,0,0,0.0600);
}
.config-item .item-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 22px;
}
.config-item .item-title .title-text{
  font-size: 14px;
  font-weight: 600;
  color: rgba(0,0,0,0.8500);
}
.config-item.horizontal .item-title{
  margin-bottom: 8px;
}
.config-item.vertical{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.config-item.vertical .item-title{
  
}
</style>