import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FirstPage.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { Typography } from "@mui/material";



const FirstPage = () => {
  const navigate = useNavigate();



  return (
    <div>
      <div
        className="start_quiz box_shadow"
        // style={{ backgroundColor: "#0099ff" }}
      >
        <Button
          variant="contained"
          startIcon={<AccessibilityNewIcon />}
          onClick={() => {
            navigate("/basicinfo");
          }}
        >
          Create Your Resume
        </Button>

        {/* <Button variant="outlined">Outlined</Button> */}
        {/* <button
          className="startButton"
          style={{
            backgroundColor: "#0099ff",
            border: "none",
            borderRadius: "15px",
          }}
          onClick={() => {
            navigate("/basicinfo");
          }}
        >
          Build Resume
        </button> */}
      </div>
    </div>
  );
};

export default FirstPage;
