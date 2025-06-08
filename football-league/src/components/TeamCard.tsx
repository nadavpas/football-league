import React from "react";
import { Card,CardContent, Typography, Avatar, Box } from "@mui/material";
type Team = {name:string, logo:string};
interface TeamsCardProp {
    team: Team
};
const TeamCard: React.FC<TeamsCardProp> = ({team}) => {
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