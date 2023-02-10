import { React, icons } from "react";


function Footer() {
    <h6>Linkedin to be included after I update </h6>
  // TODO:  Replace Linkedin with my Linkedin after I update it
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/amiller0806/",
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/",
    },
  ];

  return (
    <footer className="flex-row px-1">
      {icons.map((icon) => (
        <a
          href={icon.link}
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
