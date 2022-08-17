<template>
  <el-input :placeholder="placeholder"></el-input>
</template>

<script>
export default {
  name: 'CuInput',
  props: {
    placeholder: {
      type: [String, Number]
    }
  }
}
</script>