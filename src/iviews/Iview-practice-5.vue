<template>
<div class="layout">
    <!-- <Layout>
        <i-header>i-header</i-header>
        <i-content>i-content</i-content>
        <i-footer>i-footer</i-footer>
    </Layout> -->

    <Layout>
        <Header>i-header</Header>
        <Layout>
            <Sider hide-trigger>Sider</Sider>
            <Content>i-content</Content>
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
    </Layout> -->

    <!-- <Layout>
        <Sider hide-trigger>Sider</Sider>
        <Layout>
            <i-header>i-header</i-header>
            <i-content>i-content</i-content>
            <i-footer>i-footer</i-footer>
        </Layout>
    </Layout> -->
</div>
</template>
<script>
export default {
  name: 'IviewTest5'
}
</script>
