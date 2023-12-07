import { useState } from 'react';
import { Car3DView } from './component/Car3DView';

function App() {
  const [value, setValue] = useState('0');
  return (
    <>
      <input style={{
        position: 'absolute',
        left: 50,
        top: 50,
        zIndex: 100,
      }} value={value} type='number' onChange={(event) => setValue(event.target.value)} />
      <Car3DView value={parseFloat(value)} />
    </>
  );
}

export default App;
