import React, { useState } from 'react';


const bigTenLogo ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Big_Ten_Conference_logo.svg/2560px-Big_Ten_Conference_logo.svg.png"
const michigan = { name: "University of Michigan", mascot: "Wolverines", record: "1004-353-36", primaryColor: "00274c", secondaryColor: "ffcb05", founded:"1817", passingYards: 3205, passingLeader:"J.J. McCarthy", rushingYards: 2536 ,rushingLeader: "Blake Corum",logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/130.png&h=200&w=200"};
const michigan_State = { name: "Michigan State University", mascot: "Spartans", record: "607-405-30", primaryColor: "18453b", secondaryColor: "ffffff", founded: "1855", passingYards: 32398, passingLeader:"Katin Houser", rushingYards: 1074 ,rushingLeader: "Nathan Carter",logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/127.png&h=200&w=200"};
const minnesota = { name: "University of Minnesota", mascot: "Golden Gophers", record: "733-543-44", primaryColor: "7a0019", secondaryColor: "ffcc33", founded: "1851", passingYards: 1864,passingLeader:"Athan Kaliakmanis", rushingYards: 2048 ,rushingLeader: "Jordan Nubin",logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/135.png&h=200&w=200"};
const wisconsin = { name: "University of Wisconsin", mascot: "Badgers", record: "737-513-52", primaryColor: "C5050C", secondaryColor: "ffffff", founded:"1848", passingYards: 2861,passingLeader:"Tanner Mordecai", rushingYards: 2095 ,rushingLeader: "Braelon Allen",logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/275.png&h=200&w=200" };
const illinois = { name: "University of Illinois", mascot: "Fighting Illini", record: "622-624-49", primaryColor: "13294B", secondaryColor: "E84A27", founded:"1867", passingYards: 3175,passingLeader:"Luke Altmyer", rushingYards: 2517 ,rushingLeader: "Reggie Love",logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/356.png&h=200&w=200" };
const indiana = { name: "University of Indiana", mascot: "Hoosiers", record: "482-690-38", primaryColor: "990000", secondaryColor: "EEEDEB", founded:"1820", passingYards: 2553,passingLeader:"Brendan Sorsby", rushingYards: 1451 ,rushingLeader: "Trent Howland",logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/84.png&h=200&w=200" };
const purdue = { name: "Purdue", mascot: "Boilermakers", record: "630-593-48", primaryColor: "CEB888", secondaryColor: "000000", founded:"1869", passingYards: 2534,passingLeader:"Hudson Card", rushingYards: 2025 ,rushingLeader: "Devin Mockobee",logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2509.png&h=200&w=200" };
const rutgers = { name: "Rutgers", mascot: "Scarlet Knights", record: "499-512-22", primaryColor: "cc0033", secondaryColor: "5f6a72", founded: "1766" , passingYards: 1788,passingLeader:"Gavin Wimsatt", rushingYards: 2193 ,rushingLeader: "Kyle Monangai", logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/164.png&h=200&w=200" };
const penn_State = { name: "Penn State University", mascot: "Nittany Lions", record: "908-401-37", primaryColor: "041E42", secondaryColor: "ffffff", founded: "1855", passingYards: 2795,passingLeader:"Drew Allar", rushingYards: 2407 ,rushingLeader: "Kaytron Allen", logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/213.png&h=200&w=200" };
const ucla = { name: "University of California, Los Angeles", mascot: "Bruins", record: "615-409-31", primaryColor: "2d68c4", secondaryColor: "f2a900", founded:"1881", passingYards: 2979,passingLeader:"Dante Moore", rushingYards: 2573 ,rushingLeader: "Carson Steele", logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/26.png&h=200&w=200" };
const usc = { name: "University of Southern California", mascot: "Trojans", record: "791-327-40", primaryColor: "990000", secondaryColor: "ffc72c", founded:"1880", passingYards: 4329,passingLeader:"Caleb Williams", rushingYards: 1737 ,rushingLeader: "MarShawn Llyod", logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/30.png&h=200&w=200" };
const oregon = { name: "University of Oregon", mascot: "Ducks", record: "627-469-34", primaryColor: "154733", secondaryColor: "fee123", founded: "1876", passingYards: 4857,passingLeader:"Bo Nix", rushingYards: 2583 ,rushingLeader: "Bucky Irving", logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2483.png&h=200&w=200" };
const washington = { name: "University of Washington", mascot: "Huskies", record: "669-438-2", primaryColor: "4b2e83", secondaryColor: "b7a57a", founded: "1861" , passingYards: 5155,passingLeader:" Michael Penix", rushingYards: 1776 ,rushingLeader: "Dillon Johnson", logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/264.png&h=200&w=200" };
const ohio_State = { name: "Ohio State University", mascot: "Buckeyes", record: "856-266-36", primaryColor: "BB0000", secondaryColor: "666666", founded: "1870" , passingYards: 3498,passingLeader:"Kyle McCord", rushingYards: 1805 ,rushingLeader: "TreVeyon Henderson", logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/194.png&h=200&w=200" };
const northwestern = { name: "Northwestern University", mascot: "Wildcats", record: "557-695-40", primaryColor: "4E2A84", secondaryColor: "FFFFFF", founded: "1851" , passingYards: 2626,passingLeader:"Ben Bryant", rushingYards: 1325 ,rushingLeader: "Cam Porter", logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/77.png&h=200&w=200" };
const maryland = { name: "University of Maryland", mascot: "Terrapins", record: "585-534-30", primaryColor: "E03A3E", secondaryColor: "FFD520", founded:"1856", passingYards: 3626,passingLeader:"Taulia Tagovailoa", rushingYards: 1409 ,rushingLeader: "Roman Hemby", logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/120.png&h=200&w=200" };
const nebraska = { name: "University of Nebraska", mascot: "Cornhuskers", record: "882-399-38", primaryColor: "e41338", secondaryColor: "000000", founded:"1869", passingYards: 1631,passingLeader:"Heinrich Haarberg", rushingYards: 2122 ,rushingLeader: "Heinrich Haarberg", logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/158.png&h=200&w=200" };
const iowa = { name: "University of Iowa", mascot: "Hawkeyes", record: "663-548-34", primaryColor: "FFCD00", secondaryColor: "000000", founded:"1847", passingYards: 1631,passingLeader:"Cade McNamara", rushingYards: 1635 ,rushingLeader: "Kaleb Johnon", logoURL:"https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2294.png&h=200&w=200" };

const collegeArray = [
  michigan, michigan_State, minnesota, wisconsin, illinois, indiana,
  purdue, rutgers, penn_State, ucla, usc, oregon, washington, ohio_State,
  northwestern, maryland, nebraska, iowa
];
collegeArray.sort();



const ButtonList = ({ objects, setTeam }) => {
  return (
    <div id="button-card">
      {objects.map(obj => (
        <button
          key={obj.name}
          onClick={() => setTeam(obj)}
          style={{
            backgroundColor: `#${obj.primaryColor}`,
            color: `#${obj.secondaryColor}`,
          }}
        >
          {obj.name}
        </button>
      ))}
    </div>
  );
};

const RushingCard = ({ object }) => {
  return (
    <div className="RushingCard" style={{ backgroundColor: `#${object.primaryColor}`, color: `#${object.secondaryColor}` }}>
      <h3>Rushing Leader: {object.rushingLeader}</h3>
      <h4>Team Rushing Yards: {object.rushingYards}</h4>
    </div>
  );
};

const PassingCard = ({ object }) => {
  return (
    <div className="PassingCard" style={{ backgroundColor: `#${object.primaryColor}`, color: `#${object.secondaryColor}` }}>
      <h3>Passing Leader: {object.passingLeader}</h3>
      <h4>Team Passing Yards: {object.passingYards}</h4>
    </div>
  );
};

export default function App() {
  const [My_team, setTeam] = useState(michigan);

  return (
    <div className="App">
      
      <h1>
      <img src = {bigTenLogo} alt="BIG TEN LOGO" width="90" height="35"></img>
      : Stat Keeper
        </h1>
      <ButtonList objects={collegeArray} setTeam={setTeam} />
      <div id="team-info">
        <h1>{My_team.name}</h1>
        <img src={My_team.logoURL} alt={`${My_team.name} logo`} width="150" height="100" />
        <h2>Go {My_team.mascot}</h2>
        <h2>Founded in {My_team.founded}</h2>
        <div id="team-stats">
          <RushingCard object={My_team} />
          <PassingCard object={My_team} />
        </div>
      </div>
    </div>
  );
}