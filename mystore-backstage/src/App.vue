<template>
  <div style="white-space:nowrap">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                :default-active="this.$route.path"
                router
                mode="horizontal"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item
                  v-for="(item,i) in navList"
                  :key="i"
                  :index="item.name"
                  style="min-width:180px"
                >
                  <i class="el-icon-menu"></i>
                  {{ item.navItem }}
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        { name: "/", navItem: "首页" },
        { name: "/store", navItem: "商城首页" },
        { name: "/account", navItem: "账号管理" },
        { name: "/goods", navItem: "商品管理" },
        { name: "/account-detail", navItem: "用户信息" },
        { name: "/element", navItem: "Element UI" }
      ]
    };
  },
  created() {
    console.log(this);
  }
};
</script>
<style lang="scss" scoped>
</style>
