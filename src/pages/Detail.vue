<template>
  <div class="detail-page">
    <a-breadcrumb>
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>System</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="detail-header">
      
      <h1><img :src="item.logo" />{{ item.name }}</h1>

      <a-input-search
        placeholder="input search text"
        style="width: 300px"
        @search="onSearch"
      />
    </div>
    <p>{{ item.desc }}</p>
    <a-table class="detail-table" :columns="columns" :data-source="item.files">
      <span slot="action">
        <a>Download</a>
        <a-divider type="vertical" />
        <a>Change Log</a>
      </span>
    </a-table>
  </div>
</template>

<script>
import item from "../detail-data";

export default {
  name: "Detail",
  data() {
    return {
      item,
      columns: [
        {
          title: "Title",
          dataIndex: "title",
          key: "title",
        },
        {
          title: "Filename",
          dataIndex: "filename",
          key: "filename",
        },
        {
          title: "Release",
          dataIndex: "release",
          key: "release",
        },
        {
          title: "Action",
          key: "action",
          scopedSlots: { customRender: "action" },
        },
      ],
    };
  },
  // created() {
  //   this.name = this.$route.params.name;
  // },
};
</script>

<style>
.detail-page {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
}
.detail-header {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.detail-header h1{
  display: flex;
  align-items: center;
}
.detail-header img {
  height: 40px;
  margin-right: 16px;
}
.detail-header h1 {
  font-size: 40px;
}
.detail-table {
  margin-top: 20px;
}
</style>
