import redbull from "../assets/team-logos/redbull.png";
import mclaren from "../assets/team-logos/mclaren.png";
import ferrari from "../assets/team-logos/ferrari.png";
import mercedes from "../assets/team-logos/mercedes.png";
import astonmartin from "../assets/team-logos/astonmartin.png";
import alpine from "../assets/team-logos/alpine.png";
import williams from "../assets/team-logos/williams.png";
import haas from "../assets/team-logos/haas.png";
import rb from "../assets/team-logos/rb.png";
import audi from "../assets/team-logos/audi.png";
import cadillac from "../assets/team-logos/cadillac.png";


// ==========================
// RED BULL
// ==========================
import redbull1 from "../assets/team-gallery/redbull-1.jpg";
import redbull2 from "../assets/team-gallery/redbull-2.jpg";
import redbull3 from "../assets/team-gallery/redbull-3.jpg";
import redbull4 from "../assets/team-gallery/redbull-4.jpg";

// ==========================
// FERRARI
// ==========================
import ferrari1 from "../assets/team-gallery/ferrari-1.jpg";
import ferrari2 from "../assets/team-gallery/ferrari-2.jpg";
import ferrari3 from "../assets/team-gallery/ferrari-3.jpg";
import ferrari4 from "../assets/team-gallery/ferrari-4.jpg";

// ==========================
// MERCEDES
// ==========================
import mercedes1 from "../assets/team-gallery/mercedes-1.jpg";
import mercedes2 from "../assets/team-gallery/mercedes-2.jpg";
import mercedes3 from "../assets/team-gallery/mercedes-3.jpg";
import mercedes4 from "../assets/team-gallery/mercedes-4.jpg";

// ==========================
// McLAREN
// ==========================
import mclaren1 from "../assets/team-gallery/mclaren-1.jpg";
import mclaren2 from "../assets/team-gallery/mclaren-2.jpg";
import mclaren3 from "../assets/team-gallery/mclaren-3.jpg";
import mclaren4 from "../assets/team-gallery/mclaren-4.jpg";

// ==========================
// ASTON MARTIN
// ==========================
import astonmartin1 from "../assets/team-gallery/astonmartin-1.jpg";
import astonmartin2 from "../assets/team-gallery/astonmartin-2.jpg";
import astonmartin3 from "../assets/team-gallery/astonmartin-3.jpg";
import astonmartin4 from "../assets/team-gallery/astonmartin-4.jpg";

// ==========================
// WILLIAMS
// ==========================
import williams1 from "../assets/team-gallery/williams-1.jpg";
import williams2 from "../assets/team-gallery/williams-2.jpg";
import williams3 from "../assets/team-gallery/williams-3.jpg";
import williams4 from "../assets/team-gallery/williams-4.jpg";

// ==========================
// ALPINE
// ==========================
import alpine1 from "../assets/team-gallery/alpine-1.jpg";
import alpine2 from "../assets/team-gallery/alpine-2.jpg";
import alpine3 from "../assets/team-gallery/alpine-3.jpg";
import alpine4 from "../assets/team-gallery/alpine-4.jpg";

// ==========================
// HAAS
// ==========================
import haas1 from "../assets/team-gallery/haas-1.jpg";
import haas2 from "../assets/team-gallery/haas-2.jpg";
import haas3 from "../assets/team-gallery/haas-3.jpg";
import haas4 from "../assets/team-gallery/haas-4.jpg";

// ==========================
// RACING BULLS
// ==========================
import racingbulls1 from "../assets/team-gallery/racingbulls-1.jpg";
import racingbulls2 from "../assets/team-gallery/racingbulls-2.jpg";
import racingbulls3 from "../assets/team-gallery/racingbulls-3.jpg";
import racingbulls4 from "../assets/team-gallery/racingbulls-4.jpg";

// ==========================
// AUDI
// ==========================
import audi1 from "../assets/team-gallery/audi-1.jpg";
import audi2 from "../assets/team-gallery/audi-2.jpg";
import audi3 from "../assets/team-gallery/audi-3.jpg";
import audi4 from "../assets/team-gallery/audi-4.jpg";

// ==========================
// CADILLAC
// ==========================
import cadillac1 from "../assets/team-gallery/cadillac-1.jpg";
import cadillac2 from "../assets/team-gallery/cadillac-2.jpg";
import cadillac3 from "../assets/team-gallery/cadillac-3.jpg";
import cadillac4 from "../assets/team-gallery/cadillac-4.jpg";



