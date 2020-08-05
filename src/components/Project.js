import React from "react";

import Banner from "components/Banner";

const projects = [
  {
    title: "Installbase",
    description: `Philips has around 30 integeration services for the hospital to get data from one modality to another.
      This application aggregates all the data for analytics for better marketing and Service support.
      `,
    company: "Philips Healthcare",
    grid: {
      columnEnd: 6,
      columnStart: 3,
      rowEnd: 5,
      rowStart: 3,
    },
  },
  {
    title: "Orders Manager",
    description: `Application to place and manage orders for CT Scan, X-ray etc in the hospital. 
      It connects with existing Philips integeration services the hopistal.
      `,
    company: "Philips Healthcare",
    grid: {
      columnEnd: 11,
      columnStart: 8,
      rowEnd: 7,
      rowStart: 5,
    },
  },
  {
    title: "Kandy Live Support",
    description: `It enables business websites with immersive, interactive support capabilities that allows microbusinesses, 
    SMBs and enterprises of all sizes to provide productive and efficient customer support at a fraction of the traditional cost.`,
    company: "Keepworks",
    link: "https://info.kandy.io/livesupport/",
    grid: {
      columnEnd: 6,
      columnStart: 3,
      rowEnd: 9,
      rowStart: 7,
    },
  },
  {
    title: "Charts",
    description: `WIP: Manage all the list of followers and following from different social media platforms.`,
    company: "Self",
    grid: {
      columnEnd: 11,
      columnStart: 8,
      rowEnd: 11,
      rowStart: 9,
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
