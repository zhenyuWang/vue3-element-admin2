<template>
  <div>
    <Editor
      v-model="content"
      :disabled="disabled"
      :api-key="apiKey"
      :init="initConfig"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import Editor from "@tinymce/tinymce-vue";
export default defineComponent({
  name: "",
  components: { Editor },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["updateContent"],
  setup(prop, context) {
    const apiKey = "fmpe10wgtn5cy4tq0quwhxd21a2mb6z7pwuf0zsut09xk039"; //key值从官网注册申请来的 复制的网上的
    const content = ref("");
    // tinymce 初始化配置
    const initConfig = {
      language_url: "/tinymce/zh_CN.js", //语言包
      language: "zh_CN",
      height: 300, // 高度
      browser_spellcheck: true, // 拼写检查
      branding: false, // 去水印
      elementpath: true, //禁用编辑器底部的状态栏
      statusbar: true, // 隐藏编辑器底部的状态栏
      paste_data_images: true, // 是否允许粘贴图像
      menubar: true, // 隐藏最上方menu
      fontsize_formats: "14px 16px 18px 20px 24px 26px 28px 30px 32px 36px", //字体大小
      font_formats:
        "微软雅黑=Microsoft YaHei,Helvetica Neue;PingFang SC;sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun;serifsans-serif;Terminal=terminal;monaco;Times New Roman=times new roman;times", //字体
      file_picker_types: "image",
      images_upload_credentials: true,
      // 插件
      plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table paste code help wordcount",
      ],
      // 工具栏
      toolbar:
        "fontselect fontsizeselect link lineheight forecolor backcolor bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | image quicklink h2 h3 blockquote table numlist bullist preview fullscreen",
      // 图片上传三个参数，图片数据，成功时的回调函数，失败时的回调函数
      images_upload_handler: function (
        blobInfo: any,
        success: any
        // failure: any
      ) {
        // 本地实现上传
        const img = "data:image/jpeg;base64," + blobInfo.base64();
        success(img);
        // let formdata = new FormData();
        // formdata.append("file", blobInfo.blob());
        // // 上传图片接口，跟后端同事协调上传图片
        // // http://hh.xxxx.cn/admin/upload为上传图片接口
        // axios
        //   .post("http://hh.xxxx.cn/admin/upload", formdata)
        //   .then(function (res) {
        //     success(res.data.data.src);
        //   })
        //   .catch((res) => {
        //     failure("error");
        //   });
      },
    };
    watch(content, (newVal) => {
      context.emit("updateContent", newVal);
    });
    return { content, apiKey, initConfig };
  },
});
</script>
