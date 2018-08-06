# Column 竖列
强制的竖向布局

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

> 注意：请不要同时设置 顶部对齐，上下对齐和底部对齐

