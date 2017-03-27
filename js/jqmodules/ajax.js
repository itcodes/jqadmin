/**
 @Name：layui.jqajax 异步提交插件
 @Author：Paco
 @date: 2016-12-03
 @web: www.jqcool.net
 */
layui.define(['jquery', 'form', 'layer'], function(exports) {
    var $ = layui.jquery,
        layer = layui.layer,
        form = layui.form(),
        ajax = function() {
            this.options = {
                "method": 'POST',
                "data": '',
                "dataType": 'json',
                "timeout": 50000,
                "cache": false,
                "confirm": false,
                "loading": true //是否显示loading图片
            }
        };

    //初始化，按属性绑定ajax事件给元素
    ajax.prototype.init = function() {
        var _this = this;
        //对有.ajax的元素绑定单击ajax事件
        $(".ajax:not([ajax-bind])").each(function() {
            _this.bind($(this));
            $(this).on('click', { ajax: _this }, _this.click);
        });

        //对有.ajax的元素绑定单击ajax事件
        $(".ajax-all:not([ajax-bind])").each(function() {
            _this.bind($(this));
            $(this).on('click', { ajax: _this }, _this.update);
        });

        //对有.ajax的元素绑定失去焦点ajax事件
        $(".ajax-blur:not([ajax-bind])").each(function() {
            ajax.bind($(this));
            $(this).bind('focus', { ajax: _this }, ajax.focus);
            $(this).bind('blur', { ajax: _this }, ajax.blur);
        });

        //绑定switch事件
        form.on('switch(ajax)', function(data) {
            _this.setValue(_this, data, "switch");
        });

        //绑定select事件
        form.on('select(ajax)', function(data) {
            _this.setValue(_this, data, "select");
        });
    };


    /**
     * 为已绑定事件的元素加上绑定属性，标识已绑定，当重新加载ajax.init()避免重复绑定
     */

    ajax.prototype.bind = function($obj) {
        $obj.attr("ajax-bind", 1);
    };



    /**
     *@todo 单击获取data-params属性,接装成参数
     */
    ajax.prototype.click = function(event) {
        var _ajax = event.data.ajax,
            params = $(this).data('params');
        if (undefined == params || null == params) {
            layer.msg('请为当前元素配置data-garams属性');
            return;
        }
        if (typeof params === 'string') {
            params = JSON.parse(params)
        }
        var options = $.extend({}, _ajax.options, params);

        _ajax.confirm(_ajax, options, $(this));
    }

    /**
     *@todo 单击获取switch,select属性值与value值，合并提交
     */
    ajax.prototype.setValue = function(_this, data, type) {
        var _ajax = _this,
            obj = $(data.elem),
            name = obj.attr("name"),
            params = obj.data('params');
        if (undefined == params || null == params) {
            layer.msg('请为当前元素配置data-garams属性');
            return;
        }
        if (typeof params === 'string') {
            params = JSON.parse(params)
        }
        var options = $.extend({}, _ajax.options, params);

        var val = 0;
        if (type == "switch") {
            if (data.elem.checked) {
                val = 1;
            }
        } else if (type == "select") {
            val = data.value;
        }

        if (undefined != options.data && options.data != "") {
            if (options.data.indexOf(name) != -1) {
                var re = new RegExp(name + "=[^&]*", "gim");
                options.data = options.data.replace(re, name + "=" + val);

            } else {
                options.data = options.data + "&" + name + "=" + val;
            }
        } else {
            options.data = name + "=" + val;
        }
        _ajax.ajax(options);
    }

    /**
     *@todo 取到焦点后获取属性值与value值，附值给属性options,用于对比文本框值有没有变化
     */
    ajax.prototype.focus = function(event) {
        var name = $(this).attr("name"),
            val = $(this).val(),
            _ajax = event.data.ajax;
        _ajax.options.filed = {
            "name": name,
            "val": val
        };
    }

    /**
     *@todo 失去焦点后获取属性值与value值，合并提交
     */
    ajax.prototype.blur = function(event) {
        var _ajax = event.data.ajax,
            params = $(this).data('params');
        if (undefined == params || null == params) {
            layer.msg('请为当前元素配置data-garams属性');
            return;
        }
        if (typeof params === 'string') {
            params = JSON.parse(params);
        }
        var options = $.extend({}, _ajax.options, params);

        if (_ajax.options.filed != undefined || _ajax.options.filed != null) {
            var name = $(this).attr("name"),
                val = $(this).val();
            if (_ajax.options.filed.val == val) {
                return false;
            } else {
                if (options.data != undefined || null != options.data) {
                    if (options.data.indexOf(name) != -1) {
                        var re = new RegExp(name + "=[^&]*", "gim");
                        options.data = options.data.replace(re, name + "=" + val);
                    } else {
                        options.data = options.data + "&" + name + "=" + val;
                    }
                } else {
                    options.data = name + "=" + val;
                }
            }
        }

        _ajax.ajax(options);
    }


    ajax.prototype.update = function(event) {
        var _ajax = event.data.ajax,
            params = $(this).data('params'),
            name = $(this).data('name');

        if (undefined == name || null == name) {
            layer.msg('请设置需要捕获复选框的name值');
            return;
        }

        if (undefined == params || null == params) {
            layer.msg('请为当前元素配置data-garams属性');
            return;
        }
        if (typeof params === 'string') {
            params = JSON.parse(params);
        }
        var options = $.extend({}, _ajax.options, params);
        var arr = [];
        $("input[name=" + name + "]:checked").each(function() {
            arr.push($(this).val());
        })
        var vals = arr.toString();
        if (vals == "") {
            layer.msg('请选择需要操作的记录');
            return;
        }



        if (options.data != undefined || null != options.data) {
            if (options.data.indexOf(name) != -1) {
                var re = new RegExp(name + "=[^&]*", "gim");
                options.data = options.data.replace(re, name + "=" + vals);
            } else {
                options.data = options.data + "&" + name + "=" + vals;
            }
        } else {
            options.data = name + "=" + val;
        }

        _ajax.confirm(_ajax, options, $(this));

    }

    /**
     *@todo 弹出确认窗口
     *@param options object 拼装好的参数对象
     *@param obj object 当前操作对象
     */
    ajax.prototype.confirm = function(that, options, obj) {
        if (options.confirm) {
            var title = "";
            if (obj) {
                title = obj.html().replace(/<i [\s\S]*<\/i>/ig, '');
            }
            layer.confirm('确认<span class="color-commred">' + title + '</span>操作吗', { icon: 3, title: '提示' }, function(index) {
                that.ajax(options);
                layer.close(index);
            });
        } else {
            that.ajax(options);
        }
    }

    /**
     *@todo ajax 事件  这里callBack特意采用json格式，如果有需要可以在这里修改
     *@param event object 事件对象
     *@param options object 拼装好的参数对象
     **/
    ajax.prototype.ajax = function(options) {
        if (options == undefined || options == null) {
            return;
        }
        //变为大写
        options.method = options.method.toUpperCase();

        if (options.loading == true) {
            var l = layer.load(1);
        }

        $.ajax({
            type: options.method,
            url: options.url,
            dataType: options.dataType,
            data: options.data,
            timeout: options.timeout,
            cache: options.cache,
            error: function(XMLHttpRequest, status, thrownError) {
                if (options.loading == true) {
                    layer.close(l);
                }
                layer.msg('网络繁忙，请稍后重试...');
                return false;
            },
            success: function(msg) {
                if (options.loading == true) {
                    layer.close(l);
                }
                if (!ajax.callBack(msg, options)) return;
            }
        });
    };

    /**
     *@todo ajax成功后执行方法
     *@param ret object 服务端返回的信息 ret={status:200,data:data,url:baidu.com}
     *@param options object 拼装好的参数对象
     **/
    ajax.prototype.callBack = function(ret, options) {
        if ((undefined == ret) || (null == ret))
            return false;
        if (options.complete) {
            //自定义方法
            eval(options.complete + "(ret,options,$)");
            return false;
        }
        if (200 == ret.status) {
            if ((undefined == ret.url) || (null == ret.url) || ("" == ret.url)) {
                layer.closeAll();
                layer.msg(ret.msg);
                return;
            } else if ('reload' == ret.url) {
                location.reload();

            } else {
                location.href = ret.url;
            }
        } else {
            layer.msg(ret.msg)
        }
        return true;
    };

    var ajax = new ajax();
    ajax.init();
    exports('ajax', ajax);
});