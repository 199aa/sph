<template>
  <!-- <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
        <li class="prev" :class="pageNo==1? 'disabled':''">
          <a @click="prevPage">上一页</a>
        </li>
        <li class="active" @click="emitPag($event)">
          <a>1</a>
        </li>
        <li @click="emitPag($event)">
          <a>2</a>
        </li>
        <li class="dotted" v-if="false"><span>...</span></li>

        <li @click="emitPag($event)">
          <a>3</a>
        </li>
        <li @click="emitPag($event)">
          <a>4</a>
        </li>
        <li @click="emitPag($event)">
          <a>5</a>
        </li>

        <li class="dotted"><span>...</span></li>
        <li class="next" @click="nextPage">
          <a>下一页</a>
        </li>
        <div><span>共{{pageSize}}页&nbsp;</span></div>
      </ul>

    </div>
  </div> -->
  <el-pagination background layout="prev, pager, next" ref="page" :currentPage="pageNo" @next-click="nextPage" @prev-click="prevPage" @current-change="emitPag" :total="100">
  </el-pagination>
</template>

<script>
export default {
  name: 'Pagination',

  methods: {
    emitPag() {
      this.$bus.$emit('emitPage', this.$refs.page.$data.internalCurrentPage)
      console.log(this.$refs.page.$data.internalCurrentPage)
    },
    prevPage() {
      this.$bus.$emit('emitPrev', this.pageNo - 1)
      // console.log(this.pageNo)
    },
    nextPage() {
      // let js = JSON.parse(this.pageNo)
      this.$bus.$emit('emitNext', this.pageNo + 1)
      // console.log(this.pageNo)
    }
  },
  props: ['pageSize', 'pageNo']
}
</script>

<style lang="less" scoped>
.el-pagination {
  text-align: center;
}
// .page {
//   width: auto;
//   height: 66px;
//   overflow: hidden;
//   // float: right;
//   margin-left: 250px;
//   // text-align: center;

//   .sui-pagination {
//     margin: 18px 0;

//     ul {
//       margin-left: 0;
//       margin-bottom: 0;
//       vertical-align: middle;
//       width: auto;
//       float: left;

//       li {
//         line-height: 18px;
//         display: inline-block;

//         a {
//           position: relative;
//           float: left;
//           line-height: 18px;
//           text-decoration: none;
//           background-color: #fff;
//           border: 1px solid #e0e9ee;
//           margin-left: -1px;
//           font-size: 14px;
//           padding: 9px 18px;
//           color: #333;
//         }

//         &.active {
//           a {
//             background-color: #fff;
//             color: #e1251b;
//             border-color: #fff;
//             cursor: default;
//           }
//         }

//         &.prev {
//           a {
//             background-color: #fafafa;
//           }
//         }

//         &.disabled {
//           a {
//             color: #999;
//             cursor: default;
//           }
//         }

//         &.dotted {
//           span {
//             margin-left: -1px;
//             position: relative;
//             float: left;
//             line-height: 18px;
//             text-decoration: none;
//             background-color: #fff;
//             font-size: 14px;
//             border: 0;
//             padding: 9px 18px;
//             color: #333;
//           }
//         }

//         &.next {
//           // margin-left: 450px;
//           a {
//             background-color: #fafafa;
//           }
//           // float: right;
//           // margin-right: -35px;
//           // margin-top: -40px;
//         }
//       }
//     }

//     div {
//       color: #333;
//       font-size: 14px;
//       float: right;
//       width: 241px;
//       span {
//         line-height: 40px;
//       }
//     }
//   }
// }
</style>