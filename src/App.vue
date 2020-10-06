<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="menuIndex"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="index">
          Home
        </a-menu-item>
        <a-menu-item key="upload">
          Upload
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="container">
      <div class="content">
        <router-view></router-view>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menuIndex: ["index"],
    };
  }
};
</script>

<style>
.container {
  padding: 50px;
}
.content {
  padding: "24px";
  min-height: "400px";
}
</style>
