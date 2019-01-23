<template>
  <div class="publish">
    <el-scrollbar class="page-content-scroll">
      <div class="article-place">

        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="文章标题">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="上传封面">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-form>

        <quill-editor v-model="content"
                      ref="myQuillEditor"
                      :options="editorOption"
                      @change="onEditorChange($event)">
        </quill-editor>

        <div class="tag-place">
          <label class="el-form-item__label" style="width: 80px;line-height:30px;">文章标签</label>
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
        </div>

        <el-form style="margin-top:10px;" :inline="true" label-width="80px" class="demo-form-inline">
          <el-form-item label="文章类型">
            <el-select style="width:150px;" v-model="value" placeholder="请选择">
              <el-option value="">全部</el-option>
              <el-option value="原创">原创</el-option>
              <el-option value="转载">转载</el-option>
              <el-option value="翻译">翻译</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="文章分类">
            <el-select style="width:150px;" v-model="value" placeholder="请选择">
              <el-option value="">全部</el-option>
              <el-option value="原创">原创</el-option>
              <el-option value="转载">转载</el-option>
              <el-option value="翻译">翻译</el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input
              v-if="addType"
              v-model="newType"
              ref="saveType"
              @keyup.enter.native="handleaddConfirm"
              @blur="handleaddConfirm"
            >
            </el-input>
            <el-button v-else @click="showaddType">添加新分类</el-button>
          </el-form-item>

        </el-form>

        <el-form label-width="80px">
          <el-form-item label="设为私密">
            <el-switch
              v-model="value2"
              active-text="是"
              inactive-text="否"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
        </el-form>

        <el-row style="text-align: center">
          <el-button type="success" plain>发博客</el-button>
          <el-button type="primary" plain>存草稿</el-button>
          <el-button type="info" @click="back" plain>返回</el-button>
        </el-row>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
  // require styles
  import { quillEditor } from 'vue-quill-editor'
  export default {
    name:'articlePublish',
    components: {
      quillEditor
    },
    data () {
      return {
        content: '',
        imageUrl: '',
        editorOption: {

        },
        form : {
            name :''
        },
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
        newType: '',
        addType:false,
        value:'',
        value2:false
      }
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.saveType.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },

      showaddType() {
        this.addType = true;
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleaddConfirm() {
        let inputValue = this.newType;
        if (inputValue) {

        }
        this.addType = false;
        this.newType = '';
      },

      back() {
        this.$router.push({ path: '/manage' });
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      console.log('this is current quill instance object', this.editor)
    }
  }
</script>
<style lang="stylus" scoped="">
  .publish{
    top:0;
    left:0;
    right:0;
    bottom:0;
    position:absolute;
    background :#fff;
    .article-place{
      padding:10px;
      >>>.ql-container {
        height: 450px;
      }
      >>>.avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      >>>.avatar-uploader .el-upload:hover {
        border-color: #409EFF;
      }
      >>>.avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      >>>.avatar {
        min-width: 178px;
        min-height: 178px;
        display: block;
      }
      .tag-place {
        margin-top:10px;
        .el-tag + .el-tag {
          margin-left: 10px;
        }
        .button-new-tag {
          margin-left: 10px;
          height: 32px;
          line-height: 30px;
          padding-top: 0;
          padding-bottom: 0;
        }
        .input-new-tag {
          width: 90px;
          margin-left: 10px;
          vertical-align: bottom;
        }
      }
      >>>.el-form-item{
           margin-bottom:10px;
         }
    }
  }
</style>
