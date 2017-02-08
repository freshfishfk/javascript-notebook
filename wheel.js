//轮子 基本函数
//1 自定义log
//定义自己的date函数
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
// 定义我们的 log 函数
var log = function() {
    var t = new Date().Format("yyyy-MM-dd hh:mm:ss");
    console.log.apply(console, [t,arguments])
}


//================================================
//2 高阶函数 
//// 高阶函数这个名字很唬人, 实际上概念很简单——函数可以作为参数传递
//
// 有什么用呢？灵活性高，舒适度佳
// 请看例子
//
// String 函数是用来把数据转换成 string 类型的一个函数
var process = function(array, processor) {
    var l = []
    for (var i = 0; i < array.length; i++) {
        var a = array[i]
        // processor 必须能调用成功, 否则这里就跪了
        var element = processor(a)
        l.push(element)
    }
    return l
}

//处理函数
var processor = function(n){
    return n < 60
    }

var filter = function(array, processor) {
    var l = []
    for (var i = 0; i < array.length; i++) {
        var a = array[i]
        // processor 必须能调用成功, 否则这里就跪了
        var condition = processor(a)
        if (condition) {
            l.push(a)
        }
    }
    return l
}

filter([59, 12, 60, 100], function(n){
    return n < 60
    //条件是 n < 60
    //返回的是布尔值 符合条件的是1
})


//================================================
// 3 toggle class 翻转类
//
var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } 
    else {
        element.classList.add(className)
    }
}

//
////================================================
// 4 JSON 的序列化与反序列化
// 函数原型
// JSON.stringify(object[, replacer][, space])
// JSON.parse(string[, reviver])

var s = JSON.stringify([1,2,3,4])
log('序列化后的字符串',typeof s, s)
var a = JSON.parse(string[, reviver])
log('反序列化后的数组',typeof a, a)


////================================================
// 5 时间标准库 常用用法如下
/*
var d = new Date()
d.getFullYear()
年份, 2016
d.getMonth()
月份, 0-11
d.getDate()
日期, 1-31
d.getHours()
小时, 0-23
d.getMinutes()
分钟, 0-59
d.getSeconds()
秒数, 0-59
d.getMilliseconds()
毫秒, 0-999
d.getDay()
星期几, 0-6
*/