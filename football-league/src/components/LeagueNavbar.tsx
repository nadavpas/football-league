
type LeagueType = "Premier League" | "La Liga" | "Serie A" | "Bundesliga" | "Ligue 1"
interface LeagueNavbarProps { 
    leagues: LeagueType[],
    onLeagueSelect: (league: LeagueType) => void
};
function LeagueNavbar({leagues,onLeagueSelect} : LeagueNavbarProps){
    return (
        <nav style={{position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: '#f8f8f8',
            padding: '10px',
            borderBottom: '1px solid #ccc',
            display: 'flex',
            justifyContent: 'flex-start'}}>
            {leagues.map(league => (
                <button key={league} onClick={() => onLeagueSelect(league) }> 
                    {league}
                </button>
            ))}
        </nav>
    );
};
export default LeagueNavbar;   