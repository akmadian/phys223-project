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
              The Doppler Effect is very interesting in that it involves a 
              moving object with a constant wavelength, yet we perceive that 
              the wavelength changes as the object moves away from us. 
            </p>
            <p>
              The most common example of this is a police siren. As the police siren 
              passes you the pitch of the siren gets deeper, even though the 
              pitch stays the same. Don’t believe me? If you get involved in a 
              speed chase, while trying to maintain the same distance to the cop 
              (try your best, I know it’s hard for first timers), you will 
              discover that the pitch of the cop’s siren is the same at all times!
            </p>
            <p>Here's an example of the doppler effect using a car horn!</p>
          </div>
          <div id="video">
            <YouTube videoId="a3RfULw7aAY"/>
          </div>
          <div id="group" style={{marginBottom: "0rem"}}>
            <h2>Group Members and Tasks</h2>
            <p>We will be using Discord to communicate and delegate tasks.</p>
            <Row>
              <Col span={6} offset={3}>
                Iyari Angeles<br/><hr/>
                <i>Data and Sources Collection</i><br/><br/>
                <i>Reflection Questions</i><br/><br/>
                <i>Reference Checks</i><br/><br/>
                <i>Updates</i>
              </Col>
              <Col span={6}>
                Dylan Pool<br/><hr/>
                <i>Analysis</i><br/><br/>
                <i>Reflection Questions</i><br/><br/>
                <i>Updates</i>
              </Col>
              <Col span={6}>
                Ari Madian<br/><hr/>
                <i>Website Design and Development</i><br/><br/>
                <i>Reflection Questions</i><br/><br/>
                <i>Data and Sources Collection</i><br/><br/>
                <i>Updates</i>
              </Col>
            </Row>
          </div>
          <div id="references">
            <b>REFERENCES</b>
            <p id="ref-1">
              [<a href="#uref-1">i</a>]&nbsp;
              Neipp, Cristian & Hernández, A & Rodes-Roca, Jose & Márquez, 
              Andrés & Beléndez, T & Beléndez, Augusto. (2003). An analysis 
              of the classical Doppler effect. European Journal of Physics. 
              24. 497. 10.1088/0143-0807/24/5/306.
            </p>
            <p id="ref-2">
              [<a href="#uref-2">ii</a>]&nbsp;
              <a href="https://www.physicsclassroom.com/class/waves/Lesson-3/The-Doppler-Effect">
              Henderson, Tom. “Physics Tutorial: The Doppler Effect.” The Physics 
              Classroom, 2016, www.physicsclassroom.com/class/waves/Lesson-3/The-Doppler-Effect
              </a>
            </p>
            <p id="ref-3">
              [<a href="#uref-2">iii</a>]&nbsp;
              <a href="web.archive.org/web/20170914003837/www.einstein-online.info/spotlights/doppler">
              Possel, Markus. “Waves, Motion and Frequency: the Doppler Effect.” Waves, 
              Motion and Frequency: the Doppler Effect - Einstein Online, 
              web.archive.org/web/20170914003837/www.einstein-online.info/spotlights/doppler
              </a>
            </p>
            <p id="ref-4">
              [<a href="#uref-2">iv</a>]&nbsp;
              <a href="https://www.physicsworld.com/a/doppler-shift-is-seen-in-reverse/">
              Physics World. “Doppler Shift Is Seen in Reverse.” Physics World, 25 Aug. 
              2017, physicsworld.com/a/doppler-shift-is-seen-in-reverse/.
              </a>
            </p>
            <p id="ref-5">
              [<a href="#uref-2">v</a>]&nbsp;
              Richard L. Kremer, "The Search for Christian Doppler. Alec Eden ," Isis 85, no. 4 (Dec., 1994): 708-709.
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
