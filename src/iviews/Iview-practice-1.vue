<template>
<div>
<i-input :value.sync="value" placeholder="请输入..." style="width: 300px"></i-input>
<p>输入框中输入的为：{{value}}</p>
<i-switch @on-change="change">按钮</i-switch>
<i-icon></i-icon>
</div>
</template>
<script>
export default {
  name: 'IviewTest1',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    change (status) {
      this.$Message.info('开关状态：' + status)
    }
  }
}
</script>
