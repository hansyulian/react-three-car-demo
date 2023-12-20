import { useState } from 'react';
import { Car3DView } from './component/Car3DView';
import { CarSelection } from './component/CarSelection';

function App() {
  const [modelName, setModelName] = useState('mclaren');
  return (
    <>
      <Car3DView modelName={modelName} key={modelName} />
      <CarSelection value={modelName} onChange={setModelName} />
    </>
  );
}

export default App;
