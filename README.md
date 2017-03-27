## jQadmin后台模板v1.3.3

- 修复表单提交关闭不了窗口的BUG
- 修正菜单选项卡不能关闭BUG
- 修正菜单右键弹出菜单bug
- 修复首页的统计链接
- 添加看云使用手册



## jQadmin后台模板v1.3.2

- 修复include前多一个空格，导致apache下出错BUG

## jQadmin后台模板v1.3.1

- 修复火狐下出现水平滚动条错误


## jQadmin后台模板v1.3.0

- 初步兼容移动端
- 添加支持子页面菜单生成到主菜单
- 修正页面布局，优化菜单功能

## jQadmin后台模板v1.2.1

- 修正关闭不了菜单BUG

## jQadmin后台模板v1.2.0

- **修改目录结构，本次使用了服务端ssi功能，就是html包含文件，如何开启ssi功能，nginx的是在站点配置文件加上以下代码,其它们的请自行找度娘解决**

  ```
  location / {
              ssi on;  
              ssi_silent_errors on;  
              ssi_types text/html; 
              index  index.html index.htm index.php;
              #autoindex  on;
          }
  ```

- 修正弹出窗口宽高设置过大，超出屏幕无法关闭错误

- 添中菜单卡右键弹出菜单

- 添加菜单卡可以按下左键拖动

- 添加切换菜单卡的时候是否刷新参数，在菜单模板参数上加上isFresh:true即可在点击右左边菜单时刷新页面

- 添加表单验证出错时跳转到出错的TAB页

- 修正提正表单成功后不关闭窗口BUG

## jQadmin后台模板v1.1.1

- 修正火狐下表格无边框的BUG
- 修正打开菜单过来无滚动BUG
- ajax返回自己定义方法complete添加$参数,实际为funtion(ret, options, $)

## jQadmin后台模板v1.1.0 

- 本次更新有点大，所以直接为1.1.0，主要更新index.html页面，有BUG请加QQ群反馈，谢谢
- 更新菜单的显示样式，有三种切换模式，自己点击体验
- 更新菜单数据从服务端获取，服务端返回json数便可自动渲染，更多请看码云的文档

## jQadmin后台模板v1.0.3

- 修复非iframe模式下弹窗表单提交后返window.name错误
- 添加switch状态选中判断

## jQadmin后台模板v1.0.2

- 修复IE上的bug
- 增加异步操作时弹出确认窗口，在data-params属中配置confirm:true即可
- 修复ajax出现pending状态，拖慢渲染的错误
- 更新layui为github版本，原因为压缩版与最新版本不同步引起的一些错误

## jQadmin后台模板v1.0.1

- 修正异步提交富文本框内容为空的BUG
- 修正列表页刷新后跳回第一页的BUG
- 修正菜单TAB开关设置失效错误

## jQadmin后台模板v1.0.0