const teams = [

{
    id: "red-bull",
    name: "Red Bull Racing",
    logo: redbull,

    base: "Milton Keynes, United Kingdom",
    principal: "Christian Horner",
    technicalDirector: "Pierre Waché",
    powerUnit: "Red Bull Ford",

    championships: 6,
    wins: 124,
    podiums: 285,
    poles: 107,
    fastestLaps: 102,

    founded: 2005,

    drivers: [
        "Max Verstappen",
        "Yuki Tsunoda"
    ],

    gallery: [
    redbull1,
    redbull2,
    redbull3,
    redbull4
],
},

{
    id: "mclaren",
    name: "McLaren",
    logo: mclaren,

    base: "Woking, United Kingdom",
    principal: "Andrea Stella",
    technicalDirector: "Peter Prodromou",
    powerUnit: "Mercedes",

    championships: 9,
    wins: 198,
    podiums: 540,
    poles: 170,
    fastestLaps: 165,

    founded: 1963,

    drivers: [
        "Lando Norris",
        "Oscar Piastri"
    ],

    gallery: [
    mclaren1,
    mclaren2,
    mclaren3,
    mclaren4
],
},

{
    id: "ferrari",
    name: "Ferrari",
    logo: ferrari,

    base: "Maranello, Italy",
    principal: "Frédéric Vasseur",
    technicalDirector: "Loïc Serra",
    powerUnit: "Ferrari",

    championships: 16,
    wins: 248,
    podiums: 830,
    poles: 253,
    fastestLaps: 263,

    founded: 1950,

    drivers: [
        "Charles Leclerc",
        "Lewis Hamilton"
    ],

    gallery: [
    ferrari1,
    ferrari2,
    ferrari3,
    ferrari4
],
},

{
    id: "mercedes",
    name: "Mercedes",
    logo: mercedes,

    base: "Brackley, United Kingdom",
    principal: "Toto Wolff",
    technicalDirector: "James Allison",
    powerUnit: "Mercedes",

    championships: 8,
    wins: 130,
    podiums: 300,
    poles: 140,
    fastestLaps: 100,

    founded: 2010,

    drivers: [
        "George Russell",
        "Kimi Antonelli"
    ],
    gallery: [
        mercedes1,
        mercedes2,
        mercedes3,
        mercedes4
    ]
},

{
    id: "aston-martin",
    name: "Aston Martin",
    logo: astonmartin,

    base: "Silverstone, United Kingdom",
    principal: "Andy Cowell",
    technicalDirector: "Enrico Cardile",
    powerUnit: "Honda",

    championships: 0,
    wins: 0,
    podiums: 10,
    poles: 1,
    fastestLaps: 3,

    founded: 2021,

    drivers: [
        "Fernando Alonso",
        "Lance Stroll"
    ],
    gallery: [
    astonmartin1,
    astonmartin2,
    astonmartin3,
    astonmartin4
],
},

{
    id: "alpine",
    name: "Alpine",
    logo: alpine,

    base: "Enstone, United Kingdom",
    principal: "Flavio Briatore",
    technicalDirector: "David Sanchez",
    powerUnit: "Mercedes",

    championships: 2,
    wins: 21,
    podiums: 106,
    poles: 20,
    fastestLaps: 16,

    founded: 2021,

    drivers: [
        "Pierre Gasly",
        "Franco Colapinto"
    ],
    gallery: [
    alpine1,
    alpine2,
    alpine3,
    alpine4
],
},

{
    id: "williams",
    name: "Williams",
    logo: williams,

    base: "Grove, United Kingdom",
    principal: "James Vowles",
    technicalDirector: "Pat Fry",
    powerUnit: "Mercedes",

    championships: 9,
    wins: 114,
    podiums: 313,
    poles: 128,
    fastestLaps: 133,

    founded: 1977,

    drivers: [
        "Alex Albon",
        "Carlos Sainz"
    ],
    gallery: [
    williams1,
    williams2,
    williams3,
    williams4
],
},

{
    id: "haas",
    name: "Haas",
    logo: haas,

    base: "Kannapolis, United States",
    principal: "Ayao Komatsu",
    technicalDirector: "Andrea De Zordo",
    powerUnit: "Ferrari",

    championships: 0,
    wins: 0,
    podiums: 0,
    poles: 1,
    fastestLaps: 2,

    founded: 2016,

    drivers: [
        "Esteban Ocon",
        "Oliver Bearman"
    ],
    gallery: [
    haas1,
    haas2,
    haas3,
    haas4
],
},

{
    id: "racing-bulls",
    name: "Racing Bulls",
    logo: rb,

    base: "Faenza, Italy",
    principal: "Laurent Mekies",
    technicalDirector: "Jody Egginton",
    powerUnit: "Red Bull Ford",

    championships: 0,
    wins: 2,
    podiums: 5,
    poles: 1,
    fastestLaps: 4,

    founded: 2006,

    drivers: [
        "Liam Lawson",
        "Isack Hadjar"
    ],
    gallery: [
    racingbulls1,
    racingbulls2,
    racingbulls3,
    racingbulls4
],
},

{
    id: "audi",
    name: "Audi",
    logo: audi,

    base: "Hinwil, Switzerland",
    principal: "Jonathan Wheatley",
    technicalDirector: "Mattia Binotto",
    powerUnit: "Audi",

    championships: 0,
    wins: 1,
    podiums: 27,
    poles: 1,
    fastestLaps: 7,

    founded: 2026,

    drivers: [
        "Nico Hulkenberg",
        "Gabriel Bortoleto"
    ],
    gallery: [
    audi1,
    audi2,
    audi3,
    audi4
],
},

{
    id: "cadillac",
    name: "Cadillac",
    logo: cadillac,

    base: "Fishers, United States",
    principal: "Graeme Lowdon",
    technicalDirector: "Pat Symonds",
    powerUnit: "Ferrari",

    championships: 0,
    wins: 0,
    podiums: 0,
    poles: 0,
    fastestLaps: 0,

    founded: 2026,

    drivers: [
        "Sergio Perez",
        "Colton Herta"
    ],
    gallery: [
    cadillac1,
    cadillac2,
    cadillac3,
    cadillac4
],
}

];

export default teams;