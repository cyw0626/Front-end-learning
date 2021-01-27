# Formily见解   
## SchemaForm结构  
```
<SchemaForm
  actions={actions}
  effects={effects}
  values={value}
  ...
>
  <FormButtonGroup>
    <Submit>提交</Submit>
  </FormButtonGroup>
</SchemaForm>
```
- 所有联动操作在effects中实现  
- actions调用先握手，再生效   
## Schema结构  
- x-props:字段属性描述————FormItem属性定义  
- x-rules:字段校验描述，Array类型，支持通用的必填、正则校验、函数校验以及错误信息提示   
- x-component:字段编辑组件类型，比如Input、Select等，也可以是CustomComponent,通过渲染层注入组件   
- x-component-props:用于x-component中指定组件的属性   
## 虚拟节点和值节点   
## Formily是一个无限循环的状态机
- 联动由表单的生命周期发起  
- 联动需要路径来描述具体字段  
- 联动的最终是操作具体字段的状态   
### 生命周期   
|  全局表单Form   | 字段Field  | 说明  |
|  ----  | ----  | ----  |
| onFormInit  | onFiledInit | 初始化后触发  |
| onFormChange  | onFieldChange | 状态变化后触发  |
| onFormValuesChange  | onFieldValuesChange | 状态变化的一种特殊情况  |
| onFormInputChange  | onFieldInputChange | value变化的一种特殊清空  |
| onFormMount | onFieldMount | 组件挂载完毕时触发  |
| onFormUnmount | onFieldUnmount | 组件卸载时触发  |  
