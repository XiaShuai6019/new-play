<template>
  <div class="hello">
     <Row>
        <i-col span="8">
            <i-menu :theme="theme2">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <i-menuItem name="1-1">文章管理</i-menuItem>
                    <i-menuItem name="1-2">评论管理</i-menuItem>
                    <i-menuItem name="1-3">举报管理</i-menuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <i-menuItem name="2-1">新增用户</i-menuItem>
                    <i-menuItem name="2-2">活跃用户</i-menuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <i-menuItem name="3-1">新增和启动</i-menuItem>
                        <i-menuItem name="3-2">活跃分析</i-menuItem>
                        <i-menuItem name="3-3">时段分析</i-menuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <i-menuItem name="3-4">用户留存</i-menuItem>
                        <i-menuItem name="3-5">流失用户</i-menuItem>
                    </MenuGroup>
                </Submenu>
            </i-menu>
        </i-col>

    </Row>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme2">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
    </RadioGroup>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      theme2: 'light'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
