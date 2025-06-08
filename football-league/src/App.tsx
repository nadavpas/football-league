import {fetchTeams} from './utils/teams'
import './App.css'
import { useState } from 'react';

function App() {
  const [teams,setTeams] = useState([]);
  const [league,setLeague] = useState("Premier League");
  const leaguesList = {
    "Premier League": 4328,
    "La Liga": 4335,
    "Serie A": 4332,
    "Bundesliga": 4331,
    "Ligue 1": 4334
  };


  return (
    <ul>
      {Object.keys(leaguesList).map(league => (
        <li>{league}</li>
      ))}
    </ul>
  )
}

export default App
