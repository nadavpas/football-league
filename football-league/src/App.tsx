import { fetchTeams } from "./utils/teams";
import LeagueNavbar from "./components/LeagueNavbar";
import TeamCard from "./components/TeamCard";
import "./App.css";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import type { TeamType,LeagueType } from "./Types";
function App() {
  
  // states declerations
  const [teams, setTeams] = useState<TeamType[]>([]);
  const [league, setLeague] = useState<LeagueType>("Bundesliga");
  // init a dict containing name -> id
  const leaguesList: Record<LeagueType, number> = {
    "Premier League": 4328,
    "La Liga": 4335,
    "Serie A": 4332,
    "Ligue 1": 4334,
    Bundesliga: 4331,
  };
  // useEffect thet will trigger the get request on each league selection
  useEffect(() => {
    const loadTeams = async () => {
      try {
        const league_id: number = leaguesList[league];
        const teamsData = await fetchTeams(league_id);
        const teams_dict = teamsData.map((team: any) => ({
          name: team.strTeam,
          logo: team.strLogo,
        }));
        setTeams(teams_dict);
      } catch (e) {
        console.log(e);
      }
    };
    loadTeams();
  }, [league]);

  return (
    <>
      <LeagueNavbar
        leagues={Object.keys(leaguesList) as LeagueType[]}
        onLeagueSelect={setLeague}
      />
      <Grid container spacing={2} sx={{ paddingTop: 3 }}>
        {teams.map((t) => (
          <Grid size={6} sx={{ padding: 2 }}>
            <TeamCard team={t as TeamType} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
