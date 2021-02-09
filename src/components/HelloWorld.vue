<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Onk脚手架内置封装axios网络模块，更多丰富内容敬请期待...</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style scoped>
h3{
  color: #ccc;
}
</style>
