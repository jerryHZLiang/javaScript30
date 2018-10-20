##关键要点

1. 表盘上指针的样式：旋转的效果
2. 获取实时的时间
3. 每一秒改变一次指针状态
涉及到的特性：
```
transform-origin
transform: rotate()
transition
transition-timing-function: cubic-bezier(x, x, x, x)
setInterval(callback, time)
new Date()
```


###CSS 部分
1. 调整指针的初始位置以及旋转的轴点 transform-origin

```transform-origin: 100%; // 或者可以用 right```
3. 调整时钟指针跳动时的过渡效果

```transition: all 0.5s;```
3. 设置指针成为回弹的形式 设置 transition-time-function 的值，以实现秒针“滴答滴答”的效果。此外注意 transform 中的 rotate （旋转）属性由角度来控制，可以试着在页面上修改这个参数来查看效果。


###JS 部分

1. 利用定时器自动更新时间 定时器 setInterval 可以每隔一段固定的时间将操作放入执行队列，利用这个特性，加入页面后每秒更新一次时间，以实现秒针转动的效果。
```
 setInterval(setDate, 1000);
 // setDate 为每 1000 毫秒触发的 function
 ```
2. 获取三个指针对应的 HTML 元素，留待后续操作
```
  const secondHand = document.querySelector('.second-hand')
  const minsHand = document.querySelector('.min-hand')
  const hourHand = document.querySelector('.hour-hand')
```
2. 编写 setDate 方法

```

function setDate(){

    const now = new Date()
    const seconds = now.getSeconds()
    const mins = now.getMinutes()
    const hours = now.getHours()

    const secondDeg = (seconds / 60) * 360 + 90
    const minDeg = (mins / 60) * 360 + 90
    const hourDeg = (hours / 12) * 360 + 90
    
    secondHand.style.transform = `rotate(${secondDeg}deg)`
    minsHand.style.transform = `rotate(${minDeg}deg)`
    hourHand.style.transform = `rotate(${hourDeg}deg)`
    
    if (secondDeg === 90) secHand.style.transition = 'all 0s';
    else secondHand.style.transition = 'all 0.05s';

    if (minDeg === 90) minHand.style.transition = 'all 0s';
    else minsHand.style.transition = 'all 0.1s';
  }
```