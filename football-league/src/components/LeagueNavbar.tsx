import type { LeagueType } from "../Types";
import '../styles/LeagueNavbar.css'
interface LeagueNavbarProps { 
    leagues: LeagueType[],
    onLeagueSelect: (league: LeagueType) => void
};
function LeagueNavbar({leagues,onLeagueSelect} : LeagueNavbarProps){
    return (
        <nav>
            {leagues.map(league => (
                <button key={league} onClick={() => onLeagueSelect(league) }> 
                    {league}
                </button>
            ))}
        </nav>
    );
};
export default LeagueNavbar;   