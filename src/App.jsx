import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';



const App = () => {


  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<HomeScreen/>}/>
          <Route exact path="/:taskTitle" element={<DetailsScreen/>}/>
      </Routes>
    </Router>
  )
}

export default App
