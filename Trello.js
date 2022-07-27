import React from 'react'
import './trello.css';
import './plugins/fontawesome/css/font-awesome.min.css'
import img from './logo.png'
import img1 from"./hero.png"
import img2 from"./board.png"
import img3 from "./coinbase.svg"
import img4 from "./johnDeere.svg"
import img5 from "./Grand-Hyatt.svg"
import img6 from "./Google.svg"
import img7 from"./Visa (1).svg"
import img8 from"./Zoom.png"
import img9 from "./power-ups.png"
import img10 from "./automation.png"
import img11 from "./compass.svg"
import img12 from "./tag (1).svg"
import img13 from "./solutions.svg"
import img14 from"./card-back.svg"
import img15 from"./card-back.svg"
import img16 from "./ebay.svg"
import img17 from "./app-store.svg"
import img18 from "./play-store.svg"

const Trello = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
        <img src={img} ></img>
        </div>
        <ul>
            <li><a href='#'>Features<i className='fa fa-caret-down'></i></a></li>
            <li><a href='#'>Solutions
            <i className='fa fa-caret-down'></i></a></li>
            <li><a href='#'>Plans<i className='fa fa-caret-down'></i></a></li>
            <li><a href='#'>Pricing<i className='fa fa-caret-down'></i></a></li>
            <li><a href='#'>Resources<i className='fa fa-caret-down'></i></a></li> 
        </ul>
            <h3>log in</h3>
            <button>Get Trello for free</button>
      </nav>
      <div className='side1'>
        <img src={img1}></img>
        <div>
        <h1>Trello helps teams move work forward</h1>
        <p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
            <input type="text" placeholder='email' className='side2'/>
            <button className='side2'>sign up - its free</button>
            </div>
       </div>
       <div className='side3'>
        <h2>It’s more than work. It’s a way of working together.</h2>
        <p>Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
    <button>start doing</button>
    <div>
    <img src={img2}></img>
    </div>
    <div className='join'>
    <p>Join over 2,000,000 teams worldwide that are using Trello to get more done</p>
    </div>
          </div>
       
        <div className='side5'>
        <img src={img3}></img>
        <img src={img4}></img>
        <img src={img5}></img>
        <img src={img6}></img>
        <div className='move'>
        <img src={img7} ></img>
        <img src={img8}></img>
        </div>
       
       </div>
    <div className='side4'>
    <h2>
    Features to help your team succeed
    </h2>
    <p>Powering a productive team means using a powerful tool (and plenty of snacks). From meetings and projects to events and goal setting, Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
    </div>
    <div className='side6'>
      <div>
    <img src={img14}></img>
    </div>
    <div className='view'>
      <b><h3>CHOOSE A VIEW</h3></b>
      <h2>The board is just the beginning</h2>
      <p>Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more.</p>
      <h5>+ Learn more</h5>
    </div>
    </div>
    <div className='side7'>
    <div>
    <img src={img15}></img>
    </div>
    <div className='dive'>
      <b><h3>DIVE INTO THE DETAILS</h3></b>
      <h2>Cards contain everything you need</h2>
      <p>Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more</p>
      <h5>+ Learn more</h5>
      
    </div>
    </div>

    <div className='side8'>
      <div>
    <img src={img10}></img>
    </div>
    <div className='meet'>
      <b><h3>MEET YOUR NEW BUTLER</h3></b>
      <h2>No-code automation</h2>
      <p>Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team.</p>
      <h5>+ Learn more</h5>
    </div>
    </div>

    <div className='side9'>
    <div>
    <img src={img9}></img>
    </div>
    <div className='ups'>
      <b><h3>POWER-UPS</h3></b>
      <h2>Integrate top work tools</h2>
      <p>Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are covered.</p>
      <h5>+ Learn more</h5>
      
      </div>
      </div>
    <hr></hr>
    <div className='side10'>
      <div className='see'>
      <div>
        <img src={img12}></img>
        </div>
        <div>
        <h3>See Trello pricing</h3>
        <p>Whether you’re a team of 2 or 2,000, Trello can be customized for your organization. Explore which option is best for you.</p>
        <button>compare pricing</button>
        </div>
      </div>
      <div className='is'>
        <div>
        <img src={img11}></img>
        </div>
        <div>
      <h3>What is Trello?</h3>
      <p>Trello is the visual tool that empowers your team to manage any type of project, workflow, or task tracking.</p>
      <button>Tour Trello</button>
      </div>
      </div>
      
      <div className='dis'>
      <div>
        <img src={img13}></img>
        </div>
        <div>
      <h3>Discover Trello Enterprise</h3>
      <p>The productivity tool teams love, paired with the features and security needed for scale.</p>
      <button>Learn more</button>
      </div>
      </div>
    </div>
    <hr></hr>
    <div className='loves'>
      <div>
    <h2>"Everyone love it ;it has democratized our financial function.in some ways Trello sharttered hierarchy and brought us together"</h2>
    <p><b>BHARATH SUNDAR</b> - finance,ebay</p>
    <p>industry:<b>ecommerce</b></p>
    </div>
    <div>
      u  6fg 6 g6
    <img src={img16}></img>
    </div>
    </div>
    <div className='card'>
      <p>Sign up and get started with Trello today. A world of productive teamwork awaits!</p>
      <input type="text" placeholder='Email' />
            <button >sign up</button>
            </div>
            <div className='work'>
              <p>Trello also works great on your smaller screen.</p>
              <img src={img17}></img>
              <img src={img18}></img>
            </div>
            <div className='footer'>
              <div className='les'>
              <div className='logo'>
              <img src={img}></img>
              <p>Log in</p>
              </div>
              <div>
                <h4>About Trello</h4>
              <p>What's behind the boards.</p>
              </div>
              <div>
              <h4>Jobs</h4>
              <p>Learn about open roles on the Trello team. </p>
                </div>
                <div>
                <h4>Apps</h4>
              <p>Download the Trello App for your Desktop or Mobile devices.</p>
                </div>
                <div>
                <h4>Contact us</h4>
              <p>Needs anything? Get in touch and we can help.</p>
                </div>
                </div>
           
           <div className='line'>
            <hr></hr>
          </div>
          <div className='terms'>
            <h5>privacy policy</h5>
            <h5>Terms</h5>
            <h5>Cookie setting</h5>
            <h5>copyright@ 2022 Atlassian</h5>
            <div className='icon'>
            <i className='fa fa-instagram'></i>
            <i className='fa fa-facebook'></i>
            <i className='fa fa-twitter'></i>
            <i className='fa fa-youtube'></i>
            </div>
           </div>
            </div>
           
    </div>
  )
}

export default Trello
