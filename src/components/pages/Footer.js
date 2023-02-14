import React from "react";
import linkedinIcon from "../../assets/images/linkedin.icon.jpg";
import githubIcon from '../../assets/images/github.icon.jpg';



function Footer() {
    <h6>Linkedin to be included after I update </h6>
  // TODO:  Replace Linkedin with my Linkedin after I update it
  const icons = [
    {
      name: "fab fa-github",
      icon: githubIcon
    },
    {
      name: "fab fa-linkedin",
      icon: linkedinIcon,
    },
  ];

  return (
    <footer className="flex-row px-1">
      {icons.map((icon) => (
        <a
          href={icons.icon}
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={icon.name}></i>
        </a>
      ))}
    </footer>
  );
}

export default Footer;
