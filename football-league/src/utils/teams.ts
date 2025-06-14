const Base_URL  ='https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php';

export async function fetchTeams(league_id:number) {
    const response = await fetch(`${Base_URL}?id=${league_id}`);

    if (!response.ok){
        throw new Error('Failed to fetch teams');
    }

    const data = await response.json();
    
    return data.teams;
}