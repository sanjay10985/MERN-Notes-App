import React from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

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
      <h1>Hello Home</h1>
    </div>
  );
};

export default Home;
