const collage = require('./assets/portfolioImages/collage.png');
//const team = require('./assets/portfolioImages/team.png');
const recip = require('./assets/portfolioImages/recipi.png');

const ProjectsData = [
  {
    name: "RECIPporcity",
    id: "recip",
    img: recip,
    stack: ["< RESTful API />", "< Bootstrap v5 />"],
    live: "Not yet!",
    source: "https://github.com/mac-codes/Recipes-and-Cocktails",
    description: "",
  },
  {
    name: "Collagio",
    id: "collage",
    img: collage,
    stack: ["<HTML5>", "< CSS3 />", "<MERN/>"],
    live: "https://collagio.herokuapp.com/",
    source: "https://github.com/alexclaytonbootcamp/TeamAwesome",
    description: "",
  }
];

const InprogressProjectsData = [
];

const data = {
  ProjectsData,
  InprogressProjectsData
};

export default data;

