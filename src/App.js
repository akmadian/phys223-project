import React, { useRef, useEffect } from 'react';
import { Row, Col, Layout } from 'antd';
import { Bar } from '@antv/g2plot';
import YouTube from 'react-youtube';
import Explanation from './part2'
import Sources from './sources'

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <div className="App">
      <Row id="content">
        <Col span={10} offset={7}>
          <header>
            <h1>The Doppler Effect</h1>
            <span>
              <a>Part I</a>&nbsp;&bull;&nbsp;
              <a href="#abstract">Abstract</a>;&nbsp;
              <a href="#video">Video</a>;&nbsp;
              <a href="#group">Group</a>
            </span><br/>
            <span>
              <a href="#p2">Part II</a>&nbsp;&bull;&nbsp;
              <a href="#p2-questions">Questions</a>;&nbsp;
              <a href="#p2-models">Models and Representaions</a>;&nbsp;
              <a href="#p2-data-collection">Data Collection Brainstorm</a>
            </span>
          </header>
          <h3>Proposed Research Question</h3>
          <b>How is the Doppler Effect used to study stellar/ galactic motion?</b><br/><br/>
          <div id="abstract">
            <h3>Abstract</h3>
            <p>
              The Doppler Effect is very interesting in that it involves a moving object with a constant wavelength, yet we perceive that the wavelength changes as the object moves away from us. The most common example of this is a police siren. However, the Doppler Effect can be observed in our galaxy through the way stars and then sun moves. (Possel, 2012). For example, the relative speed of a star may give an indication to the way the sun is moving throughout our solar system as well as the Milky Way. American astronomer Edwin Hubble used the Doppler Effect as a way to discover other galaxies moving away from ours, therefore concluding our universe is constantly expanding! (Kremer, 1994). Most importantly, the Doppler Effect is used to study the origin and evolution of our universe. (Physics World, 2017). It is believed that with this very strange phenomenon, we will come to understand our universe much more in depth, and will finally know the origins of our home, the Milky Way galaxy.
            </p>
            <p>Here's an example of the doppler effect using a car horn!</p>
          </div>
          <div id="video">
            <YouTube videoId="a3RfULw7aAY"/>
          </div>
          <br/><br/>
          <div id="group" style={{marginBottom: "0rem"}}>
            <h3>Group Members and Tasks</h3>
            <p>We will be using Discord to communicate and delegate tasks.</p>
            <table>
              <tr>
                <th>Responsibilities</th>
                <th>Assigned Member(s)</th>
                <th>Co-Member(s)</th>
              </tr>
              <tr>
                <td>Website Design</td>
                <td>Ari</td>
                <td></td>
              </tr>
              <tr>
                <td>Data & Sources Collection</td>
                <td>All Members</td>
                <td>All Members</td>
              </tr>
              <tr>
                <td>Analysis</td>
                <td>Dylan</td>
                <td>Iyari</td>
              </tr>
              <tr>
                <td>Reflection Questions</td>
                <td>All Members</td>
                <td>All Members</td>
              </tr>
              <tr>
                <td>Reference Checks</td>
                <td>Iyari</td>
                <td>Ari, Dylan</td>
              </tr>
              <tr>
                <td>Updates</td>
                <td>All Members</td>
                <td>All Members</td>
              </tr>
            </table>
          </div>
          <br/><br/><br/>
          <Explanation/>
          <br/><br/><hr/>
          <Sources/>
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
