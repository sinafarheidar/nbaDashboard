import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import API from "../../utils/API";
import PlayerCard from "../../components/PlayerCard/index"

export default function Players(props) {;
const [NBAPlayers, setNBAPlayers] = useState([])
const [teams, setTeams] = useState([])


useEffect(() => {
API.getPlayersByTeam(props.team)
.then(res => {
    setNBAPlayers(res.data)
})

}, [])

console.log(NBAPlayers)

const logoSetter = (currentTeam) => {
    if (currentTeam === "WAS") {
        return "https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg"
    } else if (currentTeam === "CHA") {
        return "https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg"
    } else if (currentTeam === "ATL") {
        return "https://upload.wikimedia.org/wikipedia/en/2/24/Atlanta_Hawks_logo.svg"
    } else if (currentTeam === "MIA") {
        return "https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg"
    } else if (currentTeam === "ORL") {
        return "https://upload.wikimedia.org/wikipedia/en/1/10/Orlando_Magic_logo.svg"
    } else if (currentTeam === "NY") {
        return "https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg"
    } else if (currentTeam === "PHI") {
        return "https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg"
    } else if (currentTeam === "BKN") {
        return "https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg"
    } else if (currentTeam === "BOS") {
        return "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg"
    } else if (currentTeam === "TOR") {
        return "https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg"
    } else if (currentTeam === "CHI") {
        return "https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg"
    } else if (currentTeam === "CLE") {
        return "https://upload.wikimedia.org/wikipedia/en/4/4b/Cleveland_Cavaliers_logo.svg"
    } else if (currentTeam === "IND") {
        return "https://upload.wikimedia.org/wikipedia/en/1/1b/Indiana_Pacers.svg"
    } else if (currentTeam === "DET") {
        return "https://upload.wikimedia.org/wikipedia/commons/7/7c/Pistons_logo17.svg"
    } else if (currentTeam === "MIL") {
        return "https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg"
    } else if (currentTeam === "MIN") {
        return "https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg"
    } else if (currentTeam === "UTA") {
        return "https://upload.wikimedia.org/wikipedia/en/0/04/Utah_Jazz_logo_%282016%29.svg"
    } else if (currentTeam === "OKC") {
        return "https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg"
    } else if (currentTeam === "POR") {
        return "https://upload.wikimedia.org/wikipedia/en/2/21/Portland_Trail_Blazers_logo.svg"
    } else if (currentTeam === "DEN") {
        return "https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg"
    } else if (currentTeam === "MEM") {
        return "https://upload.wikimedia.org/wikipedia/en/f/f1/Memphis_Grizzlies.svg"
    } else if (currentTeam === "HOU") {
        return "https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg"
    } else if (currentTeam === "NO") {
        return "https://upload.wikimedia.org/wikipedia/en/0/0d/New_Orleans_Pelicans_logo.svg"
    } else if (currentTeam === "SA") {
        return "https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg"
    } else if (currentTeam === "DAL") {
        return "https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg"
    } else if (currentTeam === "GS") {
        return "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg"
    } else if (currentTeam === "LAL") {
        return "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg"
    } else if (currentTeam === "LAC") {
        return "https://upload.wikimedia.org/wikipedia/en/b/bb/Los_Angeles_Clippers_%282015%29.svg"
    } else if (currentTeam === "PHO") {
        return "https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg"
    } else if (currentTeam === "SAC") {
        return "https://upload.wikimedia.org/wikipedia/en/c/c7/SacramentoKings.svg"
    }
}

  return (
      <Container style={{ backgroundColor: "#f5f6f7", maxHeight: "800px", overflow: 'auto'}}>
      <div>

      
          <br></br>
          <br></br>
          <Grid container spacing={3}>
          {NBAPlayers.map(player =>( 
              <Grid xs={6} md={6}>
             <PlayerCard firstName={player.FirstName} lastName={player.LastName} image={player.PhotoUrl} jerseyNum={player.Jersey} position={player.Position} height={player.Height} weight={player.Weight} logo={logoSetter(player.Team)} playerId={player.PlayerID}></PlayerCard>
             <br></br>
             </Grid>
           ))}
           </Grid>

      </div>
      </Container>
  );
}



