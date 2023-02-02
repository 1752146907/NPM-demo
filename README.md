# 组件上传使用demo

### 打包说明 
```
在项目的package.json文件中新增一行命令:
“package”: “vue-cli-service build --target lib ./src/package/index.js --name lrz-ui --dest lrz-ui”

– – target lib 指定打包的目录
– – name 打包后的文件名字
– – dest 打包后的文件夹的名称

npm login
npm publish   
```
### 进入打包后的文件初始化一个pachage.json
```
npm init -y
```
# 使用

### 使用说明 
```
安装：npm i ***
注册：main.js引用注册
    import *** from "***"; 
    Vue.use(***);
```
```
    直接在需要的页面使用组件，如：
    <m-card
    imgSrc="1.jpg"
    summary="很多设计师喜欢用英文，因为中文排版真的不太容易搞。中文字符多、不同字符的笔画差异也很大，使用英文时高大上的设计稿，替换成中文以后，可能会大打折扣。"
  />
```