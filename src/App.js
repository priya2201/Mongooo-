import './App.css';
import React,{lazy,Suspense} from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import 'semantic-ui-react'
import HomeComp from './components/HomeComp';
import AboutComp from './components/AboutComp';
import Loading from './components/Loading';
import Loader2 from './components/Loader2';
// import PortalDemo from './components/PortalDemo';

import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import {Link} from 'react-router-dom';

import LoadingFromComment from './components/LoadingFromComment';
import BlogDetails from './components/BlogDetails';
import DummyData from './components/DummyData';
import NotFound from './components/NotFound';
import Basic from './components/Basic'
import ImageFile from './components/ImageFile';
import Create from './components/create'
import Update from './components/update';
import Read from './components/read'
import FragmentDemo from './components/FragmentDemo';
import Table  from './components/Table';
import ParentComp from './components/parentComp';
import Pcomp from './components/Pcomp';
import Albums from './practiceComponents/albums';
// import MyComp from './components/MyComp'
const MyComp=lazy(()=> import ('./components/MyComp'))

function App() {
  return (
    <Router>
        {/* <h1>Router exmaple</h1>
        <ul>
          <li>
            <Link to="/">LoadingFromComment</Link>
          </li>
          <li>
            <Link to="/about">About</Link>

          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/me">DummyData</Link>
          </li>
          <li>
            <Link to="/blogs/:id">BlogDetails</Link>
          </li> */}
          {/* <li>
            <Link to="*">NotFound</Link>
          </li> */}
        {/* </ul> */}


    <div>
      {/* <Switch>
    <Route exact path="/" component={LoadingFromComment} />
      <Route path="/about" component={About} />
      <Route path="/me" component={DummyData}/>
      <Route path="/contact" component={Contact} />
      <Route path="/blogs/:id" component={BlogDetails}/>
      <Route path="*" component={NotFound}/> 

      </Switch> */}
      <Basic/>
      <ImageFile/>
      <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <div>
        <Route exact path="/create" component={Create}/>
      </div>
      <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>

        <Route path='/update' component={Update} />
        </div>
    </div>
<FragmentDemo/>
<Table/>
{/* <PureComp/> */}
<ParentComp/>
<Pcomp/>
<Albums/>
<div>Another comp</div>
<Suspense fallback={<div>Loading .....</div>}><MyComp/>
</Suspense>
</Router>
  // {/* <HomeComp/> */}
  // {/* <AboutComp/> */}
  // {/* // <Loading/>
  // <Loader2/>  */}
  
      // <Switch>
      // <Route exact path="/" component={Home} />
      // <Route path="/about" component={About} />
      // <Route path="/contact" component={Contact} />
      // </Switch> */}
  // {/* </Router> */}
  // {/* <Address/> */}
  // {/* <Loading/> */}
  // {/* <Loader2/> */}
  // <LoadingFromComment/>

    );

  

}


export default App;
