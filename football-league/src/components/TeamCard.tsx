import { Card } from "@mui/material";
import "../styles/TeamCard.css";
type Team = { name: string; logo: string };
interface TeamCardProp {
  team: Team;
}
function TeamCard({ team }: TeamCardProp) {
  return (
    <Card className="card">
      <p>{team.name}</p>
      <img
        style={{ height: "20vh", width: "20vw" }}
        src={team.logo}
        alt={team.name}
      />
    </Card>
  );
}
export default TeamCard;
