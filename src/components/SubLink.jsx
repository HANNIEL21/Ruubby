import React from "react";
import { Link } from "react-router-dom";

const SubLink = ({ title, url }) => {
  if (url.startsWith("/")) {
    return (
      <Link className='block text-xs my-2 text-blue-200' to={url}>
        {title}
      </Link>
    );
  }
  return (
    <a className='block text-xs my-2 text-blue-200' href={url}>
      {title}
    </a>
  );
};

export default SubLink;