一款由[JQ酷](http://www.jqcool.net)为了省时间而打造的后台管理模板，封装了常用的JS方法，使得你可以写更少甚至不写js代码就可以完成整个后台的搭建。模板使用了layui，模块化开发，本套模板是按着本人这些年来的习惯编写，也为方便以后搭建项目的便捷而编写，当然，本人的能力是有限的，模板中难免会存在体验不好、BUG或是错误，欢迎朋友们提出，或是同为这份开源免费的模板做份贡献。

**注：请在服务器环境中执行，不要直接打开文件，否则后果自负，哈哈...**

喜欢的请到layui官方点个赞哈：http://fly.layui.com/case/2017/

#### 关于兼容性

本套模板使用了bootstrap基本样式，并容合了layui的风格，当然本人的意愿也不再想去兼容低版本的浏览器，一味的兼容也就意味着纵容，也许是时候抛掉那些坑人的浏览器的时候了，因此请使用IE9或以上的现代浏览器。

兼容IE9+ 、谷歌 、 火狐等现代浏览器

注意：本版本由于时间关系，暂没有支持移动端，当然会在下一个版本加入支持。

### 如何使用

请先了解[layui](http://www.layui.com/)的使用方法，不懂者可以到官方看文档，还是比较轻松容易上手的，哈哈哈哈哈。。。

其实不看官方文档也可以用，前提是现在的模板的功能和交互都适合你使用...好吧，我承认这是费话...哈哈

要使用的每一个自定义模块都需要在html页面定义别名，方能引入。请注意后面的代码将省略本部份代码，请根据需求自行加上。

```javascript
//引入layui框架
<script type="text/javascript" src="js/layui/layui.js"></script>

//定义js文件目录，定义别名，并调用文件（这个不熟请移动到layui官方文档）
<script>
    layui.config({
        base: 'js/' js文件的根目录
    }).extend({
        echarts: 'lib/echarts', 定义图型模块的别名，与在js根目录的位置
        ajax: 'jqmodules/ajax', 定义异步模块的别名，与在js根目录的位置
        modal: 'jqmodules/modal'定义弹窗模块的别名，与在js根目录的位置
    }).use(['main', 'echart']); 使用mian模块与图形模块
</script>
```

### 模板特点

- 模块化开发
- 封装了AJAX
- 封装了弹出窗口
- 封装了表单验证（异步验证没有，想不好到的方法，有好方法的同学请告诉下）
- 封装了列表（使用了layui的模板引擎）

### 开始使用

##### 一、异步提交

先引入ajax模块，先引入ajax模块，先引入ajax模块...（记住哈）

1、ajax单击异步

在需要绑定异步提交的元素上加上class="ajax"，再添加一个data-params属性，本属性值请严格按照格式填 写，否则出错，即用单引号‘在外面，每一个健与值用双引号“，中间用分号隔开，每一个健值对用逗号隔开，下面代码是单击删除按钮异步提交

```html
<button class="layui-btn layui-btn-mini layui-btn-danger ajax" data-params='{"url":"/php/test.php","data":"id=1&name=jqcool"}'>
     <i class="iconfont">&#xe626;</i>删除
</button>
```

参数：

| 参数       | 默认值   | 说明                                       |
| -------- | ----- | ---------------------------------------- |
| method   | post  | 提交的方法                                    |
| data     |       | 提交到服务端的数据，格式为id=1&name=jqcool            |
| dataType | json  | 服务器返回数据类型                                |
| complete |       | 服务器返回数据后调用的自定义方法（注意影响的域，建议全局）name=jqcool&complete=test |
| url      |       | 请求的服务端地址                                 |
| loading  | true  | 是否启用loading图片                            |
| confirm  | false | 是否弹出窗口确认操作（注：switch和文框不适用）               |

返回操作只作了提示或跳转的功能能，如需求复杂的操作，请自定义回调方法。返回数据为json格式，需要包含几个参数，如果自定义了回调方法，请自行设定，参数不受影响。服务端返回代码

```php
$data['status'] = 200;
$data['msg'] ="更新成功";
$data['url'] = "";
echo header("content-type:text/html; charset=utf-8");
echo json_encode($data);
```

| 参数     | 必填   | 说明                                  |
| ------ | ---- | ----------------------------------- |
| msg    | 否    | 返回的提示信息                             |
| url    | 否    | 为空或不定义时不操作，为地址时跳转到相应地址，为reload是刷新页面 |
| status | 是    | 状态，成功时为200，其它均为错误                   |



2、ajax-all单击提交选中的复选框与设定的值，一般用于全选后，提交操作

在需要绑定异步提交的元素上加上class="ajax-all"，再添加一个data-params属性，参数与上面ajax一样，但此处需要再添加一个data-name属性，该值为复选框的name值，该方法会把所有复选框为name值的值拼成字符串,如”checkbox=1,2,3",然后自动拼接到data属性提交。代码如下：

```html
<button class="layui-btn layui-btn-small layui-btn-normal ajax-all" data-name="checkbox" data-params='{"url": "/php/test.php","data":"id=1&name=hao&va=23"}'>
    <i class="layui-icon">&#x1005;</i> 审核
 </button>
 
 <input type="checkbox" name="checkbox" value="1" lay-skin="primary">
 <input type="checkbox" name="checkbox" value="2" lay-skin="primary">
 <input type="checkbox" name="checkbox" value="3" lay-skin="primary">
```

上面代码会以post的形式把参数id,name,va和checkbox传给/php/test.php



3、ajax-blur文本框失去焦点时提交操作，一般用于修改排序

在需要的文本框元素上添加class="ajax-blur",参数与ajax一样，不同的是，本方法会把文本框的name值和文本框的值拼接到data属性后，提交。当前文本框的值未发生变化是不会提交的。

```html
<input type="text" class="layui-input ajax-blur" name="order" value="{{ item.id}}" data-params='{"url":"/php/test.php","data":"id=1&name=paco"}'>
```



4、绑定switch、select提交事件，这个需要先引入form模块，然后用一个含有layui-form样式的元素包含住switch、select（为何要这么做，请参考layui官方文档），然后设置属性lay-filter="ajax"，如果元素为switch，那么on是为1，off时0，如on时传送的值为：switch=1，其中switch为switch input元素的name值，select则为选中的值。

```html
<input type="checkbox" name="switch" lay-skin="switch" lay-filter="ajax" data-params='{"url":"/php/test.php","data":"id={{ item.id}}&name=paco"}'>
```

也许细心的同学会发现{{ item.id }}，对这就是动态附值，不清楚，那请看官方文档，哈哈哈，我不会告诉你我很懒 的...



好了，ajax模块到此完结了，记得哦，全部事件的参数是一样的哦。。。所以只写了一遍。。。。



##### 二、模态窗口

模态窗口有三个方法，modal-iframe，modal-catch,modal-photo,见名识义，iframe模式窗口，catch捕获窗口（本人比较喜欢用），photo就是相册，看不明白参数的意思的话，可以参考下官方文档。

1、modal-iframe。与ajax一样，只不过是参数有些不同而已，先上个代码

```html
<button class="layui-btn layui-btn-small modal-iframe" data-params='{"content": "article-add.html", "title": "添加文章","full":"true"}'>
      <i class="iconfont">&#xe649;</i> 添加
</button>
```

在元素上添加modal-iframe,记得先引入modal械模块，再添加data-params属性。

参数：

| 参数         | 默认值   | 说明                         |
| ---------- | ----- | -------------------------- |
| title      | false | 弹出窗口的标题                    |
| full       | false | 是否全屏                       |
| shadeClose | true  | 是否点击遮罩关闭                   |
| shade      | false | 是否遮罩                       |
| content    |       | 请填写打开页面的地址URL              |
| area       | auto  | 弹出框的大小，格式：area=300px,600px |



2、modal-catch,在元素上添加class="modal-catch",设置data-params属性使用

```html
<button class="layui-btn layui-btn-mini modal-catch" data-params='{"content": ".add-subcat","area":"600px,300px","title":"编辑{{ item.title}}分类","data":"pid=2&status=0&title=123","type":"1"}'>
     <i class="iconfont">&#xe653;</i>编辑
</button>
 
<div class="add-subcat">
        <form id="form1" class="layui-form layui-form-pane" action="add-cat">
            <div class="layui-form-item">
                <label class="layui-form-label">分类名称</label>
                <div class="layui-input-block">
                    <input type="text" name="title" required jq-verify="required" jq-error="请输入分类名称" placeholder="请输入分类名称" autocomplete="off" class="layui-input ">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">排序</label>
                <div class="layui-input-inline">
                    <input type="text" name="title" required jq-verify="number" value="100" jq-error="排序必须为数字" placeholder="分类排序" autocomplete="off" class="layui-input ">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">状态</label>
                <div class="layui-input-inline">
                    <input type="radio" name="status" title="启用" value="1" checked />
                    <input type="radio" name="status" title="禁用" value="0" />
                </div>
            </div>
            <div class="layui-form-item">
                <div class="layui-input-block">
                    <button class="layui-btn" jq-submit jq-filter="submit">立即提交</button>
                    <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                </div>
            </div>
        </form>
    </div>
    
```

例子的data值，会按表单中字段的name名称赋值，单选框则根根据值选中，同理复选框根据值选中，下拉框会根据值选中，如果表单中没有该name字段的文本域，则会创建一个hidden域，如pid,在表单中没有，当单击出现窗口的时候，方法会在表单中创建一个隐藏域

```html
<input type="hidden" name="pid" value="2" />
```

参数：

| 参数         | 默认值   | 说明                         |
| ---------- | ----- | -------------------------- |
| title      | false | 弹出窗口的标题                    |
| full       | false | 是否全屏                       |
| shadeClose | true  | 是否点击遮罩关闭                   |
| shade      | false | 是否遮罩                       |
| content    |       | html或dom                   |
| area       | auto  | 弹出框的大小，格式：area=300px,600px |
| type       | 1     | 窗出层的类型                     |
| data       |       | 用于填充表单的数据                  |

3、modal-photo 在元素上添加class="modal-photo",设置data-params属性使用

```html
<div id="layer-photos-demo" class="modal-photo" data-params='{"content":"#layer-photos-demo","anim":5}'>
  <img layer-pid="图片id，可以不写" layer-src="大图地址" src="缩略图" alt="图片名">
  <img layer-pid="图片id，可以不写" layer-src="大图地址" src="缩略图" alt="图片名">
</div>
```

这里就两个参数，哈哈哈。。。忘了说了，这个没试过，不知能不能用哦。。。。



##### 三、表单验证

layui自带有一个表单验证的功能，不过本人不太喜欢那个方式，然后就借鉴并根据本人的习惯重写了，不喜勿喷，嘻嘻。注意哈，因为是基于layui的，如果需要引用form模块的话，请先引用form模块，然后再引入jqform模块，其实jqform已引入了form模块，所以是不需要再引入form模块了的。

特点

- 所有验证都可以直接写在元素上
- 表单可以自动ajax提交
- 提示信息会附在文本域后方，如文本域 的宽度小于200px，则会换行显示
- 每次验证一个字段，出错时会滚动到出错的位置

使用的步骤：

1. 先给表单定义个ID，填写表单的action值

   ```html
   <form id="form1" class="layui-form layui-form-pane" action="/php/test.php">
   ...
   </form>
   ```

2. 引入表单模块并初始化，其实可以定义一些自己的规则

   ```javascript
   layui.define(['jquery', 'jqform'], function(exports) {
       var $ = layui.jquery,  
           form = layui.jqform;
         
       form.set({
           "blur": true, //离开文本框时验证
           "form": "#form1"
       }).init();
       
        //自定义
       form.verify({
           username: function(value) {
               if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                   return '文章标题不能有特殊字符';
               }
               if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                   return '文章标题首尾不能出现下划线\'_\'';
               }
               if (/^\d+\d+\d$/.test(value)) {
                   return '文章标题不能全为数字';
               }
           },
           pass: [
               /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
           ]
       });
       
      exports('myform', {});
   });
   ```

3. 完成以上设置然后在元素上绑定规则，便可以实现验证了。注意了：每个验证都可以多个，但需要用|号隔开，同时提示信息也要用|隔开，且要与验证的方法对应，如果调用了自定义方法，那么提示信息相应位置可以留空，但|不能少。记得记得，用的是jq-verify，请与layui官方的区别开，哈哈哈。。。

   ```html
   <input type="text" name="title" required jq-verify="required|username" jq-error="请输入标题|这里可以不填" placeholder="请输入标题" autocomplete="off" class="layui-input ">
   ```

4. 有些隐藏域也需要验证，然后提示信息如何显示呢，Ok，这里可以添加一个元素并定义id，然后在隐藏域添加属性error-id=“元素ID”来实现。此处的元素需自定义CSS来控制。

   ```html
   <input type="hidden" name="img" jq-verify="required" jq-error="请上传图片" error-id="img-error">
   <p id="img-error" class="error">我是显示错误信息的元素</p>
   ```

5. 最后在提交按钮上添加jq-submit,来实现提交验证表单，当然，如果你不打算用ajax提交，请写上lay-filter="submit"，如果没这项就不能触发表单提交事件了。

   ```html
   <button class="layui-btn" jq-submit lay-filter="submit">立即提交</button>
   ```

6. 初始化时可设置参数：

   | 参数       | 默认值  | 说明                                       |
   | -------- | ---- | ---------------------------------------- |
   | blur     | true | 失去焦点时验证                                  |
   | form     | form | 需验证的表单                                   |
   | dataType | json | 服务器返回数据类型                                |
   | complete |      | 服务器返回数据后调用的自定义方法（注意影响的域，建议全局）name=jqcool&complete=test |
   | url      |      | 请求的服务端地址                                 |
   | loading  | true | 是否启用loading图片                            |
   | method   | post | 表单提交                                     |


7. 如果你是ajax提交，然后回调方法不能满足需求的话，可以自定义方法来解决。有两个方式定义，一个是在初始化参数时，定义complete:test,一个可以在表单添加属性complete="test"

   ```javascript
   form.set({
        "change": true,
        "form": "#form1"
    }).init();
   ```

   ```html
   <form id="form1" class="layui-form layui-form-pane" complete="test" action="/php/test.php">
    ....
   </form>
   ```

8. 默认的回调方法请参考ajax，它们是一样的。

   ​


##### 四、列表

当然你用这个的时候 ，请先掌握layui的模板引擎，掌屋了，这里就不看了，直接用，哈哈，又费话了...

1. 定义模板，使用一个script标签存放模板,模板定义好id，与data-params属性，具体参数后面见。

   ```html
   <script id="list-tpl" type="text/html" data-params='{"url":"/php/data.php","pageid":"#page"}'>
       <table id="example" class="layui-table lay-even">
           <thead>
               <tr>
                   <th><input type="checkbox" id="checkall" lay-filter="check" lay-skin="primary"></th>
                   <th>序号</th>
                   <th>标题</th>
                   <th>连接</th>
                   <th>排序</th>
                   <th>审核</th>
                   <th>操作</th>
               </tr>
           </thead>
           <tbody>

               <colgroup>
                   <col width="30">
                   <col width="60">
                   <col>
                   <col>
                   <col width="70">
                   <col width="80">
                   <col width="142">
               </colgroup>

               {{# layui.each(d.list, function(index, item){ }}
               <tr>
                   <td><input type="checkbox" name="checkbox" value="{{ item.id}}" lay-skin="primary"></td>
                   <td>{{ item.id}}</td>
                   <td>{{ item.title}}</td>
                   <td>{{ item.url}}</td>
                   <td><input type="text" class="layui-input ajax-blur" name="order" value="{{ item.id}}" data-params='{"url":"/php/test.php","data":"id=1&name=paco"}'> </td>
                   <td><input type="checkbox" name="switch" lay-skin="switch" lay-filter="ajax" data-params='{"url":"/php/test.php","data":"id={{ item.id}}&name=paco"}'> </td>
                   <td>
                       <button class="layui-btn layui-btn-mini modal-iframe" data-params='{"content": "article-add.html", "title": "{{item.title}}","full":"true"}'>
                           <i class="iconfont">&#xe653;</i>编辑
                       </button>
                       <button class="layui-btn layui-btn-mini layui-btn-danger ajax" data-params='{"url": "/php/test.php","data":"id=1&name=ni"}'>
                           <i class="iconfont">&#xe626;</i>删除
                       </button></td>
                   </td>
               </tr>
               {{# }); }}
           </tbody>

       </table>
   </script>
   ```

2. 建立视图。用于呈现渲染结果，记得定义好ID。注：列表视图添加class="layui-form"是为了渲染列表中的表单元素

   ```html
   列表视图
   <div id="list" class="layui-form"></div>
   分页视图
   <div class="text-right" id="page"></div>
   ```

3. 初始化渲染参数,初始化时输入模板的id,然后方法会根据id，获取data-params参数，来初始化数据，并异步请求数据来渲染

   ```javascript
   layui.define(['jquery', 'dtable'], function(exports) {
       var $ = layui.jquery,
           list = layui.dtable；
       oneList = new list();
       oneList.init('list-tpl');
       exports('list', {});
   });
   ```

   参数：

   | 参数       | 默认值      | 说明              |
   | -------- | -------- | --------------- |
   | method   | get      | ajax类型          |
   | dataType | json     | 服务器返回数据类型       |
   | data     |          | 请求的参数           |
   | url      |          | 请求数据的服务端地址URL   |
   | tplid    | list-tpl | 模板的ID           |
   | listid   | list     | 视图ID            |
   | pageid   |          | 分页视图id,如果留空则不分页 |
   | curr     | 1        | 当前              |
   | pages    | 0        | 总页数，通过服务端获取     |

4.服务端返因参数格式，返回的json数据，装会放到对象d中

```php
$msg['status'] =200;
$msg['data']['list'] = $list;列表数据
$msg['data']['title']="测试数据";
$msg['pages'] = 2;
echo header("content-type:text/html; charset=utf-8");
echo json_encode($msg);
```

5.列表搜索，定义好表单，重点是在表单按钮上，设置lay-filter="search"，将通过ajax提交，获取数据,具体表单 数据请看源码

```html
<button lay-submit class="layui-btn" lay-filter="search">查找</button>
```

6.复选框全选，设置lay-filter="check"，并添加属性data-name="这里的值为需要操作的复选框 的name值"

```html
全选框
<input type="checkbox" id="checkall" data-name="checkbox" lay-filter="check" lay-skin="primary">

列表中的复选框
<input type="checkbox" name="checkbox" value="{{ item.id}}" lay-skin="primary">
```

# 菜单的使用

后台只需返回一个数组的json，前台就会自动渲染菜单，后台数组格式,

```php
Array
(
    [0] => Array
        (
            [id] => 1
            [url] => 
            [name] => 内容管理
            [iconfont] => &#xe637;
            [sub] => Array
                (
                    [0] => Array
                        (
                            [id] => 5
                            [url] => 
                            [name] => 内容管理
                            [iconfont] => &#xe637;
                            [sub] => Array
                                (
                                    [0] => Array
                                        (
                                            [id] => 6
                                            [url] => article.html
                                            [name] => 文章列表
                                            [iconfont] => &#xe62a;
                                        )

                                    [1] => Array
                                        (
                                            [id] => 7
                                            [url] => article-cat.html
                                            [name] => 文章分类
                                            [iconfont] => &#xe635;
                                        )

                                    [2] => Array
                                        (
                                            [id] => 8
                                            [url] => tag.html
                                            [name] => 标签管理
                                            [iconfont] => &#xe632;
                                        )

                                )

                        )

                )

        )

    [1] => Array
        (
            [id] => 2
            [url] => 
            [name] => 产品管理
            [iconfont] => &#xe631;
            [sub] => Array
                (
                    [0] => Array
                        (
                            [id] => 9
                            [url] => product.html
                            [name] => 产品列表
                            [iconfont] => &#xe61a;
                            [sub] => Array
                                (
                                )

                        )

                    [1] => Array
                        (
                            [id] => 10
                            [url] => brand.html
                            [name] => 品牌管理
                            [iconfont] => &#xe60d;
                            [sub] => Array
                                (
                                )

                        )

                    [2] => Array
                        (
                            [id] => 11
                            [url] => product-cat.html
                            [name] => 分类管理
                            [iconfont] => &#xe610;
                            [sub] => Array
                                (
                                )

                        )

                )

        )

    [2] => Array
        (
            [id] => 3
            [url] => 
            [name] => 会员管理
            [iconfont] => &#xe672;
            [sub] => Array
                (
                    [0] => Array
                        (
                            [id] => 12
                            [url] => 
                            [name] => 会员管理
                            [iconfont] => &#xe672;
                            [sub] => Array
                                (
                                    [0] => Array
                                        (
                                            [id] => 13
                                            [url] => member.html
                                            [name] => 会员列表
                                            [iconfont] => &#xe630;
                                        )

                                    [1] => Array
                                        (
                                            [id] => 14
                                            [url] => member-level.html
                                            [name] => 会员等级
                                            [iconfont] => &#xe60f;
                                        )

                                    [2] => Array
                                        (
                                            [id] => 15
                                            [url] => member-statistics.html
                                            [name] => 会员统计
                                            [iconfont] => &#xe74d;
                                        )

                                )

                        )

                )

        )

    [3] => Array
        (
            [id] => 4
            [url] => 
            [name] => 网站设置
            [iconfont] => &#xe689;
            [sub] => Array
                (
                    [0] => Array
                        (
                            [id] => 16
                            [url] => 
                            [name] => 系统管理
                            [iconfont] => &#xe646;
                            [sub] => Array
                                (
                                    [0] => Array
                                        (
                                            [id] => 17
                                            [url] => config.html
                                            [name] => 系统设置
                                            [iconfont] => &#xe689;
                                        )

                                    [1] => Array
                                        (
                                            [id] => 18
                                            [url] => sys-log.html
                                            [name] => 系统日志
                                            [iconfont] => &#xe64a;
                                        )

                                    [2] => Array
                                        (
                                            [id] => 19
                                            [url] => menu.html
                                            [name] => 栏目管理
                                            [iconfont] => &#xe654;
                                        )

                                    [3] => Array
                                        (
                                            [id] => 20
                                            [url] => shielding.html
                                            [name] => 屏蔽词
                                            [iconfont] => &#xe654;
                                        )

                                )

                        )

                    [1] => Array
                        (
                            [id] => 21
                            [url] => 
                            [name] => 权限管理
                            [iconfont] => &#xe646;
                            [sub] => Array
                                (
                                    [0] => Array
                                        (
                                            [id] => 22
                                            [url] => admin-role.html
                                            [name] => 角色管理
                                            [iconfont] => &#xe689;
                                        )

                                    [1] => Array
                                        (
                                            [id] => 23
                                            [url] => admin-permission.html
                                            [name] => 权限设置
                                            [iconfont] => &#xe64a;
                                        )

                                    [2] => Array
                                        (
                                            [id] => 24
                                            [url] => admin.html
                                            [name] => 管理员
                                            [iconfont] => &#xe654;
                                        )

                                )

                        )

                )

        )

)

$msg['data']['list'] = $menu;
$msg['status']=200;
echo header("content-type:text/html; charset=utf-8");
echo json_encode($msg);
```

在index.html里面找到模板模块，替换到自己后台获取菜单的地址就OK了,如果顶部的菜单也想隐藏文字，可以在data-params加多一个属性，icon:true,就可以了

```html
<script id="menu-tpl" type="text/html" data-params='{"url":"/php/menu.php","listid":"menu"}'>
    {{# layui.each(d.list, function(index, item){ }}
    <li class="layui-nav-item {{# if(index==0){ }}layui-this{{# } }}">
        <a href="javascript:;"><i class="iconfont">{{item.iconfont}}</i> {{item.name}}</a>
    </li>
    {{# }); }}
</script>
```

记得哦，菜单数组里的字段名称不同时，要改模板中的字段名称

到此，差不多了哈，有不明白的地方可以加QQ群：114747233