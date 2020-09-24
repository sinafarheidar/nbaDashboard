import axios from "axios";

export default {
      getAllPlayers: function() {
        return axios.get(`https://api.sportsdata.io/v3/nba/scores/json/Players?key=${sportsdataAPIKey2}`);
      },
      getPlayerPictures: function(firstName, lastName) {
        return axios.get(`https://nba-players.herokuapp.com/players/${lastName}/${firstName}`);
      },
      getAllTeams: function() {
        return axios.get(`https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=${sportsdataAPIKey2}`);
      },
      getSinglePlayer: function(playerId) {
        return axios.get(`https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStatsByPlayer/2020/${playerId}?key=${sportsdataAPIKey2}`);
      },
      getPlayersByTeam: function(team) {
        return axios.get(`https://api.sportsdata.io/v3/nba/stats/json/Players/${team}
        ?key=${sportsdataAPIKey2}`);
      },
}

const APIKey = "a7b61e5d9amshdc4c676bcbc07fep174c84jsnbe8d118fa742"
const sportsdataAPIKey= "dc53ec9cd68d481281fcb00c1de90ef4"
const sportsdataAPIKey2 = "b8ad70f67f0441148707fa59d89c2611"
