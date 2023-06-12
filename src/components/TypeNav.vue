<template>
  <div class="type-nav">
    <div class="container" @mouseleave="leaveshow">
      <h2 class="all" @mouseenter="entershow">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="el-fade-in-linear">

        <div class="sort " v-show="show">
          <div class="all-sort-list2" @click="goSearch($event)">
            <div class="item" v-for="item in getlist" :key="item.categoryId">
              <h3>
                <a :data-categoryName="item.categoryName" :data-categoryId1="item.categoryId">{{ item.categoryName }}</a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem" v-for="items in item.categoryChild" :key="items.categoryId">
                  <dl class="fore">
                    <dt>
                      <a :data-categoryName="items.categoryName" :data-categoryId2="items.categoryId">{{ items.categoryName }}</a>
                    </dt>
                    <dd>
                      <em v-for="itemss in items.categoryChild" :key="itemss.categoryId">
                        <a :data-categoryName="itemss.categoryName" :data-categoryId3="itemss.categoryId">{{ itemss.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TypeNav',
  data() {
    return {
      show: true
    }
  },

  mounted() {
    if (this.$route.path == '/search') {
      this.show = false
    }
  },
  computed: {
    ...mapState({
      getlist: (state) => state.list
    })
  },
  methods: {
    goSearch(event) {
      let av = event.target
      let { categoryname, categoryid1, categoryid2, categoryid3 } = av.dataset
      if (categoryname) {
        let location = { name: 'search' }
        let query = { categoryName: categoryname }
        if (categoryid1) {
          query.categoryId1 = categoryid1
        } else if (categoryid2) {
          query.categoryId2 = categoryid2
        } else if (categoryid3) {
          query.categoryId3 = categoryid3
        }
        if (this.$route.params) {
          location.params = this.$route.params
          //动态给location配置对象添加query属性
          location.query = query
          //路由跳转
          this.$router.push(location)
        }
      }
    },
    entershow() {
      if (this.$route.path === '/home') {
        this.show = true
      } else {
        this.show = true
      }
    },
    leaveshow() {
      if (this.$route.path === '/home') {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3:hover {
            background-color: red;
            color: white;
          }
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
