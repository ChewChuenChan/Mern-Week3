import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';

import StyledBox from './Components/StyledBox';

                
function App() {
  return (
    <StyledBox bgColor= "#dddddd" height= "600px" width="870px">
      <Header bgColor="#60a84f" height="150px" width="845px"/>
      <Navigation bgColor="#6fa8dc" height="300px" width="200px"/>
      <Main/>
    </StyledBox>
  );
}
                
export default App;

