import React, { useRef, useEffect } from 'react';
import { Row, Col, Layout } from 'antd';
import { Bar } from '@antv/g2plot';
import YouTube from 'react-youtube';

const { Header, Footer, Content } = Layout;

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
      <Row id="content">
        <Col span={10} offset={7}>
          <header>
            <h1>The Doppler Effect</h1>
          </header>
          <div id="abstract">
            <p>
              The Doppler Effect refers to the change in frequency of a wave
              from the point of view of an observer, who is moving relative to
              the wave source.
            </p>
            <p>
              This effect can be seen (and heard) every day, and is used for 
              all kinds of cool things inlcuding robotics, astronomy, radar 
              technology, medical technology, flow measurement, biology,
              satellite communication, and audio technology!
            </p>
            <YouTube videoId="a3RfULw7aAY"/>
          </div>
          <div id="group">
            <h2>Group Members and Tasks</h2>
            <Row>
              <Col span={6} offset={3}>
                Iyari Angeles
              </Col>
              <Col span={6}>
                Dylan Pool
              </Col>
              <Col span={6}>
                Ari Madian
              </Col>
            </Row>
          </div>
          <div>
            REFERENCES
            <p id="ref-1">
              [<a href="#uref-1">i</a>]&nbsp;
              <a href="https://en.wikipedia.org/wiki/Doppler_effect">
                Wikipedia.com "Doppler Effect"
              </a>
            </p>
            <p id="ref-2">
              [<a href="#uref-2">ii</a>]&nbsp;
              <a href="https://www.physicsclassroom.com/class/waves/Lesson-3/The-Doppler-Effect">
                physicsclassrom.com Vibrationa and Waves - Lesson 3 - Behavior of Waves - The Doppler Effect
              </a>
            </p>
          </div>
        </Col>
      </Row>
      <footer>
        Website created by Ari Madian for PHYS&223 - Spring 2020 @ South Seattle College. <br/>
        <a href="https://github.com/akmadian/phys223-project">This site's source code</a> is MIT licensed.
      </footer>
    </div>
  );
}
export default App;
