const connection = require("./server");
try {
  const database = connection.db("YoungDB");
  const collection = database.collection("team");

  connection.connect();

  const Data = [
    {
      name: "Youssef Tarek",
      role: "co-founder, ceo, director",
      image: "/assets/team/jojo.webp",
      bio: "The ingenious mind behind the curtain at Young Productions. As the Chief Creative Wizard, Youssef weaves captivating campaigns that sprinkle magic into the mundane. With a pinch of whimsy and a dash of innovation, he conjures up out-of-the-box solutions that leave clients in awe. When he's not brainstorming in his colorful lair, you'll find Youssef donning his superhero cape, transforming client visions into reality with a mischievous grin.",
    },
    {
      name: "Noor El Gendy",
      role: "co-founder, media manager",
      image: "/assets/team/nour.webp",
      bio: "Noor El Gendy serves as the co-founder and media manager, overseeing the strategic direction of Young Productions while actively managing media projects from inception to completion. With a keen eye for detail and a knack for creative storytelling, [Name] ensures that each project undertaken by the agency reflects the highest standards of quality and innovation.",
    },
    {
      name: "Mazen Draz",
      role: "head of production",
      image: "/assets/team/mazen.webp",
      bio: "Mazen Draz is the head of production at Young Productions. With a passion for perfection and an eye for detail, Mazen ensures that every project is executed with precision and finesse. His meticulous approach to production management and his unwavering commitment to quality make him an invaluable asset to the team.",
    },
    {
      name: "Ali Maher",
      role: "cinematographer, editor",
      image: "/assets/team/ali.webp",
      bio: "Ali Maher is the cinematographer and editor at Young Productions. With a passion for storytelling and a keen eye for detail, Ali brings a unique perspective to every project he undertakes. His innovative approach to cinematography and his unwavering commitment to quality make him an invaluable asset to the team.",
    },
    {
      name: "Youssef Reda",
      role: "creative director, cinematorgrapher",
      image: "/assets/team/reda.webp",
      bio: "Youssef Reda is the creative director and cinematographer at Young Productions. With a passion for storytelling and a keen eye for detail, Youssef is the mastermind behind the lens, capturing the essence of each project with a unique perspective. His creative vision and technical expertise breathe life into every frame, transforming ordinary moments into extraordinary experiences.",
    },
    {
      name: "Hala Shafik",
      role: "Film Editor",
      image: "/assets/team/hala.webp",
      bio: "Hala Shafik is the film editor at Young Productions. With a passion for storytelling and a keen eye for detail, Hala brings a unique perspective to every project she undertakes. Her innovative approach to film editing and her unwavering commitment to quality make her an invaluable asset to the team.",
    },
    {
      name: "Haneen Taha",
      role: "Film Editor",
      image: "/assets/team/haneen.webp",
      bio: "Haneen Taha is the film editor at Young Productions. With a passion for storytelling and a keen eye for detail, Haneen brings a unique perspective to every project she undertakes. Her innovative approach to film editing and her unwavering commitment to quality make her an invaluable asset to the team.",
    },
    {
      name: "Omar Sawabi",
      role: "motion designer, editor",
      image: "/assets/team/omar.webp",
      bio: "Omar Sawabi is the motion designer and editor at Young Productions. With a flair for creativity and a passion for storytelling, Omar brings a unique perspective to every project he undertakes. His innovative approach to motion design and his keen eye for detail breathe life into every frame, transforming ordinary moments into extraordinary experiences.",
    },
    {
      name: "Gameela Ahmed",
      role: "graphic designer",
      image: "/assets/team/gameela.webp",
      bio: "Gameela Ahmed is the graphic designer at Young Productions. With a flair for creativity and a passion for design, Gameela brings a unique perspective to every project she undertakes. Her innovative approach to graphic design and her keen eye for detail breathe life into every frame, transforming ordinary moments into extraordinary experiences.",
    },
    {
      name: "Dana Sherif",
      role: "graphic designer",
      image: "/assets/team/dana.webp",
      bio: "Dana Sherif is the graphic designer at Young Productions. With a flair for creativity and a passion for design, Dana brings a unique perspective to every project she undertakes. Her innovative approach to graphic design and her keen eye for detail breathe life into every frame, transforming ordinary moments into extraordinary experiences.",
    },
    {
      name: "Farida Helmy",
      role: "Public Relations",
      image: "/assets/team/farida.webp",
      bio: "Farida Helmy is the PR specialist at Young Productions. With a passion for storytelling and a keen eye for detail, Farida brings a unique perspective to every project she undertakes. Her innovative approach to PR and her unwavering commitment to quality make her an invaluable asset to the team.",
    },
    {
      name: "Jasmine Sameh",
      role: "public relations specialist",
      image: "/assets/team/jasmin.webp",
      bio: "Jasmine Sameh is the PR specialist at Young Productions. With a passion for storytelling and a keen eye for detail, Jasmine brings a unique perspective to every project she undertakes. Her innovative approach to PR and her unwavering commitment to quality make her an invaluable asset to the team.",
    },
    {
      name: "Tasneem Khalifa",
      role: "client onboarding coordinator",
      image: "/assets/team/tassnem.webp",
      bio: "Tasneem Khalifa is the client onboarding coordinator at Young Productions. With a passion for building strong client relationships and a keen eye for detail, Tasneem ensures that every client is welcomed with warmth and professionalism. Her meticulous approach to client onboarding and her unwavering commitment to quality make her an invaluable asset to the team.",
    },
    {
      name: "Omar Badr",
      role: "International Client Manager",
      image: "/assets/team/omarbadr.webp",
      bio: "Omar Badr is the International Client Manager at Young Productions. With a passion for building strong client relationships and a keen eye for detail, Omar ensures that every client is welcomed with warmth and professionalism. His meticulous approach to client management and his unwavering commitment to quality make him an invaluable asset to the team.",
    },
    {
      name: "Adam Hany",
      role: "Business Developer",
      image: "/assets/team/adam.webp",
      bio: "Adam Hany is the Business Developer at Young Productions. With a passion for building strong client relationships and a keen eye for detail, Adam ensures that every client is welcomed with warmth and professionalism. His meticulous approach to client management and his unwavering commitment to quality make him an invaluable asset to the team.",
    },
    {
      name: "Hussein Amr",
      role: "Opearation Executive",
      image: "/assets/team/hussein.webp",
      bio: "Hussein Amr is the Operation Executive at Young Productions. With a passion for building strong client relationships and a keen eye for detail, Hussein ensures that every client is welcomed with warmth and professionalism. His meticulous approach to client management and his unwavering commitment to quality make him an invaluable asset to the team.",
    },
    {
      name: "Khaled Amr",
      role: "Head of technology",
      image: "/assets/team/khaled.webp",
      bio: "Khaled Amr is the head of technology at Young Productions. With a passion for building strong client relationships and a keen eye for detail, Khaled ensures that every client is welcomed with warmth and professionalism. His meticulous approach to client management and his unwavering commitment to quality make him an invaluable asset to the team.",
    },
    {
      name: "Marwan Hawash",
      role: "Front-End Developer",
      image: "/assets/team/marwan.webp",
      bio: "Marwan Hawash is the Front-End Developer at Young Productions. With a passion for building strong client relationships and a keen eye for detail, Marwan ensures that every client is welcomed with warmth and professionalism. His meticulous approach to client management and his unwavering commitment to quality make him an invaluable asset to the team.",
    },
  ];

  // Insert the data into the clients collection
  const result = collection.insertMany(Data);
  console.log(
    `${result.insertedCount} documents inserted into the ${collection} collection`
  );
} finally {
  connection.close();
}
