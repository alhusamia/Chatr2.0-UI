import React from "react";
import { NavLink } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

const ChannelNavLink = ({ channel }) => (
  <li
    className="nav-item"
    data-toggle="tooltip"
    data-placement="right"
    title={channel.name}
  >
    <NavLink className="nav-link" to={`/channels/${channel.id}`}>
      {channel.image_url ? (
        <img
          src={channel.image_url}
          width="25px"
          height="25px"
          style={{ borderRadius: "50%" }}
        />
      ) : (
        <FontAwesomeIcon icon={faHashtag} />
      )}

      <span className="nav-link-text"> {channel.name}</span>
      <br />
      <small className="nav-link-text"> Created by:{channel.owner}</small>
    </NavLink>
  </li>
);

export default ChannelNavLink;
