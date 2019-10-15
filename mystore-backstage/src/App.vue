<template>
  <div style="white-space:nowrap">
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="12">
            <!-- <h5>默认颜色</h5> -->
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <a href="#/">
                <el-menu-item index="1" href>
                  <i class="el-icon-menu"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
              </a>

              <a href="#/store">
                <el-menu-item index="2" href>
                  <i class="el-icon-menu"></i>
                  <span slot="title">商城首页</span>
                </el-menu-item>
              </a>

              <a href="#/account">
                <el-menu-item index="3" href>
                  <i class="el-icon-document"></i>
                  <span slot="title">账号管理</span>
                </el-menu-item>
              </a>

              <a href="#/goods">
                <el-menu-item index="4" href>
                  <i class="el-icon-setting"></i>
                  <span slot="title">商品管理</span>
                </el-menu-item>
              </a>

              <a href="#/account-detail">
                <el-menu-item index="5" href>
                  <i class="el-icon-setting"></i>
                  <span slot="title">用户信息</span>
                </el-menu-item>
              </a>

              <a href="#/element">
                <el-menu-item index="6" href>
                  <i class="el-icon-setting"></i>
                  <span slot="title">Element UI</span>
                </el-menu-item>
              </a>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
</style>
