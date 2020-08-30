import React from "react";

import { ReactComponent as Github } from "assets/github.svg";
import { ReactComponent as Google } from "assets/email.svg";
import { ReactComponent as Twitter } from "assets/twitter.svg";

function SocialLinks() {
  return (
    <>
      <a
        href="https://github.com/udit1994"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
      <a
        href="mailto:uditkaushik94@gmail.com?subject=Mail from Portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Google />
      </a>
      <a
        href="https://twitter.com/uditkaushik94"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </a>
    </>
  );
}

export default SocialLinks;
