<template>
  <div class="layout">
    <!-- <Layout>
        <i-header>i-header</i-header>
        <i-content>i-content</i-content>
        <i-footer>i-footer</i-footer>
    </Layout>-->

    <Layout>
      <Header>i-header</Header>
      <Layout>
        <Sider hide-trigger>
          <Row>
            <Col span="8">
              <Menu :theme="theme2">
                <Submenu name="1">
                  <template slot="title">
                    <Icon type="ios-paper" />内容管理
                  </template>
                  <MenuItem name="1-1" to="/table">用户列表</MenuItem>
                  <MenuItem name="1-2">评论管理</MenuItem>
                  <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                  <template slot="title">
                    <Icon type="ios-people" />用户管理
                  </template>
                  <MenuItem name="2-1">新增用户</MenuItem>
                  <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                  <template slot="title">
                    <Icon type="ios-stats" />统计分析
                  </template>
                  <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                  </MenuGroup>
                  <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                  </MenuGroup>
                </Submenu>
              </Menu>
            </Col>
          </Row>
        </Sider>
        <Content>
          <router-view></router-view>
        </Content>
      </Layout>
      <Footer>i-footer</Footer>
    </Layout>

    <!-- <Layout>
        <i-header>i-header</i-header>
        <Layout>
            <i-content>i-content</i-content>
            <Sider hide-trigger>Sider</Sider>
        </Layout>
        <i-footer>i-footer</i-footer>
    </Layout>-->

    <!-- <Layout>
        <Sider hide-trigger>Sider</Sider>
        <Layout>
            <i-header>i-header</i-header>
            <i-content>i-content</i-content>
            <i-footer>i-footer</i-footer>
        </Layout>
    </Layout>-->
  </div>
</template>
<script>
export default {
  name: 'IviewTest5'
}
</script>
