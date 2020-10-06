<template>
  <div>
    <div class="index-tab">
      <a-space>
        <a-button
          v-for="(tab, i) in tabs"
          :key="i"
          :type="isTabCheck(tab)"
          @click="changeTab(tab)"
        >
          {{ tab.text }}
        </a-button>
      </a-space>
    </div>
    <a-row :gutter="[16, 20]" type="flex" justify="start" class="items">
      <a-col
        :span="6"
        v-for="(item, i) in items"
        v-show="checkShow(item)"
        :key="i"
      >
        <a-card class="item" @click="goToDetail(item)">
          <div class="item-header">
            <img :src="item.logo" />
            <h4 class="item-title">{{ item.name }}</h4>
          </div>
          <div class="item-enable">Enable</div>
          <p class="item-content">Updated at: {{ item.updatedAt }}</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import items from "../data";
export default {
  name: "Index",
  data() {
    return {
      items,
      tabType: "all",
      tabs: [
        {
          text: "All",
          type: "all",
        },
        {
          text: "System",
          type: "system",
        },
        {
          text: "App",
          type: "app",
        },
        {
          text: "Language",
          type: "language",
        },
      ],
    };
  },
  methods: {
    isTabCheck(tab) {
      return tab.type === this.tabType ? "primary" : "default";
    },
    changeTab(tab) {
      this.tabType = tab.type;
      console.log(this.tabType);
    },
    checkShow(item) {
      return this.tabType === "all" || this.tabType === item.type;
    },
    goToDetail(item) {
      this.$router.push({ name: "detail", params: { name: item.name } });
    },
  },
};
</script>

<style>
.main-title {
  text-align: left;
}
.index-tab {
  text-align: left;
}
.items {
  padding-top: 20px;
}
.item:hover {
  border-color: #40a9ff;
  cursor: pointer;
}
.item-header {
  display: flex;
  align-items: baseline;
}
.item-header img {
  height: 28px;
}
.item-title {
  font-size: 28px;
  margin-left: 10px;
}
.item-enable {
  text-align: left;
  position: relative;
  padding-left: 20px;
}
.item-enable::before {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  background: greenyellow;
  border-radius: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.item-content {
  text-align: left;
}
</style>
