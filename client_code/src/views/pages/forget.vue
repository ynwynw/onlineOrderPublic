<template>
  <div>
    <div class="forget_view">
      <div class="outTitle_view">
        <div class="outTilte">{{ projectName }}注册</div>
      </div>
      <el-form :model="forgetForm" class="forget_box">
        <div class="tab_line">
          <div class="line"></div>
          <div class="num_line">
            <div
              class="line_number"
              :class="
                (pageType == 1 ? 'line_number1' : '',
                pageType > 1 ? 'line_number2' : '')
              "
            >
              <div class="number" v-if="pageType < 2">1</div>
              <el-icon v-else><Check /></el-icon>
            </div>
            <div
              class="line_number"
              :class="
                (pageType == 2 ? 'line_number1' : '',
                pageType > 2 ? 'line_number2' : '')
              "
            >
              <div class="number" v-if="pageType < 3">2</div>
              <el-icon v-else><Check /></el-icon>
            </div>
            <div
              class="line_number"
              :class="pageType == 3 ? 'line_number1' : ''"
            >
              <div class="number">3</div>
            </div>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { ref, getCurrentInstance, nextTick } from 'vue'
const context = getCurrentInstance()?.appContext.config.globalProperties
const pageType = ref(1)
const forgetForm = ref({})
const userForm = ref({})
//返回登录
const close = () => {
  context?.$router.push({
    path: '/login',
  })
}
</script>

<style lang="scss" scoped>
.forget_view {
  background-repeat: no-repeat;
  flex-direction: column;
  background: url(http://localhost:8080/onlineOrder/file/bef054677d69402bbf0523a6dcc3be42.jpg);
  display: flex;
  font-size: 100% 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  background-position: center center;
  // 标题盒子
  .outTitle_view {
    border-radius: 20px 20px 0 0;
    padding: 0px;
    margin: 20px 0 0;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    width: 540px;
    border-color: #b4d2ae;
    border-width: 0;
    justify-content: center;
    border-style: groove;
    height: 54px;
    .outTilte {
      border: 0px solid #fff;
      border-radius: 0px;
      padding: 0px 20px;
      color: #333;
      font-size: 20px;
      line-height: 78px;
    }
  }
  // 表单盒子
  .forget_box {
    padding: 40px 80px 30px 40px;
    margin: 0;
    display: block;
    border-color: #b4d2ae;
    flex-wrap: wrap;
    border-radius: 30px;
    box-shadow: 0px 26px 26px -30px #999;
    background: rgba(255, 255, 255, 0.9);
    width: 670px;
    justify-content: center;
    border-width: 0;
    align-items: flex-start;
    border-style: groove;
    // tab
    // 盒子
    .tab_line {
      padding: 30px 0;
      margin: 0 auto;
      flex-direction: column;
      display: flex;
      width: 80%;
      align-items: center;
      // 中间线
      .line {
        background: #ccc;
        width: 80%;
        height: 2px;
      }
      // item盒子
      .num_line {
        margin: -20px 0 0;
        display: flex;
        width: 80%;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        // 默认样式
        .line_number {
          border: 2px solid #ddd;
          border-radius: 50%;
          color: #aaa;
          background: #fff;
          display: flex;
          width: 40px;
          font-size: 18px;
          justify-content: center;
          align-items: center;
          height: 40px;
        }
        // 选中样式
        .line_number1 {
          color: #9fc33d;
          font-size: 22px;
          border-color: #9fc33d;
        }
        // 完成样式
        .line_number2 {
          color: #fb9203;
          border-color: #fb9203;
        }
      }
    }
    // item
    .list_item {
      margin: 10px auto 30px;
      display: flex;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      // label
      .item_label {
        width: 120px;
        font-size: 14px;
        box-sizing: border-box;
        text-align: right;
      }
      // 输入框
      :deep(.list_inp) {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 0 10px;
        width: calc(100% - 120px);
        line-height: 40px;
        box-sizing: border-box;
        height: 40px;
        //去掉默认样式
        .el-input__wrapper {
          border: none;
          box-shadow: none;
          background: none;
          border-radius: 0;
          height: 100%;
          padding: 0;
        }
        .is-focus {
          box-shadow: none !important;
        }
      }
      //下拉框样式
      :deep(.list_sel) {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 0 10px;
        background: #fff;
        width: calc(100% - 120px);
        line-height: 40px;
        box-sizing: border-box;
        //去掉默认样式
        .select-trigger {
          height: 100%;
          .el-input {
            height: 100%;
            .el-input__wrapper {
              border: none;
              box-shadow: none;
              background: none;
              border-radius: 0;
              height: 100%;
              padding: 0;
            }
            .is-focus {
              box-shadow: none !important;
            }
          }
        }
      }
    }
    // 按钮盒子
    .list_btn {
      margin: 30px 0 0;
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      // 获取密保
      :deep(.el-button--success) {
        border: 0;
        cursor: pointer;
        border-radius: 20px;
        padding: 0 30px;
        box-shadow: inset 0px 0px 26px 0px #9fc33d;
        margin: 0 auto;
        color: #333;
        background: #fff;
        width: 150px;
        font-size: 16px;
        height: 36px;
      }
      // 获取密保悬浮
      :deep(.el-button--success:hover) {
        opacity: 0.8;
      }
      // 确认密保
      :deep(.el-button--primary) {
        border: 0;
        cursor: pointer;
        border-radius: 20px;
        padding: 0 30px;
        box-shadow: inset 0px 0px 26px 0px #9fc33d;
        margin: 0 auto;
        color: #333;
        background: #fff;
        width: 150px;
        font-size: 16px;
        height: 36px;
      }
      // 确认密保悬浮
      :deep(.el-button--primary:hover) {
      }
      // 重置密码
      :deep(.el-button--warning) {
        border: 0;
        cursor: pointer;
        border-radius: 20px;
        padding: 0 30px;
        box-shadow: inset 0px 0px 26px 0px #9fc33d;
        margin: 0 auto;
        color: #333;
        background: #fff;
        width: 150px;
        font-size: 16px;
        height: 36px;
      }
      // 重置密码悬浮
      :deep(.el-button--warning:hover) {
      }
      .r-login {
        cursor: pointer;
        padding: 0;
        margin: 20px 0 0 120px;
        color: #666;
        width: calc(100% - 120px);
        font-size: 14px;
        text-align: right;
      }
    }
  }
}
</style>
