import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PlayersPage from "./pages/PlayersPage/index"
import TeamNav from "./components/TeamNav/TeamNav"
import NavBar from "./components/Navbar"
import PlayerInfo from "./components/PlayerInfo/index"

function App() {
  return (
    <Router>
        <div>
          <NavBar></NavBar>
          <Route path="/" component={TeamNav} />
        </div>
      </Router>
  );
}

export default App;
