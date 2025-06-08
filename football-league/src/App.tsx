import {fetchTeams} from './utils/teams'
import LeagueNavbar from './components/LeagueNavbar'
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  type Team = {name:string, logo:string};
  type LeagueType = "Premier League" | "La Liga" | "Serie A" | "Bundesliga" | "Ligue 1"
  const [teams,setTeams] = useState<Team[]>([]);
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
    <>
     <LeagueNavbar 
    leagues={Object.keys(leaguesList) as LeagueType[]}
    onLeagueSelect={setLeague}/>
    <ul>
      {teams.map(team => (
        <li key={team.name}>
          {team.name}
        </li>
      ))}
    </ul>
    </>
   
  );
};

export default App
