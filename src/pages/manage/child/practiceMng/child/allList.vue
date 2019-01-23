<template>
  <div class="alllist">
    <el-form style="margin-top:10px;" :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="发布时间">
        <el-date-picker style="width:250px;"
          v-model="valuetime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="标题">
        <el-input style="width:150px;" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item label="页面分类">
        <el-select style="width:150px;" v-model="value" placeholder="请选择">
          <el-option value="">全部</el-option>
          <el-option value="原创">原创</el-option>
          <el-option value="转载">转载</el-option>
          <el-option value="翻译">翻译</el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>

    </el-form>
    <div class="table-head-place">
        <table>
          <thead>
            <tr>
              <td class="flex">发布日期</td>
              <td class="flex">页面标题</td>
              <td class="flex">分类</td>
              <td class="flex">状态</td>
              <td class="flex">点击量</td>
              <td class="sm">设为私密</td>
              <td class="cz">操作</td>
            </tr>
          </thead>
        </table>
    </div>
    <div class="table-body-place">
      <el-scrollbar class="page-content-scroll">
        <el-table
          :show-header="false"
          :data="tableData"
          border
          stripe
          style="width: 100%">
          <el-table-column>
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">发布日期</span>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              原创
              <span style="margin-left: 10px">文章标题</span>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span style="margin-left: 10px">文章分类</span>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span style="margin-left: 10px">已发布</span>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span style="margin-left: 10px">点击量</span>
            </template>
          </el-table-column>
          <el-table-column width="100">
            <template slot-scope="scope">
              <el-switch
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column width="250">
            <template slot-scope="scope">
              <el-button
                size="mini"
              >查看</el-button>
              <el-button
                size="mini"
              >编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-scrollbar>
    </div>
    <div class="table-page-place">
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    name:'allList',
    data() {
      return {
        value:'',
        value2:true,
        valuetime:'',
        formInline: {
          user: '',
          region: ''
        },
        tableData: [1,2,3,4,5,6,7,8,9,10]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleDelete(item){
          console.log(item);
      }
    }
  }
</script>
<style lang="stylus" scoped="">
  @import '~@/assets/style/colorSet.styl'
  .alllist{
    position :absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    .table-head-place{
      position:absolute;
      top:50px;
      left:0;
      right:0;
      height:50px;
      table{
        width:100%;
        tr{
          display :flex;
          td{
            text-indent:15px;
            height:48px;
            line-height:48px;
            &.flex{
              flex:1;
            }
            &.cz{
              width:250px;
            }
            &.sm{
              width:100px;
            }
          }
        }
      }
    }
    .table-body-place{
      position :absolute;
      top:100px;
      left:0;
      right:0;
      bottom:50px;
      overflow :hidden;
    }
    .table-page-place{
      position :absolute;
      left:0;
      right:0;
      bottom:0px;
      height:30px;
      text-align:center;
    }
  }
</style>
