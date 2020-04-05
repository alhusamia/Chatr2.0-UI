import aye from "../assets/images/aye.jpg";
import dumbooctopus from "../assets/images/dumbooctopus.jpg";
import Hedgehog from "../assets/images/Hedgehog.jpg";
import lazga from "../assets/images/lazga.jpg";
import panda from "../assets/images/panda.jpg";
import squirrel from "../assets/images/squirrel.jpg";
import cat from "../assets/images/cat.jpg";
import HPmeme from "../assets/images/HPmeme.jpg";
import pug from "../assets/images/pug.jpg";
import Potato from "../assets/images/Potato.jpg";
import Crazy from "../assets/images/Crazy.jpg";
import Mansaf from "../assets/images/Mansaf.jpg";

const data = [
  { id: "Animals you didn't know exists", fact: "Aye-aye", img: aye },
  {
    id: "Animals you didn't know exists",
    fact: "Dumbo Octopus",
    img: dumbooctopus,
  },
  {
    id: "FACT",
    fact: " Where can you buy best customised clothes? Lazga",
    img: lazga,
  },
  {
    id: "Fun Fact #Relatable",
    fact:
      "Pandas don't have a particular sleeping spot; they simply fall asleep wherever they happen to be",
    img: panda,
  },
  {
    id: "Fun Fact",
    fact:
      "Squirrels plant thousands of new trees each year by merely forgetting where they put their acorns.",
    img: squirrel,
  },
  {
    id: "Fact",
    fact: " SOME CATS ARE ALLERGIC TO HUMANS.",
    img: cat,
  },
  {
    id: "Harry Potter fans will relate",
    fact: "",
    img: HPmeme,
  },
  {
    id: "Just a random pug picture",
    fact: "Because I love pugs",
    img: pug,
  },
  {
    id: "Just a random hedgehog picture",
    fact: "Because look how cute they are",
    img: Hedgehog,
  },
  {
    id: "Kortoshka Fact",
    fact: "",
    img: Potato,
  },
  {
    id: "",
    fact: "",
    img: Crazy,
  },
  {
    id: "Traditional Jordanian sish",
    fact: "Because it's yummy",
    img: Mansaf,
  },
];

export default (n = 1) => data.sort(() => 0.5 - Math.random()).slice(0, 1);
