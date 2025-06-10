import { Card } from "@mui/material";
type Team = { name: string; logo: string };
interface TeamCardProp {
  team: Team;
}
function TeamCard({ team }: TeamCardProp) {
  return (
    <Card
      sx={{
        border: "1px solid black",
        backgroundColor: "#f3efef",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
