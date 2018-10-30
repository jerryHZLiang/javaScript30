
1. 获取所有的 <input> 元素，并添加事件监听
```javascript
const boxs = document.querySelectorAll('.inbox input[type="checkbox"]');
boxs.forEach(box => box.addEventListener('click', handleCheck));
```

2. 设置一个lastChecked记录最后一个checkbox点击的值
```javascript
let lastChecked;

  function handleCheck(e){
	  //用变量 inBetween 对需要选中的元素进行标记
    let inBetween = false
    if(e.shiftKey && this.checked){
      checkBoxes.forEach(checkBox=>{
    //    console.log(checkBox)
        if(checkBox === this || checkBox === lastChecked){
          inBetween = !inBetween
     //     console.log('sss')
        }
        if(inBetween){
          checkBox.checked = true
        }
      })
    }
    lastChecked = this
  }

```