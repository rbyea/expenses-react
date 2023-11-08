import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../store/usersSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Description = () => {
  const { userId } = useParams();
  const currentUser = useSelector(getCurrentUser(userId));

  return (
    <small className="text-muted">
      Hello {currentUser && currentUser.name}, welcome back!
    </small>
  );
};

export default Description;
