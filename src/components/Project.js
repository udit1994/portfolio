import React from "react";

import Banner from "components/Banner";

const projects = [
  {
    title: "Kandy Live Support (ReactJS, Redux, PHP, NodeJS, WebRTC)",
    description: `It enables business websites with immersive, interactive support capabilities that allows microbusinesses, 
    SMBs and enterprises of all sizes to provide productive and efficient customer support at a fraction of the traditional cost.`,
    company: "Keepworks (July, 2019 - Present)",
    link: "https://info.kandy.io/livesupport/",
    grid: {
      columnEnd: 6,
      columnStart: 3,
      rowEnd: 5,
      rowStart: 3,
    },
  },
  {
    title: "Orders Manager (AngularJS, Bootstrap)",
    description: `The Requirement for the project was to make an application for placing and managing orders like CT-scan at the hospital.
    I was the only contributor to the project. The technology stack used was Angular JS for Frontend, HTML and CSS(Bottstrap). Database is Hospital database connected via 
    Philips
      
      `,
    company: "Philips Healthcare (2018)",
    grid: {
      columnEnd: 11,
      columnStart: 8,
      rowEnd: 7,
      rowStart: 5,
    },
  },
  {
    title: "Installbase (AngularJS, Bootstrap)",
    description: `Philips has 25+ integeration services for the hospital to transfer data from one modality to another.
      This application aggregates all the installation data of these services for analytics, marketing and Service support.
      `,
    company: "Philips Healthcare (2016-2017)",
    grid: {
      columnEnd: 6,
      columnStart: 3,
      rowEnd: 9,
      rowStart: 7,
    },
  },
];

function Project() {
  const items = projects.map((project, i) => {
    return (
      <Banner
        textTop1={project.title.toUpperCase()}
        textTop2={project.description}
        textBottom={"Under: " + project.company}
        grid={project.grid}
        link={project.link}
        key={i}
      />
    );
  });
  return items;
}

export default Project;
