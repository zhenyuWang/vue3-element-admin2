<template>
  <textarea :id="id" v-model="content"></textarea>
</template>

<script setup lang="ts">
import { defineProps, onMounted, onUnmounted } from "vue";
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});
// tinymce 初始化配置
onMounted(() => {
  (window as any).tinymce.init({
    selector: `#${props.id}`,
    readonly: props.readonly,
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
      "advlist autolink lists link image charmap print anchor",
      "searchreplace  code",
      "insertdatetime media table paste code help wordcount",
    ],
    // 工具栏
    toolbar:
      "fontselect fontsizeselect link lineheight forecolor backcolor bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | image quicklink h2 h3 blockquote table numlist bullist",
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
  });
});
// 组件卸载时清除当前实例，不然再次进入页面会无法实例化
onUnmounted(() => {
  const instance = (window as any).tinymce.get(`${props.id}`);
  if (instance) instance.remove();
});
</script>
