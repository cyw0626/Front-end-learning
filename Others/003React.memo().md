# React组件优化  
> 代码分割：Webpack、Browserify,加快首屏加载速度   
### 组件懒加载(React.lazy()和<Suspense />)
```
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```
### PureCompenent & shouldComponentUpdate(){...}   
### React.memo(fn)  
