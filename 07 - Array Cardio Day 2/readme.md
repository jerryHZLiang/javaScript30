##some 和 every
两者的相同之处是，都接受一个函数作为参数，对数组元素都执行一次此函数，都不会改变原数组的值。不同之处在于返回条件不同：
some() 中直到某个数组元素使此函数为 true，就立即返回 true。所以可以用来判断一个数组中，是否存在某个符合条件的值。

##find 和 fineIndex
这两个 ES6 的新特性类似于 some() ，但对于符合条件的元素，返回值不是布尔类型。不一样的地方在于，find() 返回的是这个元素的值（或 undefined），而 findIndex() 返回的是这个元素的索引（或 -1）。

##slice 和 splice
这两者比较相似的地方，只有：参数的第一个都是指的起始位置，且都接受负数，若是负数，代表倒数第几位。

slice()：不修改原数组，按照参数复制一个新数组，参数表述复制的起点和终点索引（省略则代表到末尾），但终点索引位置的元素不包含在内。
splice()：原数组会被修改。第二个参数代表要删掉的元素个数，之后可选的参数，表示要替补被删除位置的元素。