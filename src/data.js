const plan = require('./assets/portfolioImages/plan.png');
const team = require('./assets/portfolioImages/team.png');
const recip = require('./assets/portfolioImages/recipi.png');

const ProjectsData = [
  {
    id: "recip",
    img: recip,
    name: "RECIPporcity",
    stack: ["< RESTful API />", "< Bootstrap v5 />"],
    live: "Not yet!",
    source: "",
    description: "",
  },
  {
    id: "planner",
    img: plan,
    name: "Beautiful Planner",
    stack: ["<HTML5>", "< CSS3 />"],
    live: "Not yet!",
    source: "",
    description: "",
  }
];

const InprogressProjectsData = [
  {
    id: "team",
    img: team,
    name: "My Team",
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

