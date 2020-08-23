const projects = [
  {
    title: "Kandy Live Support",
    description: {
      main: ` It enables business websites with immersive, interactive support capabilities that allows microbusinesses, 
      SMBs and enterprises of all sizes to provide productive and efficient customer support at a 
      fraction of the traditional cost.`,
      bullets: [
        "Working on building new features as part of requiements",
        "Helping in improving the codebase by using newer coding strategies",
        "Began writing tests and encouraged other team members to do the same",
      ],
    },
    image: "/keepworks.svg",
    link: "https://info.kandy.io/livesupport/",
    year: "2019",
  },
  {
    title: "Orders Manager",
    description: {
      main: `Application for placing and managing orders like CT-scan at the hospital.
      I was the only contributor to the project. The technology stack used was Angular JS, HTML and CSS(Bottstrap). 
      Database is hospital's db connected via one of Philips Integeration solutions`,
      bullets: [
        "Lead the development of application from the beginning to deployment",
        "Learnt about Philips integeration services in healthcare equipments",
      ],
    },
    image: "/philips.svg",
    year: "2018",
  },
  {
    title: "Installbase",
    description: {
      main: `Philips has 25+ integeration solutions for the hospital to transfer data from one modality to another. 
      This application aggregates all the installation data of these services for analytics, marketing and support.`,
      bullets: [
        "Lead the development of application from the beginning to deployment",
        "Learnt about HL7 and underlying principles of communication in healthcare and clinical data",
      ],
    },
    image: "/philips.svg",
    year: "2016",
  },
];

export default projects;
