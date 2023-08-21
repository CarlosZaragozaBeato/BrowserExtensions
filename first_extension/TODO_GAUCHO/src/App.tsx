import React, { useState } from 'react';
import Header from './components/Header';
import './index.css';
import { TodoContext, tipos } from './Context/TodoContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './util/Routes';
import Home from './pages/Home';
import Options from './pages/Options';



function App() {

    const [route, setRoute] = useState<string>(ROUTES.HOME)

    let valores:tipos ={
      route,
      setRoute
    }

  return (

    <>
        <Header />
          <Router>
            <TodoContext.Provider value={valores}>
              <Routes>
                <Route path={ROUTES.HOME} element= {<Home/>}/>
                <Route path={ROUTES.OPTIONS} element= {<Options/>}/>
              </Routes>
              </TodoContext.Provider>
          </Router>
      </>
  );
}

export default App;
