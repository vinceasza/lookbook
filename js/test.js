function Team(name, attack,midfield,defence){
  this.name = name;
  this.attack = attack;
  this.midfield = midfield;
  this.defence = defence;

  this.display = function(){
    console.log(this.name);
  }
}

var b = new Team('Brentford',10,11,11);
var s = new Team('Swansea',14,14,14);

function Match(homeTeam, awayTeam){
  this.homeTeam = homeTeam;
  this.awayTeam = awayTeam;

  var homeShots = Math.round(this.homeTeam.midfield * Math.random() + 3);
  var awayShots = Math.round(this.awayTeam.midfield * Math.random());
  console.log(homeShots, awayShots);
  var homeGoals = 0;
  for (var i = 0; i < homeShots; i++){
    homeAttack = this.homeTeam.attack * Math.random();
    awayDefence = this.awayTeam.defence * Math.random() + 7;
    if (homeAttack > awayDefence){
      homeGoals += 1;
    }
  }
  var awayGoals = 0;
  for (var i = 0; i < awayShots; i++){
    awayAttack = this.awayTeam.attack * Math.random();
    homeDefence = this.homeTeam.defence * Math.random();
    if (awayAttack > homeDefence){
      awayGoals += 1;
    }
  }
  this.getScore = function(){
    console.log(homeGoals, awayGoals);
  }
}

var m = new Match(b,s);
m.getScore();











function getRandomNumber(l){
  var num = Math.floor((Math.random() * l) + 1);
  return num;
}

function getScore(){
  var random = getRandomNumber();
}

function getTeams(){
  var teams = [];
  $.getJSON('teams.json', function(response){
    for (var i = 0; i < response.length; i++){
      teams.push(response[i]);
    }
    getHomeTeam(teams);
  });
}

function getHomeTeam(teams){
  var l = teams.length ;
  var r = getRandomNumber(l);
  var homeTeam = teams[r - 1];
  delete teams[r - 1];
  getAwayTeam(teams);
  calcAttacks(homeTeam);
}

function getAwayTeam(teams){
  var l = teams.length ;
  var awayTeam;
  while (awayTeam == undefined){
    var rr = getRandomNumber(l);
    awayTeam = teams[rr - 1];
  }
  calcAttacks(awayTeam);

}

function calcAttacks(team){
  var control = team.midfield;
  var n = Math.floor(getRandomNumber(10));
  var attacks = control * n;
}

function displayTeams(teams){
  for (var i = 0; i < teams.length; i++){

  }

}

getTeams();


//midfield score x random = number of attacks they have
//team 1 has 7 attacks and Team 2 has 4
//for each attack
     // if attack score * random number > def score * rand num
        //goal to team 1  elseno goal


//databse table of teams, leagues, matches
//teams: name, def,mid,attack, league id
//matches match_id, home_team_id, away_team_id, home_score, away_score
//SELECT home_team_id FROM matches WHERE home_score > away_score
//display teams in table
//sort by points
//table played, scored, conceded, points

//generate fixtures

//calculate scores for each fixture
//on click calculate scores
