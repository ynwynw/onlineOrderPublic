<template>
  <div>
    <div class="home_box">
      <!-- 菜品信息推荐 -->
      <div class="recomList_view">
        <div class="recomList_title">菜品信息推荐</div>
        <div class="recommend_list_one">
          <div
            class="recommend_item animation_box"
            v-for="(item, index) in caipinxinxiRecomList"
            :key="index"
            @click="detailClick('caipinxinxi', item.id)"
          >
            <div class="recommend_img_box">
              <img
                class="recommend_img"
                v-if="isHttp(item.caipintupian)"
                :src="item.caipintupian.split(',')[0]"
                alt=""
              />
              <img
                class="recommend_img"
                v-else
                :src="
                  item.caipintupian
                    ? $config.url + item.caipintupian.split(',')[0]
                    : ''
                "
                alt=""
              />
            </div>
            <div class="recommend_content">
              <div class="recommend_title">
                {{ item.caipinmingcheng }}
              </div>
              <div class="recommend_price">￥{{ item.price }}</div>
              <div class="recommend_one_bottom">
                <div class="recommend_like" v-if="item.thumbsupnum">
                  <span class="iconfont icon-thumb-up-line1 like_icon"></span>
                  <div class="like_num">{{ item.thumbsupnum }}</div>
                </div>
                <div class="recommend_collect" v-if="item.storeupnum">
                  <el-icon><StarFilled /></el-icon>
                  <div class="collect_num">{{ item.storeupnum }}</div>
                </div>
                <div class="recommend_clickNum" v-if="item.clicknum">
                  <el-icon><View /></el-icon>
                  <div class="clickNum_num">{{ item.clicknum }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="recommend_more_view" @click="moreClick('caipinxinxi')">
          <span class="recommend_more_text">更多</span>
          <el-icon><DArrowRight /></el-icon>
        </div>
      </div>
      <!-- 公告信息 -->
      <div class="newsList_view">
        <div class="newsList_title">公告信息</div>
        <div class="news_list_one">
          <div
            class="news_item animation_box"
            v-for="(item, index) in newsList"
            :key="index"
            @click="newsDetailClick(item.id)"
          >
            <div class="news_img_box">
              <img
                class="news_img"
                v-if="isHttp(item.picture)"
                :src="item.picture.split(',')[0]"
                alt=""
              />
              <img
                class="news_img"
                v-else
                :src="
                  item.picture ? $config.url + item.picture.split(',')[0] : ''
                "
                alt=""
              />
            </div>
            <div class="news_content">
              <div class="news_title">{{ item.title }}</div>
              <div class="news_text">{{ item.introduction }}</div>
              <div class="news_time">{{ item.addtime.split(' ')[0] }}</div>
            </div>
          </div>
        </div>
        <div class="news_more_view" @click="moreClick('news')">
          <span class="news_more_text">更多</span>
          <el-icon><DArrowRight /></el-icon>
        </div>
      </div>
    </div>
    <formModel ref="newsFormModelRef"></formModel>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
const context = getCurrentInstance()?.appContext.config.globalProperties
const router = useRouter()
//菜品信息推荐
const caipinxinxiRecomList = ref([])
const getcaipinxinxiRecomList = () => {
  let autoSortUrl = 'caipinxinxi/autoSort'
  if (context?.$toolUtil.storageGet('frontToken')) {
    autoSortUrl = 'caipinxinxi/autoSort2'
  }
  context
    ?.$http({
      url: autoSortUrl,
      method: 'get',
      params: {
        page: 1,
        limit: 8,
      },
    })
    .then((res) => {
      caipinxinxiRecomList.value = res.data.data.list
    })
}
//公告信息弹窗
import formModel from './news/formModel'
const newsFormModelRef = ref(null)
//公告信息
const newsList = ref([])
const getNewsList = () => {
  context
    ?.$http({
      url: 'news/list',
      method: 'get',
      params: {
        page: 1,
        limit: 6,
      },
    })
    .then((res) => {
      newsList.value = res.data.data.list
    })
}
const newsDetailClick = (id = null) => {
  if (id) {
    newsFormModelRef.value.init(id)
  }
}
//判断图片链接是否带http
const isHttp = (str) => {
  return str && str.substr(0, 4) == 'http'
}
//跳转详情
const detailClick = (table, id) => {
  router.push(`/index/${table}Detail?id=${id}`)
}
const moreClick = (table) => {
  router.push(`/index/${table}List`)
}
const init = () => {
  //菜品信息推荐
  getcaipinxinxiRecomList()
  //公告信息
  getNewsList()
}
init()
</script>

<style lang="scss">
.home_box {
  padding: 0 10px;
  margin: 0 auto 20px;
  background: #fff;
  display: flex;
  width: 1200px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

// 推荐
.recomList_view {
  padding: 20px calc((100% - 1200px) / 2) 0;
  margin: 0px auto 0;
  background: none;
  width: 100%;
  position: relative;
  order: 0;
  .recomList_title {
    padding: 0 0 0 20px;
    margin: 0;
    color: #fff;
    background: url(http://localhost:8080/onlineOrder/file/0bbe816716c34dfd909ce68a72979f14.jpg)
      no-repeat center top / 100% 100%;
    font-weight: 500;
    width: 100%;
    font-size: 18px;
    border-color: #666;
    border-width: 0 0 0px;
    line-height: 48px;
    border-style: solid;
    text-align: left;
  }
  // list
  .recommend_list_one {
    padding: 0;
    margin: 20px auto 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    .recommend_item {
      cursor: pointer;
      border: 1px solid #eee;
      box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
      padding: 6px;
      margin: 0 0px 20px;
      background: #fff;
      width: 23.5%;
    }
    .recommend_img_box {
      margin: 0 0 0px;
      width: 100%;
      font-size: 0;
      .recommend_img {
        object-fit: cover;
        width: 100%;
        height: 160px;
      }
    }
    .recommend_content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .recommend_title {
        padding: 0 16px;
        margin: 0 0 0px;
        color: #333;
        white-space: nowrap;
        font-weight: 500;
        font-size: 14px;
        line-height: 30px;
        text-overflow: ellipsis;
        overflow: hidden;
        background: none;
        width: 100%;
        text-align: center;
        height: 30px;
      }
      .recommend_price {
        color: #d46f6f;
        width: auto;
        font-size: 14px;
        line-height: 40px;
        text-align: right;
        order: 2;
      }
      .recommend_one_bottom {
        padding: 0 0px;
        flex: 1;
        display: flex;
        width: auto;
        justify-content: center;
        align-items: center;
        .recommend_like {
          margin: 0 10px 0 0;
          color: inherit;
          display: flex;
          font-size: 14px;
          align-items: center;
          .like_icon {
            margin: 0 4px 0 0;
            color: #0266b5;
          }
          .like_num {
            color: #999;
          }
        }
        .recommend_collect {
          margin: 0 10px 0 0;
          color: #999;
          display: flex;
          font-size: 14px;
          align-items: center;
          .el-icon {
            margin: 0 4px 0 0;
            color: #ee7810;
          }
          .collect_num {
            color: inherit;
          }
        }
        .recommend_clickNum {
          margin: 0 10px 0 0;
          color: #999;
          display: flex;
          font-size: 14px;
          align-items: center;
          .el-icon {
            margin: 0 4px 0 0;
            color: #4aac26;
          }
          .clickNum_num {
            color: inherit;
          }
        }
      }
    }
  }
  // list
  // animation
  .animation_box {
    transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
    z-index: initial;
  }
  .animation_box:hover {
    transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
    -webkit-perspective: 1000px;
    perspective: 1000px;
    transition: 0.3s;
  }
  .animation_box img {
    transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
    z-index: initial;
  }
  .animation_box img:hover {
    transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
    -webkit-perspective: 1000px;
    perspective: 1000px;
    transition: 0.3s;
  }
  // animation
  // 更多
  .recommend_more_view {
    cursor: pointer;
    border: 0px solid #ddd;
    padding: 0;
    margin: 0;
    color: #333;
    line-height: 38px;
    right: calc((100% - 1200px) / 2 + 20px);
    border-radius: 0px;
    top: 20px;
    background: none;
    width: 89px;
    position: absolute;
    text-align: right;
    height: 38px;
    .recommend_more_text {
      color: #333;
    }
    .el-icon {
      color: #333;
    }
  }
}
// 推荐
// 新闻资讯
.newsList_view {
  padding: 40px calc((100% - 1200px) / 2) 0;
  margin: 0 auto;
  background: none;
  width: calc(100% - 0px);
  border-color: #ddd;
  border-width: 0;
  position: relative;
  border-style: solid;
  order: 3;
  height: auto;

  .newsList_title {
    padding: 0 0 0 20px;
    margin: 0 auto 20px;
    color: #fff;
    background: url(http://localhost:8080/onlineOrder/file/a704ddd683e84d818407ebdb8bba1d4d.jpg)
      no-repeat center top / 100% 100%;
    font-weight: 500;
    width: 100%;
    font-size: 18px;
    border-color: #666;
    border-width: 0 0 0px;
    line-height: 48px;
    border-style: solid;
    text-align: left;
  }
  // list
  .news_list_one {
    padding: 0 0 0 20px;
    margin: 30px 0 0;
    background: none;
    display: flex;
    width: 100%;
    min-height: 280px;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    .news_item {
      cursor: pointer;
      padding: 0 0 10px;
      margin: 0 20px 20px 0;
      background: none;
      display: flex;
      width: calc(50% - 20px);
      border-color: #0c420130;
      border-width: 0px;
      align-items: center;
      border-style: dashed;
      .news_img_box {
        margin: 0 20px 0 0;
        display: none;
        width: 100px;
        height: 100px;
        .news_img {
          border: 6px solid #ebe9dd;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
      .news_content {
        margin: 0;
        flex: 1;
        display: flex;
        width: calc(100% - 120px);
        flex-wrap: wrap;
        .news_title {
          border: 1px solid #eee;
          padding: 5px;
          margin: 0 0 5px;
          color: #333;
          white-space: nowrap;
          font-weight: 600;
          font-size: 14px;
          line-height: 24px;
          text-overflow: ellipsis;
          box-shadow: 0px 3px 3px -3px #eee;
          overflow: hidden;
          background: linear-gradient(
            270deg,
            rgba(238, 238, 238, 1) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(238, 238, 238, 1) 100%
          );
          width: 100%;
          text-align: center;
          order: 2;
        }
        .news_text {
          padding: 0 10px 0 0;
          overflow: hidden;
          color: #666;
          display: block;
          font-size: 14px;
          line-height: 24px;
          height: 48px;
          order: 3;
        }
        .news_time {
          color: #999;
          font-weight: 500;
          display: block;
          width: 100%;
          line-height: 24px;
          text-align: right;
          order: 3;
        }
      }
    }
  }
  // list
  // animation
  .animation_box {
    transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
    z-index: initial;
  }
  .animation_box:hover {
    transform: rotate(0deg) scale(1) skew(0deg, 0deg)
      translate3d(10px, 0px, 0px);
    -webkit-perspective: 1000px;
    perspective: 1000px;
    transition: 0.3s;
  }
  .animation_box img {
    transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
    z-index: initial;
  }
  .animation_box img:hover {
    transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
    -webkit-perspective: 1000px;
    perspective: 1000px;
    transition: 0.3s;
  }
  // animation
  // 更多
  .news_more_view {
    cursor: pointer;
    border: 0px solid #ddd;
    padding: 0px 0;
    margin: 0;
    color: #5d8e00;
    line-height: 38px;
    right: calc((100% - 1200px) / 2 + 20px);
    border-radius: 0px;
    top: 40px;
    background: none;
    width: 89px;
    position: absolute;
    text-align: right;
    height: 38px;
    .news_more_text {
      color: #333;
    }
    .el-icon {
      color: #333;
    }
  }
}
// 新闻资讯
// 首页展示
.homeList_view {
  padding: 40px calc((100% - 1200px) / 2) 0px;
  margin: 0;
  background: none;
  width: 100%;
  position: relative;
  order: 2;

  .homeList_title {
    padding: 0 0 0 20px;
    margin: 0 0 30px;
    color: #fff;
    background: url(http://localhost:8080/onlineOrder/file/ac8ac156e95b4375a0fdb08a8e17f3a1.jpg)
      no-repeat center top / 100% 100%;
    font-weight: 500;
    width: 100%;
    font-size: 18px;
    border-color: #666;
    border-width: 0 0 0px;
    line-height: 48px;
    border-style: solid;
    text-align: left;
  }
  // list
  .home_list_one {
    padding: 0;
    margin: 20px auto;
    background: none;
    display: flex;
    width: calc(100% - 0px);
    align-items: flex-start;
    flex-wrap: wrap;
    .home_item1 {
      cursor: pointer;
      border: 0px solid #eee;
      padding: 12px 12px 4px;
      margin: 0 20px 20px 0;
      background: #fff;
      width: calc(50% - 20px);
      position: relative;
      .home_img_box {
        margin: 0 0 4px;
        width: 100%;
        .home_img {
          object-fit: cover;
          width: 100%;
          height: 220px;
        }
      }
      .home_content {
        color: #000;
        background: rgba(0, 0, 0, 0);
        width: 100%;
        line-height: 24px;
        text-align: center;
        .home_title {
          font-size: 14px;
        }
      }
    }
    .home_item2 {
      margin: 0 0 20px;
      width: 50%;
      .item2_top {
        cursor: pointer;
        border: 0px solid #eee;
        padding: 12px 12px 4px;
        margin: 0 10px 0 0;
        background: #fff;
        width: calc(50% - 10px);
        position: relative;
        float: left;
        .home_img_box {
          margin: 0 0 4px;
          width: 100%;
          .home_img {
            object-fit: cover;
            width: 100%;
            height: 220px;
          }
        }
        .home_content {
          color: #000;
          background: rgba(0, 0, 0, 0);
          width: 100%;
          line-height: 24px;
          text-align: center;
          .home_title {
            font-size: 14px;
          }
        }
      }
      .item2_bottom {
        cursor: pointer;
        border: 0px solid #eee;
        padding: 12px 12px 4px;
        margin: 0 0 0 10px;
        background: #fff;
        width: calc(50% - 10px);
        position: relative;
        float: right;
        .home_img_box {
          margin: 0 0 4px;
          width: 100%;
          .home_img {
            object-fit: cover;
            width: 100%;
            height: 220px;
          }
        }
        .home_content {
          color: #000;
          background: rgba(0, 0, 0, 0);
          width: 100%;
          line-height: 24px;
          text-align: center;
          .home_title {
            font-size: 14px;
          }
        }
      }
    }
    .home_item3 {
      cursor: pointer;
      border: 0px solid #ddd;
      padding: 12px 12px 0;
      margin: 0 0 0 20px;
      background: #fff;
      width: calc(50% - 20px);
      position: relative;
      order: 6;
      .home_img_box {
        width: 100%;
        font-size: 0;
        .home_img {
          object-fit: cover;
          width: 100%;
          height: 220px;
        }
      }
      .home_content {
        color: #000;
        background: rgba(0, 0, 0, 0);
        width: 100%;
        line-height: 30px;
        text-align: center;
        .home_title {
          font-size: 14px;
        }
      }
    }
    .home_item4 {
      margin: 0 0 0 0px;
      width: calc(50% - 0px);
      .item4_top {
        cursor: pointer;
        border: 0px solid #ddd;
        padding: 12px 12px 0;
        margin: 0 10px 0 0;
        width: calc(50% - 10px);
        position: relative;
        float: left;
        .home_img_box {
          width: 100%;
          .home_img {
            object-fit: cover;
            width: 100%;
            height: 220px;
          }
        }
        .home_content {
          color: #000;
          background: rgba(0, 0, 0, 0);
          width: 100%;
          line-height: 30px;
          text-align: center;
          .home_title {
            font-size: 14px;
          }
        }
      }
      .item4_bottom {
        cursor: pointer;
        border: 0px solid #ddd;
        padding: 12px 12px 0;
        width: calc(50% - 10px);
        position: relative;
        float: right;
        .home_img_box {
          width: 100%;
          .home_img {
            object-fit: cover;
            width: 100%;
            height: 220px;
          }
        }
        .home_content {
          color: #000;
          background: rgba(0, 0, 0, 0);
          width: 100%;
          line-height: 30px;
          text-align: center;
          .home_title {
            font-size: 14px;
          }
        }
      }
    }
  }
  // list
  // animation
  .animation_box {
    transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
    z-index: initial;
  }
  .animation_box:hover {
    transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
    -webkit-perspective: 1000px;
    perspective: 1000px;
    transition: 0.3s;
  }
  .animation_box img {
    transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
    z-index: initial;
  }
  .animation_box img:hover {
    transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
    -webkit-perspective: 1000px;
    perspective: 1000px;
    transition: 0.3s;
  }
  // animation
  // 更多
  .homeList_more_view {
    cursor: pointer;
    border: 0px solid #ddd;
    padding: 0;
    margin: 0;
    z-index: 9;
    color: #333;
    line-height: 38px;
    right: calc((100% - 1200px) / 2 + 20px);
    border-radius: 0px;
    top: 40px;
    background: none;
    width: 89px;
    position: absolute;
    text-align: right;
    height: 38px;
    .homeList_more_text {
      color: #333;
    }
    .el-icon {
      color: #333;
    }
  }
}
// 首页展示
</style>
