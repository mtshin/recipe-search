import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar as Nav, AnchorButton, Icon } from "@blueprintjs/core";

import iconLinkedin from "../../images/icon-linkedin.svg";
import iconGithub from "../../images/icon-github.svg";

const Navbar = () => {
  return (
    <div>
      <Nav style={styles.container}>
        <Nav.Group align="left">
          <Nav.Heading>
            <NavLink to="/">
              <div style={{ ...styles.navText }}>
                <Icon icon="search" style={{ marginRight: 8 }} />
                Recipe Search
              </div>
            </NavLink>
          </Nav.Heading>
        </Nav.Group>
        <Nav.Group align="right">
          <AnchorButton
            href="https://www.linkedin.com/in/mtshin/"
            target="_blank"
            title="LinkedIn"
            icon={<img alt="LinkedIn" src={iconLinkedin} />}
            minimal
          />
          <AnchorButton
            href="https://github.com/mtshin/"
            target="_blank"
            title="Github"
            icon={<img alt="Github" src={iconGithub} />}
            minimal
          />
        </Nav.Group>
      </Nav>
    </div>
  );
};

const styles = {};

styles.container = {
  boxShadow: "none",
  backgroundColor: "#a8e2f7"
};

styles.navText = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  fontSize: "calc(10px + 1vmin)",
  fontWeight: "600",
  color: "#004968",
  fontFamily: "Maison,sans-serif"
};

styles.buttonText = {
  fontSize: "calc(4px + 1vmin)",
  fontWeight: "600",
  color: "#004968",
  fontFamily: "Maison,sans-serif"
};

styles.photo = {
  height: 20,
  width: 20,
  borderRadius: 10,
  objectFit: "cover"
};

export default Navbar;
