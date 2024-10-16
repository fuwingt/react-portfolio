import icon0 from "../assets/projects/icon-0.png";
import mland_icon from "../assets/projects/mland_icon.jpeg";
import xp_icon from "../assets/projects/xp_icon.jpg";

export const HERO_CONTENT = `I am a passionate and results-driven full stack developer with a talent for creating scalable and efficient solutions. On the front end, I excel with C#, React, and TypeScript, crafting seamless and dynamic user experiences. On the back end, I specialize in C#, .NET, Node.js, and MySQL, ensuring robust and reliable server-side performance. My goal is to leverage my skills to develop innovative solutions that solve complex problems and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2024",
    role: "Senior Game Programmer(Full Stack)",
    company: "Pyro Entertainment Limited",
    description: [
      "Implemented game mechanics and features using Unity, C# and FairyUI",
      "Developed and maintained game servers using C#, gRPC, sqlSugar, and MagicOnion",
      "Designed and maintained MySQL databases for game data storage, and implemented caching strategies using Redis",
      "Integrated third-party platform SDK into the game, enabling features such as registration, login and in-app purchases",
      "Developed Content Management System (CMS) for game data management and analytics using React, Node.js, and TypeScript",
      "Managed the build process using Jenkins, ensuring automated building, and deployment of game updates",
      "Set up and maintained cloud infrastructure on AWS, including EC2 instances, setting up gateways, and utilizing RDS, S3, and CDN services to ensure scalability and reliability of game services",
    ],
    technologies: [
      "C#",
      ".NET",
      "mySQL",
      "gRPC",
      "Redis",
      "React",
      "TypeScript",
      "Node.js",
      "AWS",
      "Jenkins",
    ],
  },
  {
    year: "2020 - 2022",
    role: "Game Programmer",
    company: "Qookia Limited",
    description: [
      "Developed and maintained game features using Unity and C#. Designed and implemented user interfaces with Unity's UGUI system, ensuring a smooth and engaging player experience",
      "Managed code repositories using Git, ensuring efficient collaboration and version management",
      "Participated in Agile processes, including sprint planning and daily stand-ups, to ensure timely delivery and continuous improvement",
    ],
    technologies: ["C#", "Unity", "Git", "Agile"],
  },
];

export const PROJECTS = [
  {
    title: "神息之地 Mythicland",
    image: mland_icon,
    description: "Mobile game, Idle-RPG",
    technologies: [
      {
        title: "Client-Side Development",
        skills: ["Unity", "C#", "FairyUI", "UniRx"],
        desc: "Implemented game features such as character skill system, pvp ranking system, and payment interface",
      },
      {
        title: "Server-Side Development",
        skills: ["C#", "gRPC", "sqlSugar", "MagicOnion"],
        desc: "Developed and maintained server-side APIs for login, registration, in-app purchases, and various game features. Implemented gRPC for efficient communication between game clients and servers, a real-time chatroom supporting bidirectional instant communication",
      },
      {
        title: "Database Management",
        skills: ["MySql", "sqlSugar", "Redis"],
        desc: "Engineered and managed databases to support game features, ensuring accurate updates for player records, and implemented Redis caching for performance optimization in features like pvp ranking and leaderboards.",
      },
      {
        title: "CI/CD Pipeline",
        skills: ["Jenkins", "AWS"],
        desc: "Automated the build and asset deployment using Jenkins, AWS S3, and CloudFront, significantly improving deployment efficiency and reliability",
      },
      {
        title: "Cloud Infrastructure",
        skills: ["AWS"],
        desc: "Set up and maintained cloud infrastructure on AWS, including configuring EC2 instances for application hosting, deploying databases on RDS, storing asset bundles on S3, and distributing content via CDN for enhanced performance and scalability",
      },
      {
        title: "Content Management System (CMS)",
        skills: [
          "TypeScript",
          "React",
          "Node.js",
          "Material UI",
          "Axios",
          "Express",
          "TypeORM",
        ],
        desc: "Developed a CMS for game data management, enabling the team to easily manage game content in different environments",
      },
    ],
    gameplay: "https://www.youtube.com/watch?v=O1zGs-aOtl4&ab_channel=fwbackup",
  },
  {
    title: "King of Kinks",
    image: xp_icon,
    description: "Mobile game, Idle-RPG",
    technologies: [
      {
        title: "Client-Side Development",
        skills: ["Unity", "C#", "UniRx"],
        desc: "Implemented game core features such as character and item storage, mission system, pvp system, and item store",
      },
    ],
    gameplay: "https://www.youtube.com/watch?v=8allv8nRp9s&ab_channel=fwbackup",
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "+852 5540 4483 ",
  email: "fuwingt@gmail.com",
};
