import './App.css';
import { HashRouter as Router, Route , Switch } from 'react-router-dom';
import SpatialNavigation from "react-js-spatial-navigation";

import {Container,Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainScreen from './MainScreen';
import PreviewScreen from './PreviewScreen'
import Logo from './Logo';
import SideBar from './SideBar';
import Player from './Player';
import Search from './Search';
import Favorites from './Favorites';
import PlayerScreen from "./PlayerScreen";
import Video from './Video'
function App() {
  // $(document).keydown(function(e) {
  //   console.log("hassan")
  // }

  return (
    // <Router>
    //   <Switch>
    //   <Route path="/" exact component={MainScreen}/>
    //   <Route path="/PreviewScreen" component={PreviewScreen}/>
    //   </Switch>
    // </Router>



    <div className="App">
      <Container fluid>
        <Row>
        
            <Router>
            <Col md='3' className="p-0 sideContent">
            <SpatialNavigation>
            <SideBar/>
            </SpatialNavigation>
            </Col>
            <Col md='9' className="p-0 mainContent" style={{position:'relative'}}>
              <Logo/>
            <SpatialNavigation>

              <Switch>
                <Route path="/" exact component={MainScreen}/>
                <Route path="/PreviewScreen" component={PreviewScreen}/>
                <Route path="/Player" component={Video}/>
                <Route path="/Search" component={Search}/>
                <Route path="/favorites" component={Favorites}/>
                <Route path="/updatePlayer" component={PlayerScreen}/>
                {/* <Route path="/video" component={Video}/> */}

              </Switch>
            </SpatialNavigation>
            
             </Col>

            </Router>
      
         </Row>
       </Container>
     </div>
    
  );
}

export default App;
