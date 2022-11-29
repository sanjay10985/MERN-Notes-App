import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Notes from "./notes/Notes";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    } else {
      navigate("/signup");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Notes />
    </div>
  );
};

export default Home;
