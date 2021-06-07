import React from 'react'
import "./style5.css";
import video from './images/video.mp4'
import image68 from './images/68.jpg'
import image69 from './images/69.jpg'
import image70 from './images/70.jpg'
import image71 from './images/71.png'
import image72 from './images/72.png'
import image73 from './images/73.jpg'
import image74 from './images/74.png'
import image75 from './images/75.PNG'
import image110 from './images/110.jpg'





export default function Unreal() {
    return (
        <>
            <div className="section">
                <video autoPlay loop muted className="vdd">
                    <source src={video} />
                  </video>
                   <h1 className="h10">The World's Most Open and Advance real time 3D Creation</h1>
              </div>


            <div className="container43">

            <strong><h1 id="h43">Create without limits</h1></strong>  
                  <p id="h433">With Unreal Engine, you can 
                    experiences to life using the world’s most advanced real-time 3D creation tool.bring amazing real-time 
                     From first projects to the most demanding challenges, our free and accessible resources and inspirational community 
                    empower everyone to realize their ambitions.</p>


                   <div className="content43" >
                

                    <ul id="ul12">
                    <li>
                            <h3  id="h4333">Learn Unreal Engine</h3>
                            <p  id="p43">With over 160 hours of free online learning content, an extensive library of webinars, and options for 
                                instructor-led training, we have a way to learn that's right for you.</p>
                                <button id="btnn12">Start Learning</button>

                        </li>


                        <li id="li433">
                            <h3 id="h4333">Join The Community</h3>
                            <p  id="p43">Unreal creators are the true power behind Unreal Engine. Be part of a community 
                            that builds cutting-edge experiences, and supports each other along the way.</p>

                                <button id="btnn12">View community</button>

                        </li>


                        <li id="li433">
                            <h3 id="h4333">Get Supported</h3>
                            <p  id="p43">With over 160 hours of free online learning content, an extensive library of webinars, and options for 
                                instructor-led training, we have a way to learn that's right for you.</p>
                                <button id="btnn12" >Get Support option</button>

                        </li>
                    </ul>


                </div>
            </div>


            <div className="container44">
                <div className="content44">
                    <h1  id="h44">The latest from Unreal Engine</h1>
                    <div className="subcontent44">
                        <div className="contentss">
                    <img src={image68}  id="img44"/>
                 <b><h3  id="h444">MetaHuman Creator Early Access now available!</h3></b> 
                    <p id="p44">Have you been waiting to get your hands on MetaHuman Creator? Now’s your opportunity to join the 
                       Early Access program and start creating your own unique high-fidelity digital humans in minutes. Plus, 
                       get over 50 free, ready-made MetaHumans on Quixel Bridge!</p>
                       </div>

                   
                       <div className="contentss">
                    <img src={image69} id="img44"/>
                 <b><h3 id="h444" >MetaHuman Creator Early Access now available!</h3></b> 
                    <p id="p44">Have you been waiting to get your hands on MetaHuman Creator? Now’s your opportunity to join the 
                       Early Access program and start creating your own unique high-fidelity digital humans in minutes. Plus, 
                       get over 50 free, ready-made MetaHumans on Quixel Bridge!</p>
                       </div>
                    </div>
                </div>

            </div>


            <div className="container45">
              <img src={image110}  id="img45"/>
           
            <div className="content45">
            <h1 className="h45"> A thriving community of creators</h1>
            <p className="p45">Creators and developers around the world hone their real-time skills in remarkable, groundbreaking ways. 
                Check out some of our favorite recent projects from real Unreal Engine users across industries.</p>
                <button  className="btnn45">Get Support option</button>
            </div>  

            <div className="img45">
                <ul className="ul45">
                    <li id="li455">
                        <img src={image70} className="image45"/>
                        <h5  id="h45">Forgotten</h5>
                        <p  id="p45">By Aspn</p>
                        <div className="subb45">
                       <img src={image73}  id="img455"/></div>
                        
                       
                    </li>

                    <li id="li456">
                        <img src={image71} className="image46"/>
                        <h5 id="h45">Forgotten</h5>
                        <p id="p45">By Aspn</p>
                        <div className="subb45">
                       <img src={image74}  id="img456"/></div>
                        
                       
                    </li>

                    <li id="li455">
                        <img src={image72} className="image45"/>
                        <h5 id="h45">Forgotten</h5>
                        <p id="p45">By Aspn</p>
                        <div className="subb45">
                       <img src={image75} id="img455"/></div>
                        
                       
                    </li>
                </ul>
            </div>
            

            </div>

            


        </>
    )
}
