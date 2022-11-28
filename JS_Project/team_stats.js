const team = {
    _players : [
      {
        firstName : 'Moussa',
        lastName : 'Sene',
        age : 20
      },
      {
        firstName : 'Demba',
        lastName : 'Toure',
        age : 19
      },
      {
        firstName : 'Issa',
        lastName : 'kebe',
        age : 22
      }
    ],
    _games : [
      {
        opponent : 'Manchester',
        teamPoints : 20,
        opponentPoints : 15
      },
      {
        opponent : 'Senegal',
        teamPoints : 10,
        opponentPoints : 25
      },
      {
        opponent : 'Barcelone',
        teamPoints : 13,
        opponentPoints : 19
      }
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      const player = {
        firstName : newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      const game = {
        opponent : newOpponent,
        teamPoints : newTeamPoints,
        opponentPoints : newOpponentPoints
      }
      this._games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  team.addGame('Titans', 100, 98);
  console.log(team.games);