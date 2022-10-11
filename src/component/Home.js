import React from "react";
import BasicInfo from "./BasicInfo";
import { useNavigate } from "react-router-dom";
import Education from "./Education";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Basic Information</h1>
      <BasicInfo />
      <br />
      <br />
      <div className="  btn-view">
        <button
          onClick={() => navigate("/")}
          style={{ backgroundColor: "#ADD5F5" }}
          className='me-3'
        >
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button
          className="bt"
          onClick={() => navigate("/preview")}
          style={{ backgroundColor: "#ADD5F5" }}
        >
          <i class="fa-solid fa-eye"></i>
        </button>
        <button
          onClick={() => navigate("/histry")}
          className="ms-3"
          style={{ backgroundColor: "#ADD5F5" }}
        >
          {" "}
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;
