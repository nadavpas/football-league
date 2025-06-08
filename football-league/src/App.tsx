import {fetchTeams} from './utils/teams'
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  type LeagueType = "Premier League" | "La Liga" | "Serie A" | "Bundesliga" | "Ligue 1"
  const [teams,setTeams] = useState([]);
  const [league,setLeague] = useState<LeagueType>("Premier League");
  const leaguesList: Record<LeagueType,number> = {
    "Premier League": 4328,
    "La Liga": 4335,
    "Serie A": 4332,
    "Bundesliga": 4331,
    "Ligue 1": 4334
  };

  useEffect(()=>{
    const loadTeams = async () => {
      try{
        const league_id:number = leaguesList[league];
        const teamsData = await fetchTeams(league_id);
        const teams_dict = teamsData.map((team: any) => ({
        name: team.strTeam,
        logo: team.strLogo
    }));
        setTeams(teams_dict);
      }catch(e){
        console.log(e)
      }
    };
    loadTeams();
  },[league])


  return (
    <ul>
      {Object.keys(leaguesList).map(l => (
        <li key={l} onClick={()=> {
          setLeague(l as LeagueType);
          console.log(teams)
        }}>{l}</li>
      ))}
    </ul>
  )
}

export default App
