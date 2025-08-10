# Layout 布局

用于页面整体布局的容器组件。

## 常见布局

使用 `direction="vertical"` 来创建上下结构的布局。

::: preview
<div class="common-layout-demo">
  <layout direction="vertical">
    <header>Header</header>
    <m-content>content</m-content>
    <footer>Footer</footer>
  </layout>
</div>
:::

## 包含侧边栏的布局

通过嵌套 Layout 组件来构建复杂布局。

::: preview
<div class="common-layout-demo">
  <layout direction="vertical">
    <header>Header</header>
    <layout>
      <sider>Sider</sider>
      <m-content>content</m-content>
    </layout>
  </layout>
</div>
:::

## 更复杂的布局

::: preview
<div class="common-layout-demo">
  <layout>
    <sider>Sider</sider>
    <layout direction="vertical">
      <header>Header</header>
      <m-content>content</m-content>
      <footer>Footer</footer>
    </layout>
  </layout>
</div>
:::

<style>
.common-layout-demo .header,
.common-layout-demo .footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.common-layout-demo .sider {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.common-layout-demo .m-content {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>