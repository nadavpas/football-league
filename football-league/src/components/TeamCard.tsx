
import { Card,CardContent, Typography, Avatar, Box } from "@mui/material";
type Team = {name:string, logo:string};
interface TeamCardProp {
    team: Team
};
function TeamCard({team} : TeamCardProp){
    return (
        <Card>
            <CardContent>
                <Box sx={{display: 'flex', alignItems:'center'}}>
                    <Avatar src={team.logo} alt={team.name}>
                        <Typography variant="h6" component="h2">
                            {team.name}
                        </Typography>
                     </Avatar>
                </Box>
            </CardContent>
        </Card>
    );
};
export default TeamCard