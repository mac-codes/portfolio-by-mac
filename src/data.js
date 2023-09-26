const collage = require('./assets/portfolioImages/collage.png');
const stick = require('./assets/portfolioImages/stick.jpg');
const recip = require('./assets/portfolioImages/recipi.png');

const ProjectsData = [
  {
    name: "RECIPporcity",
    id: "recip",
    img: recip,
    stack: ["< RESTful API />", "< Bootstrap v5 />"],
    live: "Not yet!",
    source: "https://github.com/mac-codes/Recipes-and-Cocktails",
    description: "Most of the time I am at a loss for what to eat for dinner. With RECIProcity I immediately have a random drink and dinner recipe at my fingertips!",
  },
  {
    name: "Collagio",
    id: "collage",
    img: collage,
    stack: ["<HTML5 />", "< CSS3 />", "<MERN/>"],
    live: "https://collagio.herokuapp.com/",
    source: "https://github.com/alexclaytonbootcamp/TeamAwesome",
    description: "Have you noticed every social media site is turning into the same thing? Collagio is different! Post pictures and organize them in a fun way to keep forever.",
  }
];

const InprogressProjectsData = [
  {
    name: "DAD jokes (name in development)",
    id: "dad",
    img: stick,
    stack: ["< C# />", "< .NET />"],
    live: "https://mac-codes.github.io/jokes/",
    source: "https://github.com/mac-codes/dadjokes",
    description: "",
  }
];

const data = {
  ProjectsData,
  InprogressProjectsData
};

export default data;

