import logo from './logo.svg';
import './App.css';
import Funcomp from './components/funcomp';
import Clcomp from './components/Classcomp';
import HeaderCom from './components/Headercomp';
import ArrayComp from './components/Arraycomp';
import Tableof6 from './components/Tablecmp';
import Factnum from './components/props1';
import DisArr from './components/props2';
import EmpInfo from './components/props3';
import Statechange from './components/state1';
import Paracng from './components/state2';
import Counts from './components/state3';
import ImgState from './components/state4';
import Displayar from './components/state5';
import StateForm from './components/Loginform';
import Form2 from './components/Form2';
import Timer1 from './components/timer';
import { Link, Route, Routes } from 'react-router-dom';
import Localstorage from './components/Localstorage';
import JsonPlaceholder from './components/reactcompo1';
import Empserver from './components/reactcompo2';
import PostEmp from './components/reactcompo3';
import AboutUs from './project/about';
import Privacypolicy from './project/policy';
import TermsAndconditions from './project/terms';
import FAQS from './project/faq';
import Login from './project/login';
import UpdatePassword from './project/pass';
import Home from './project/home';
import { useSelector } from 'react-redux';
import LogoutComp from './project/LogoutComp';
import First from './project/first';
import Register from './project/regstration';


function App() {
  const mystate = useSelector(state=> state.logged)
  return (
    <div className='App'>
      <header>
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>WELCOME DHIRU</h1>
        <Funcomp/>
        <Clcomp/>
        <HeaderCom/>
        <ArrayComp/>
        <Tableof6 />
        <Factnum num="5"/>
        <DisArr nmarr= {["Dhiru","Aditya","Om","Shubham","Abhi","Rajat"]}/>
        <EmpInfo e1={[{eid:101,name:"Ram",salary:15000},{eid:102,name:"Sham",salary:5000},{eid:103,name:"Ravan",salary:150000}]}/>
        <Statechange/>
        <Paracng/>
        <Counts/>
        <ImgState/>
        <Displayar nm= {["Dhiru","Aditya","Om","Shubham","Abhi","Rajat"]}/>
        <StateForm/>
        <Form2/>    
        <Timer1/>
        <ul className='nav navbar bg-warning'>
          <li className='nav item'>
              <Link to="/home" className='nav link'>HOME</Link>
          </li>
          <li className='nav item'>
              <Link to="/imgstate">IMG State</Link>
          </li>
          <li className='nav item'>
              <Link to="/loginform">Login form</Link>
          </li>
          <li className='nav item'>
              <Link to="/localstorage">Local</Link>
          </li>
          <li className='nav item'>
              <Link to="/json">JSON assig</Link>
          </li>
          <li className='nav item'>
              <Link to="/emp">Emp from server</Link>
          </li>
          <li className='nav item'>
              <Link to="/insertdata"> Insert Emp </Link>
          </li>
        </ul>

        <Routes>
          <Route path='/home' element={<Funcomp/>}/>
        </Routes>
        <Routes>
          <Route path='/imgstate' element={<ImgState/>}/>
        </Routes>
        <Routes>
          <Route path='/loginform' element={<StateForm/>}/>
        </Routes>
        <Routes>
          <Route path='/localstorage' element={<Localstorage/>}/>
        </Routes>
        <Routes>
          <Route path='/json' element={<JsonPlaceholder/>}/>
        </Routes>
        <Routes>
          <Route path='/emp' element={<Empserver/>}/>
        </Routes>
        <Routes>
          <Route path='/insertdata' element={<PostEmp/>}/>
  </Routes>*/}
  <div style={{display: mystate.loggedIn?"none":"block"}}>
<ul className='nav navbar '>
            <li className='nav-item' style={{marginLeft:"1400px"}}><Link to="/loginpage">Login</Link></li>
            <li className='nav-item' style={{ marginLeft:"10px"}}><Link to="/regstration">Register</Link></li>
            {/*<li className='nav-item' style={{ marginLeft:"10px"}}><Link to="/updatePass">Update Password</Link></li>*/}

</ul>
            <h1 className='text-danger'>BUILDMART</h1>
            <h3 className='text-info'>Smart Building Material Management Website</h3>
                <ul className='nav navbar bg-dark '>
                        <li className='nav-item' style={{marginLeft:100}}><Link to="/aboutus">About us</Link></li>
                        <li className='nav-item'><Link to="/termsandconditions">Terms and Conditions</Link></li>
                        <li className='nav-item'><Link to="/privacypolicy">Privacy Policy</Link></li>
                        <li className='nav-item' style={{marginRight:100}}><Link to="/faqs">FAQS</Link></li>
                </ul>
</div>
           

      <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/termsandconditions" element={<TermsAndconditions />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/faqs" element={<FAQS/>} />
          <Route path="/loginpage" element={<Login />} />
          <Route path="/regstration" element={<Register />} />
          <Route path="/updatePass" element={<UpdatePassword />} />
          <Route path="/home" element={<Home />} >
          <Route path="logout" element={<LogoutComp/>} />
          </Route>
          <Route path="/" element={<First />} />
      </Routes>
     
      </header>
    </div>
  );
}

export default App;

