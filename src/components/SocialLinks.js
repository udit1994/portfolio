import React from "react";

import { ReactComponent as Github } from "assets/social/github.svg";
import { ReactComponent as Google } from "assets/social/email.svg";
import { ReactComponent as Twitter } from "assets/social/twitter.svg";

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
        href="https://twitter.com/ud_udit94"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </a>
    </>
  );
}

export default SocialLinks;
