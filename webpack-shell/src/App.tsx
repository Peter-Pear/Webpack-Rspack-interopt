import React, { Suspense } from 'react';

const Remote = React.lazy(() => import('app_02/Remote'));

console.log(Remote);

const App = () => {

  return (
    <div>
      <h1>Shell</h1>
      <Suspense fallback={null}>
        <Remote />
      </Suspense>
    </div>
  )
}

export default App;
