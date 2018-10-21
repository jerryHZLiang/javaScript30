##实现效果
用 JavaScript 和 CSS3 实现拖动滑块时，实时调整图片的内边距、模糊度、背景颜色，同时标题中 JS 两字的颜色也随图片背景颜色而变化。

##涉及特性
```
:root
var(--xxx)：CSS 变量（CSS Variables）
filter: blur()
事件 change、mousemove
```
##实现过程
**CSS 部分准备**
1. 声明全局（:root）的 CSS 变量
2. 将变量应用到页面中对应元素 <img>
3. 处理标题的 CSS 值
```css
  <style>
  :root{
    --spacing: 10px;
    --blur: 10px;
    --base: #ffc600;
  }

  img{
    padding: var(--spacing);
    filter: blur(var(--blur));
    background: var(--base);
  }

  .hl{
    color: var(--base);
  }
```
**JS 部分准备**
JS 实时更新 CSS 值

4. 获取页面中 input 元素
```
const inputs = document.querySelectorAll('.controls input')
```
5. 编写处理更新操作的方法

```javascript
  function handleUpdate(){
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix )
  }
```
6. 给每个 input 添加监听事件，使其在值变动和鼠标滑过时的事件监听，触发更新操作
```javascript
  inputs.forEach(input => input.addEventListener('change', handleUpdate))

  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))

```