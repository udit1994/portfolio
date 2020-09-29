import Philips from "assets/office/philips.png";
import Keepworks from "assets/office/keepworks.png";
import Tidu from "assets/office/tidu.png";

const projects = [
  {
    title: "Tidu - Manage your todos",
    description: {
      main: `Manage you daily tasks with this lightweight app right from your browser or mobile.`,
      bullets: [
        "Works without internet",
        "Installable in mobile as Progressive Web app",
        "Serverless - so all your data stays with you on your device",
        "Technology stack: React JS",
      ],
    },
    image: Tidu,
    link: "https://tidu.netlify.app/",
    year: "2020",
  },
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
        "Technology stack: React, NodeJS, Laravel PHP and MySQL",
      ],
    },
    image: Keepworks,
    link: "https://info.kandy.io/livesupport/",
    year: "2019",
  },
  {
    title: "Orders Manager",
    description: {
      main: `The application was designed for placing and managing orders for CT-scan, MR, X-Ray etc at hospitals.`,
      bullets: [
        "Lead the development of application from the beginning to deployment",
        "Learnt about Philips integeration services in healthcare equipments",
        "Technology stack: AngularJS",
      ],
    },
    image: Philips,
    year: "2018",
  },
  {
    title: "Installbase",
    description: {
      main: `Philips has 25+ integeration solutions for hospitals to transfer data from one modality to databases,
      monitors or other modalities using HL7 Protocol.
      This application tracked all the installations, thereby providing insights to strengthen customer relations and
      managed the TTS(Transfer-To-Support) documents for providing better services.`,
      bullets: [
        "Lead the development of application from the beginning to deployment",
        "Learnt about HL7 and underlying principles of communication in healthcare and clinical data",
        "Technology stack: AngularJS, ASP .NET, SharePoint and SQL",
      ],
    },
    image: Philips,
    year: "2016",
  },
];

export default projects;
