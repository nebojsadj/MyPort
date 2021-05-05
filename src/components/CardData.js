import shopImg from "../pictures/shop.png";
import weatherImg from "../pictures/WeatherImg.png";
import recipeImg from "../pictures/recipeImg.png";
import todoImg from "../pictures/todoImg.png";
import clubImg from "../pictures/clubImg.jpg";
import cafeImg from "../pictures/cafeImg.png";
import msImg from "../pictures/msImg.png";
import agronomImg from "../pictures/agronomImg.png";

export const cardData = [
  {
    id: 101,
    name: "Guitars shop",
    img: shopImg,
    badge: ["HTML", "CSS", "JavaScript", "React", "Redux", "React-bootstrap"],
    text:
      "Guitar Shop is my version of the web shop app. Works on the principle of SPA concept with rect router.",
    demo: "https://gallant-mcclintock-f46e86.netlify.app/",
    code: "https://github.com/nebojsadj/GuitarShop-React",
  },
  {
    id: 102,
    name: "Cafe",
    img: cafeImg,
    badge: ["HTML", "CSS", "JavaScript", "React", "Redux", "Bootstrap"],
    text:
      "There can be an unlimited number of tables in the cafe and each orders for himself and calculates the bill.",
    demo: "https://keen-khorana-bfc6c5.netlify.app",
    code: "https://github.com/nebojsadj/Cafe-React",
  },
  {
    id: 103,
    name: "Club members",
    img: clubImg,
    badge: ["HTML", "CSS", "JavaScript", "React", "Redux", "Bootstrap"],
    text:
      "This is a SPA where the CRUD concept is shown on the example of club members.",
    demo: "https://vigorous-wiles-0c9f71.netlify.app",
    code: "https://github.com/nebojsadj/ClubMembers-React",
  },
  {
    id: 104,
    name: "Metaluniver Stojanovic",
    img: msImg,
    badge: ["HTML", "CSS", "JavaScript", "React", "React-bootstrap", "EmailJs"],
    text: "A simple website made according to the client's requirements.",
    demo: "https://www.metaluniverstojanovic.rs",
    code: "https://github.com/nebojsadj/MetaluniverStojanovic",
  },
  {
    id: 105,
    name: "Agronom S",
    img: agronomImg,
    badge: ["HTML", "CSS", "JavaScript", "React", "React-bootstrap", "EmailJs"],
    text: "A classic website made according to the client's requirements.",
    demo: "https://www.agronoms.rs",
    code: "https://github.com/nebojsadj/AgronomS",
  },
  {
    id: 106,
    name: "Recipe",
    img: recipeImg,
    badge: ["HTML", "CSS", "JavaScript", "React", "Redux", "API", "Bootstrap"],
    text:
      "This application displays recipes, using API calls that are executed with Redux-thunk.",
    demo: "https://wonderful-mccarthy-7a8de1.netlify.app",
    code: "https://github.com/nebojsadj/Recipe-React",
  },
  {
    id: 107,
    name: "Todo",
    img: todoImg,
    badge: ["HTML", "CSS", "JavaScript", "React", "Redux", "React-bootstrap"],
    text: "A simple list to do, add new tasks, cross out and delete done ones.",
    demo: "https://silly-nightingale-523d98.netlify.app",
    code: "https://github.com/nebojsadj/Todo-React",
  },
  {
    id: 108,
    name: "Weather",
    img: weatherImg,
    badge: ["HTML", "CSS", "JavaScript", "React", "Redux", "API", "Bootstrap"],
    text:
      "This is a weather forecast as an exercise for API calls that are executed with Redux-thunk.",
    demo: "https://cocky-jepsen-bea8e8.netlify.app",
    code: "https://github.com/nebojsadj/Weather-React",
  },
];