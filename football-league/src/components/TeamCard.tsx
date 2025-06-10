import { Card } from "@mui/material";
type Team = { name: string; logo: string };
interface TeamCardProp {
  team: Team;
}
function TeamCard({ team }: TeamCardProp) {
  return (
    <Card sx={{ border: "1px solid black" , backgroundColor:"#f3efef"}}>
      <p>{team.name}</p>
      <img src={team.logo} alt={team.name} />
    </Card>
  );
}
export default TeamCard;
