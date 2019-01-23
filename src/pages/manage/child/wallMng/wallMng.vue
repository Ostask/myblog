<template>
  <div class="practivce-type">
    <el-form style="margin-top:10px;" :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="勋章名称">
        <el-input style="width:150px;" placeholder="分类名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">新增</el-button>
      </el-form-item>

    </el-form>
    <div class="table-head-place">
      <table>
        <thead>
        <tr>
          <td class="flex">勋章名称</td>
          <td class="flex">勋章图标</td>
          <td class="flex">前台是否显示</td>
          <td class="flex">是否点亮</td>
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
              <el-input @keyup.enter.native="handChangeName(scope)" @blur="handChangeName(scope)" v-if="scope.row.bj" v-model="scope.row.name" style="width:150px;"></el-input>
              <span v-else>{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-upload v-if="scope.row.imgupload"
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess">
                <img v-if="scope.row.imgUrl" :src="scope.row.imgUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <img v-else :src="scope.row.imgUrl" class="avatar">
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.show"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.show"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column width="250">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleUpdate(scope)"
              >编辑</el-button>
              <el-button
                size="mini"
                v-show="!scope.row.imgupload"
                @click="handleImg(scope,true)"
              >修改图片</el-button>
              <el-button
                size="mini"
                v-show="scope.row.imgupload"
                @click="handleImg(scope,false)"
              >取消修改</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
  export default {
    name:'practivceType',
    data() {
      return {
        value:'',
        value2:true,
        valuetime:'',
        formInline: {
          user: '',
          region: ''
        },
        curScope:'',
        tableData: [
          {name:'分类1',num:12,show:false,bj:false,imgupload:false,imgUrl:'static/images/wall_h5.jpg'},
          {name:'分类2',num:12,show:false,bj:false,imgupload:false,imgUrl:'static/images/wall_h5.jpg'},
          {name:'分类3',num:12,show:true,bj:false,imgupload:false,imgUrl:'static/images/wall_h5.jpg'},
          {name:'分类4',num:12,show:false,bj:false,imgupload:false,imgUrl:'static/images/wall_h5.jpg'},
          {name:'分类5',num:12,show:false,bj:false,imgupload:false,imgUrl:'static/images/wall_h5.jpg'}
        ]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleDelete(item){
        console.log(item);
      },
      handleUpdate(item) {
          item.row.bj = true;
      },
      handChangeName(item) {
          item.row.bj = false;
      },
      handleAvatarSuccess(res, file) {
        this.curScope.imgUrl = URL.createObjectURL(file.raw);
        this.curScope.imgupload = false;
      },
      handleImg(item,state) {
        item.row.imgupload = state;
        this.curScope = item.row;
      }
    }
  }
</script>
<style lang="stylus" scoped="">
  @import '~@/assets/style/colorSet.styl'
  .practivce-type{
    position :absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background :#fff;
    padding:0 10px;
    .table-head-place{
      position:absolute;
      top:50px;
      left:10px;
      right:10px;
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
      left:10px;
      right:10px;
      bottom:10px;
      overflow :hidden;
      >>>.avatar-uploader .el-upload {
           border: 1px dashed #d9d9d9;
           border-radius: 6px;
           cursor: pointer;
           position: relative;
           overflow: hidden;
           display :inline-block;
         }
      >>>.avatar-uploader .el-upload:hover {
           border-color: #409EFF;
         }
      >>>.avatar-uploader-icon {
           font-size: 28px;
           color: #8c939d;
           width: 46px;
           height: 62px;
           line-height: 62px;
           text-align: center;
         }
      >>>.avatar {
           width: 46px;
           height: 62px;
           display: inline-block;
         }
    }
  }
</style>
