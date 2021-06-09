import './App.css';
import Header from './componets/Header.js'
import Contents from "./componets/Contents.js";
import Contents1 from "./componets/Contents1.js";
import FAQ from "./componets/FAQ.js";
import Help from "./componets/Help.js";
import Unreal from "./componets/Unreal.js";
import Sign from "./componets/Sign.js";
import Footer from "./componets/Footer.js";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";




function App() {
  return (
    <>
    <Router>
    <Header/>
      
   <Switch>

  
   <Route exact path="/Epic-Games">
   <Contents/></Route>
   
   <Route exact path="/Contents1">
   <Contents1/></Route>

   <Route exact path="/FAQ">
   <FAQ/></Route>


   <Route exact path="/Help">
       <Help/></Route>


       <Route exact path="/Unreal">
       <Unreal/></Route>

       <Route exact path="/Sign">
       <Sign/></Route>
   
   </Switch>
   <Footer/>

  
   </Router>


   
    </>
    
  );
}

export default App;
