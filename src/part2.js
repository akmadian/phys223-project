import React, { Component } from 'react'
import { Tabs } from 'antd';
import { Row, Col, Layout } from 'antd';

const { TabPane } = Tabs;
const { Header, Footer, Content } = Layout;

export default class Explanation extends Component {
    render() {
        return (
            <div>
                <hr></hr>
                <h2 id="p2">Part II. Explanation/ Preparation</h2>
                <h3 id="p2-questions">Questions</h3>
                <div className="text-align-left">
                    <p>
                        <b>Q: Did you address the previous comments from Part I?</b><br/>
                        <p><b>A: </b>Yes, we have added references in our description to show our audience where we got our information from. In our plan for collaboration we have added back up members to support the original group members who are assigned to the position.</p>
                    </p>
                    <p>
                        <b>Q: What have you already accomplished? Describe your progress so far.</b><br/>
                        <p><b>A: </b>We have created our website and figured out that the doppler effect shows us red-shifted light, which we can use to calculate how far away galaxies are moving away from us. We have also come up with what type of representations we need to most accurately show our data.</p>
                    </p>
                    <p>
                        <b>Q: What do you hope to complete? Be sure to list which group member(s) is doing what task on the description. Describe your goals for finishing over the next four weeks.</b><br/>
                        <p><b>A: </b>Each member’s tasks are listed in Part I. See “Plan For Collaboration” for more information.</p>
                    </p>
                </div>
                <br/><br/>
                <table>
                    <tr>
                        <th>Period of Time from Start of Project to End of Project</th>
                        <th>Goals</th>
                    </tr>
                    <tr>
                        <td>Week 1</td>
                        <td>Complete Part I and get familiarized with the Project.</td>
                    </tr>
                    <tr>
                        <td>Week 2</td>
                        <td>Complete Part II. Finish all models and representations by Friday 15th. (All members)</td>
                    </tr>
                    <tr>
                        <td>Week 3</td>
                        <td>Part II was extended. Polish Part II, and familiarize with Part III. Start Part III to start the experiment.</td>
                    </tr>
                    <tr>
                        <td>Week 4</td>
                        <td>Complete Part III. Complete experiment by collecting data and optimize it for use. (Dylan and Iyari)</td>
                    </tr>
                    <tr>
                        <td>Week 5</td>
                        <td>Complete Part IV. Finish the website and polish all points of the project.</td>
                    </tr>
                </table>
                <br/>
                <p>Overall our goal is to be able to understand our idea further than we initially do. To gain more understanding and sense of clarity among all of our members in order to understand our question by the end of the project. If we were asked this question, we should be able to answer it with a lot of knowledge embedded into our explanation. We also hope to complete this assignment with minimal complications although this might be a hard goal, but still a goal nonetheless.</p>
                <br/><br/>
                <h3 id="p2-models">Models and Representations</h3>
                <p className="smaller-text">Click on the tabs below to toggle between representations.</p>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Pictoral/ Video" key="1">
                        <td>
                            <p>We will use drawings and sound waves using blue and red shifted diagrams. These diagrams are used to gain knowledge on the rotations of planets and stars as well as where they may have been before they moved. The universe is expanding meaning there will be constant shifts in space and the Doppler Effect and blue and redshift diagrams help us better understand this, as well as the idea of how redshift has a positive z value and blueshift has a negative z value.</p>
                            <Row>
                                <Col span={13}>
                                    <img src={require('./assets/pictorial_image_1.PNG')} alt="" width="100%" height="auto"/>
                                    <p>
                                        Demonstration of light emitting from a star (By Iyari)<br/>
                                        Parial Credit to NASA for part of the equation
                                    </p>
                                </Col>
                                <Col span={11}>
                                    <img src={require('./assets/pictoral_gif_2.gif')} alt="" width="100%"/>
                                    <a className="cite-text" href="https://www.google.com/url?q=https://media0.giphy.com/media/qdbwAhVCiBSBW/source.gif&sa=D&ust=1589657482381000">Star Moving Away From Planet</a>
                                    <img src={require('./assets/pictoral_gif_1.gif')} alt="" width="100%"/>
                                    <a className="cite-text" href="https://www.google.com/url?q=https://sciencesprings.files.wordpress.com/2019/10/34737-15o0f40abr-79y6vyybflfg.gif?w%3D632&sa=D&ust=1589657482380000">Star Emitting Light Towards Earth</a>
                                </Col>
                            </Row>
                        </td>
                    </TabPane>
                    <TabPane tab="Energy" key="2">
                        <p>Gravitational energy is constant throughout space. Although space is referred to as “zero gravity” there is in fact a gravitational force that keeps stellar objects like the moon in orbit around Earth. (NASA, 2011). Space is in constant motion as well. In our chart, kinetic energy has increased because the stellar object being observed is going away or toward Earth therefore increasing kinetic motion.</p>
                        <Row>
                            <Col span={11}>
                                <img src={require('./assets/energy_image_1.png')} alt="" width="100%"/>
                                <p className="smaller-text">Energy Bar Chart By Iyari</p>
                                <p className="smaller-text">Our initial position is observed before the object moves toward/away from Earth. The final position is observed after the object has moved toward/away from Earth.</p>
                            </Col>
                            <Col span={11} offset={2}>
                                <img src={require('./assets/energy_image_2.PNG')} alt="" width="100%"/>
                                <a className="cite-text" href="https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/1095/2016/11/03160320/OSC_Astro_17_04_Redshift.jpg">Electromagnetic Energy In Space - Doppler Effect</a>
                                <p className="smaller-text">Electromagnetic Energy is observed with waves of light. In our case, we will use electromagnetic energy in order to determine whether the stellar object is moving toward or away from Earth by the light that it is emitting.</p>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Force" key="3">
                        <p>The free body diagram seen below shows the object being pulled to Earth by the gravitational force on Earth, but since the object in space is light years away, the gravitational pull from the Earth is so miniscule that it doesn’t affect the trajectory of the object in space. It’s also important to note that Earth isn’t the only thing in space with a gravitational force, and that all objects in space are pulling this specific object. Once again however the force of gravity is so small that it doesn’t affect the object, which is still moving away from Earth and all other objects in space.</p>
                        <img src={require('./assets/force_image_1.jpg')} alt="" width="70%" height="auto"/>
                        <p className="smaller-text">Free Body Diagram of gravitational pull of Earth on stellar objects (by Dylan)</p>
                    </TabPane>
                    <TabPane tab="Written" key="4">
                        <p>The Doppler Effect works and is measured differently in space than it is measured here on Earth. On Earth, we measure the Doppler Effect with sound. Perhaps the pitch of a car coming towards you, or perhaps a person screaming running away from you. However, there are no sound waves in space therefore the Doppler Effect is measured with light wavelengths in space in order to measure the motions of entire objects. The Doppler effect occurs in space around stars and planets, as well as the sun, majority of the time. This stellar being may be orbiting around its center mass therefore causing it to move toward or away from Earth. The universe is constantly expanding, and stellar objects are constantly moving. In addition, there are many planets in the universe that we have not discovered in Earth. In fact, the Doppler Effect makes it easier to detect if a planet is in a certain location by using light wavelengths in order to detect it as well as to detect it’s motions.</p>
                    </TabPane>
                    <TabPane tab="Graphical" key="5">
                        <Row>
                            <Col span={11}>
                                <img src={require('./assets/graphical_image_1.png')} alt="" width="100%"/>
                                <p className="smaller-text">Charts made by Dylan using <a className="cite-text" href="https://www.google.com/url?q=https://www.chartgo.com/&sa=D&ust=1589657482385000">chartgo.com</a></p>
                                <p className="smaller-text">These data points were made up to show how an object in space would move over time. This data isn’t real, and more likely than not the object isn’t moving away at at the same speed constantly, but it is important because it shows that the object in space is moving away from Earth pretty linearly over a large number of years.</p>
                            </Col>
                            <Col span={11} offset={2}>
                                <img src={require('./assets/graphical_image_2.png')} alt="" width="100%"/>
                                <br/><br/>
                                <p className="smaller-text">The frequency of light seen by an observer is modeled by the equation:</p>
                                <img src={require('./assets/graphical_eqn_1.PNG')} alt="" width="100%"/>
                                <p className="smaller-text">
                                    Partial Credit to&nbsp;
                                    <a className="cite-text" href="https://pumas.nasa.gov/files/06_09_05_1.pdf">NASA</a>
                                    &nbsp;for part of the equation.
                                </p>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
                <br/><br/>
                <h3 id="p2-data-collection">A Data Collection Brainstorm</h3>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Description" key="1">
                        <p>It is not possible to mimic the conditions of space on Earth. Especially the energies involved, such as electromagnetic energy, without needing a spectroscope (Iyari would order one off amazon, if only it didn’t take a month to get here). However, we have decided we could do a lab of some sort in order to effectively collect data. For this, we have a website that would allow us to utilize a video in order to use Logger Pro to measure the distance between each wave. We will utilize a light source and move it toward or away from our makeshift Earth, all while taking a video of this. To make sure our data is accurate we will use a video on the NASA website of a star emitting light to Earth and measure distance, velocity, and waves with LoggerPro.</p>
                    </TabPane>
                    <TabPane tab="Steps" key="2">
                        <ol className="text-align-left">
                            <li>Prepare all materials. Prepare our makeshift Earth and star (Iyari)</li>
                            <li>Set up the Earth and the star(lightsource) (Dylan)</li>
                            <li>Move the light source toward the Earth (Dylan)</li>
                            <li>Record (Iyari)</li>
                            <li>Move the light source away from the Earth (Dylan)</li>
                            <li>Record (Iyari)</li>
                            <li>Upload all data to LoggerPro (Dylan and Iyari)</li>
                            <li>Garther all the data from LoggerPro and graph (Dylan and Iyari)</li>
                            <li>(such as the ones given in class in order to fully understand and come to a conclusion as well as to figure out and graph equations). (All Members)</li>
                            <li>Optimize data in order to interpret it</li>
                            <li>Interpret data and analyze it, come to a conclusion</li>
                        </ol>
                    </TabPane>
                    <TabPane tab="Materials" key="3">
                        <ul className="text-align-left">
                            <li>Makeshift Earth</li>
                            <li>Light Source (star)</li>
                            <li>Recording Device</li>
                            <li>LoggerPro</li>
                            <li>Computer (to load all the data into)</li>
                        </ul>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}