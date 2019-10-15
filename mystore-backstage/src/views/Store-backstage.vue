<template>
  <div>
    <div class="container">
      <h2>Store</h2>

      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="首页轮播图设置" name="1" class="testhead">
          <el-form ref="form" :model="formlbt" label-width="80px">
            <el-form-item label="轮播图数量">
              <el-input v-model.number="formlbt.number" style="max-width:200px"></el-input>
            </el-form-item>
            <div v-for="(item,index) in formlbt.lunbotu" :key="item">
              <h5>轮播图{{index+1}}</h5>
              <el-form-item label="图片">
                <el-input v-model="item.pic" style="max-width:200px"></el-input>
              </el-form-item>
              <el-form-item label="商品编号">
                <el-input v-model="item.goodsid" style="max-width:200px"></el-input>
              </el-form-item>
            </div>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formlbt: {
        number: 5,
        lunbotu: [
          { pic: "1", goodsid: "1" },
          { pic: "1", goodsid: "1" },
          { pic: "1", goodsid: "1" },
          { pic: "1", goodsid: "1" },
          { pic: "1", goodsid: "1" }
        ]
      }
    };
  }
};
</script>
<style lang="scss" >
.el-collapse-item__header {
  font-size: 20px;
  font-weight: 700;
}
</style>