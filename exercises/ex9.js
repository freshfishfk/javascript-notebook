// 2016/10/05
//
// 作业 9
// ========
//

var log = function() {
    console.log.apply(console, arguments)
}


// ====
// 测试
// 自行实现 ensureEqual, arrayEquals 等函数
// 按照上课所说, 最好把测试放在额外的文件中, 隔离测试和代码
// ====
//
//测试函数的编写和分离，还是问题 
var ensureEqual = function(func, answer, description){

}

// 作业 1
//
var unique = function(a) {
    /*
    a 是一个 array
    返回一个 array, 包含了 a 中所有元素, 且不包含重复元素
    例如 a 是 [1, 2, 3, 1, 3, 5]
    返回 [1, 2, 3, 5]
    */
    var res = []
   
    for (i = 0; i < a.length; i++){
        if (res.indexOf(a[i]) == -1)
            res.push(a[i])
    }
    return res
}

// 注意, 要自行实现 arrayEquals 来判断两个数组是否相等
// ensureEqual(unique([1, 2, 3, 1, 3, 5]), [1, 2, 3, 5]), 'test 1')
// ensureEqual(unique([1, 1, 3, 3, 1, 3]), [1, 3]), 'test 2')


// 作业 2
//
var intersection = function(a, b) {
    /*
    a b 都是 array

    返回一个 array, 里面的元素是同时出现在 a b 中的元素
    这个 array 中不包含重复元素
    */
    //答案里没有把结果 unique。
    var res = []
    for (i =0; i < a.length; i++){
        if (b.includes(a[i]) == 1)
            res.push(a[i])
    }
    res = unique(res)
    return res
}


// 作业 3
//
var union = function(a, b) {
    /*/
    a b 都是 array

    返回一个 array, 里面的元素是所有出现在 a b 中的元素
    这个 array 中不包含重复元素
    /*/
    //数组的拼接就有若干方法,concat(),还有遍历a插入b，
    var res = a.concat(b)
    res = unique(res)
    return res
}


// 作业 4
//

var difference = function(a, b) {
    /*/
    a b 都是 array

    返回一个 array, 里面的元素是
    所有在 a 中有 b 中没有的元素
    这个 array 中不包含重复元素
    /*/
    var res = []
    for (i = 0; i < a.length; i++){
        if (b.includes(a[i]) == 0)
            res.push(a[i])
    }
    res = unique(res)
    return res

}


// 作业 5
//
var differenceAll = function(a, b) {
    /*/
    a b 都是 array

    返回一个 array, 里面的元素是
    所有在 a b 中的非公共元素
    这个 array 中不包含重复元素
    /*/
    var m = difference(a, b)
    var n = difference(b, a)
    res =  union(m, n)
    return res
}


// 作业 6
//
var isSubset = function(a, b) {
    /*/
    a b 都是 array

    检查是否 a 中的每个元素都在 b 中出现
    返回 bool
    /*/
    var m = intersection(a, b)
    return m.length === a.length
}


// 下面的题目都是 DOM 操作题目
// =====
//
// 作业 7
//
var appendHtml = function(element, html) {
    /*
    element 是一个标签
    html 是一段 html 字符串
    把 html 作为子元素插入到 element 的末尾
    上课一直在用这个函数
    */
    element.insertAdjacentHTML('beforeend', html)
}


// 作业 8
//
var bindEvent = function(element, eventName, callback) {
    /*
    element 是一个标签
    eventName 是一个 string, 表示事件的名字
    callback 是一个函数
    用法如下, 假设 button 是一个标签
    bindEvent(button, 'click', function(){
    })
    */
    element.addEventListener(eventName, callback)
}


// 作业 9
//
var bindEventDelegate = function(element, eventName, callback, responseClass) {
    /*
    element 是一个标签
    eventName 是一个 string, 表示事件的名字
    callback 是一个函数
    responseClass 是一个字符串

    在 element 上绑定一个事件委托
    只会响应拥有 responseClass 类的元素
    */
    //事件委托未掌握。（1、绑在父级元素上 2、？）
    //在element上绑定事件，整个父元素以及子元素点击都会触发检查动作
    element.addEventListener(eventName, function(event){
        var target = event.target
        //检查到点击目标event.target是某某按键，执行真正的动作函数
        if(target.classList.contains(responseClass)) {
            callback(event)
        }
    })
}


// 作业 10
//
var append = function(selector, html) {
    /*
    selector 是一个 string, 选择器, 有如下三种取值
        1, 标签选择器, 如 'div'
        2, class 选择器, 如 '.red'
        3, id 选择器, 如 '#id-input-name'
    html 是一段 html 字符串
    把 html 作为子元素插入到 selector 选中的所有元素的末尾
    */
   //注意：选出来的有可能是标签组而不是差一个标签。
   var elements = document.querySelector(selector)
   for (i = 0; i < elements.length; i++){
        elements[i].insertAdjacentHTML('beforeend', html) 
   }
}


// 作业 11
//
var bindAll = function(selector, eventName, callback, responseClass) {
    /*
    selector 是一个 string, 选择器, 有如下三种取值
        1, 标签选择器, 如 'div'
        2, class 选择器, 如 '.red'
        3, id 选择器, 如 '#id-input-name'
    eventName 是一个 string, 表示事件的名字
    callback 是一个函数
    responseClass 是一个字符串, 这个参数可以为空

    给 selector 选中的所有元素绑定 eventName 事件
    当 responseClass 给出的时候, callback 只会响应拥有 responseClass 类的元素
    当 responseClass 没有给的时候, callback 直接响应

    这题做不出来就放弃
    */
   
}


// =====
// 提示
// =====
/*/

1, unique
创建一个新数组
遍历 a
对于 a 中的每个元素, 判断是否在新数组中出现
如果没出现就 push


2, intersection
创建一个新数组
遍历 a
对于 a 中的每个元素, 判断是否在 b 中出现
如果出现就 push 到新数组


3, union
有问题单独提问


4, difference
有问题单独提问


5, differenceAll
对 a b 分别 difference 并 push 到新数组


6, isSubset
循环判断


7, appendHtml
上课用的函数的封装


8, bindEvent
上课用函数的简单封装


9, bindEventDelegate
事件委托的简单封装


10, append
选择, 然后循环 appendHtml


11, bindAll
这题做不出来就算了
/*/
