import React from "react";

import Banner from "components/Banner";

const projects = [
  {
    title: "Kandy Live Support (ReactJS, Redux, PHP, NodeJS, WebRTC)",
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
    footer: "Keepworks (July, 2019 - Present)",
    link: "https://info.kandy.io/livesupport/",
    grid: {
      columnEnd: 7,
      columnStart: 3,
      rowEnd: 5,
      rowStart: 3,
    },
  },
  {
    title: "Orders Manager (AngularJS, Bootstrap)",
    description: {
      main: `The Requirement for the project was to make an application for placing and managing orders like CT-scan at the hospital.
      I was the only contributor to the project. The technology stack used was Angular JS for Frontend, HTML and CSS(Bottstrap). 
      Database is Hospital database connected via 
      Philips`,
      bullets: [
        "Lead the development of application from the beginning to deployment",
        "Learnt about Philips integeration services in healthcare equipments",
      ],
    },
    footer: "Philips Healthcare (2018)",
    grid: {
      columnEnd: 12,
      columnStart: 8,
      rowEnd: 8,
      rowStart: 6,
    },
  },
  {
    title: "Installbase (AngularJS, Bootstrap)",
    description: {
      main: ` Philips has 25+ integeration services for the hospital to transfer data from one modality to another. 
      This application aggregates all the installation data of these services for analytics, marketing and Service support.`,
      bullets: [
        "Lead the development of application from the beginning to deployment",
        "Learnt about HL7 and underlying principles of communication in healthcare and clinical data",
      ],
    },
    footer: "Philips Healthcare (2016-2017)",
    grid: {
      columnEnd: 7,
      columnStart: 3,
      rowEnd: 11,
      rowStart: 9,
    },
  },
];

function Project() {
  const items = projects.map((project, i) => {
    return <Banner content={project} key={i} />;
  });
  return items;
}

export default Project;
