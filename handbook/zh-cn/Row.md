# Row 横行
内部的组件横向显示

### 例子1
文字'123'需要放在右下角
```jsx
<Row bottom right>
  <Text>123</Text>
</Row>
```

### 例子2
文字'hello'需要上下和左右居中
```jsx
<Row middle center>
  <Text>hello</Text>
</Row>
```

### 源代码 JSX 结构
```jsx
<View 
  style={style}
  {...props}
>
  {children}
</View>
```

> 注意：请不要同时设置 

### API
|属性|作用|默认值|类型|实现|
|---|----|-----|---|---|
|top|顶部对齐|false|boolean|alignItems: 'flex-start'|
|middle|上下居中|false|boolean|alignItems: 'center'|
|bottom|底部对齐|false|boolean|alignItems: 'flex-end'|
|left|左面对齐|false|boolean|justifyContent: 'flex-start'|
|bottom|左右居中|false|boolean|justifyContent: 'center'|
|right|右边对齐|false|boolean|justifyContent: 'flex-end'|