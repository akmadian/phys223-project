import React, { useRef, useEffect } from 'react';
import { Bar } from '@antv/g2plot';

const App = () => {
  const data = [
    { year: '1951', sales: 38 },
    { year: '1952', sales: 52 },
    { year: '1956', sales: 61 },
    { year: '1957', sales: 145 },
    { year: '1958', sales: 48 },
  ];
  
  const container = useRef(null);
  
    useEffect(() => {
      if (!container.current) {
        return;
      }
      const bar = new Bar(container.current, {
        data,
        title: {
          text: 'Demo Plot',
          visible: true
        },
        xField: 'sales',
        yField: 'year',
        colorField: 'year',
      });
      bar.render();
    }, []);

  return (
    <div className="App">
      <header>
        <h1>Physics 223 Project</h1>
        <h2>whatever it is</h2>
      </header>
      <div ref={container}></div>
    </div>
  );
}
export default App;
