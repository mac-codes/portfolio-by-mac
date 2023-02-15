const plan = require('./assets/portfolioImages/plan.png');
const team = require('./assets/portfolioImages/team.png');
const recip = require('./assets/portfolioImages/recipi.png');

const ProjectsData = [
  {
    name: "RECIPporcity",
    id: "recip",
    img: recip,
    stack: ["< RESTful API />", "< Bootstrap v5 />"],
    live: "Not yet!",
    source: "",
    description: "",
  },
  {
    name: "Beautiful Planner",
    id: "planner",
    img: plan,
    stack: ["<HTML5>", "< CSS3 />"],
    live: "Not yet!",
    source: "",
    description: "",
  }
];

const InprogressProjectsData = [
  {
    name: "My Team",
    id: "team",
    img: team,
    stack: ["< NodeJS />"],
    live: "",
    source: "",
    description: "",
  }
];

const data = {
  ProjectsData,
  InprogressProjectsData
};

export default data;

