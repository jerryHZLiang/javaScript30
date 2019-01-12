# 键盘输入序列的验证指南
### 项目效果

文档里提供了一个 script 标签，供我们从 Cornify.com 加载一个 JS 文件，调用其中的 cornify_add() 方法时，会在页面中追加 p 标签，并在 DOM 中插入一个图标。

####解决思路
1. 指定可激发特效的字符串
2. 监测字符串变化
3. 事件监听
4. 正则表达式判断字符串输入
5. 处理输入，在符合条件时，调用 cornify_add()

**难点**：javascript splice负数与变数

array的splice()方法是这样的

```javascript
arr.splice(index, howmany, what)
```
secretCode = 'helloworld'
-secretCode.length-1值为-11
pressed.length-secretCode.length值为-10到0

1. index值-1到-10依次从数组尾部‘d’, 'l' ..., 'h'开始,并且小于-10时都是从'h'开始
2. howmany为负的时候和0一样，不删除任何元素，没有删除元素的时候返回的都是空数组，所以arr.splice(-10,-1)返回空数组没问题


我用的方法
```
  pressed.splice(0, pressed.length - secretCode.length);
```