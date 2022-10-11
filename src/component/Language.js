import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editLanguages, addLanguages, removeLanguages } from "./store/CVSlice";
const Skills = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.cv.language);
  return (
    <div>
      <h1 className="text-center mt-3">Tell us about your Language</h1>
      <div className="text-center mt-3">
        <button
              style={{width: "200px" ,backgroundColor:"#ADD5F5"}}

          onClick={() => {
            dispatch(addLanguages());
          }}
        >
          Add Languages
        </button>
      </div>
      <div className="d-flex flex-column align-items-center mt-3">
        {languages.map((language, index) => {
          return (
            <div
              style={{ display: "flex" }}
              className="mb-3 mt-3"
              key={"language" + index}
            >
              <input
                  className="me-2"

                placeholder="Language"
                value={language.language}
                onChange={(e) => {
                  dispatch(
                    editLanguages({
                      index,
                      key: "language",
                      value: e.target.value,
                    })
                  );
                }}
              />
              <button
                onClick={() =>
                  dispatch(
                    removeLanguages({
                      index,
                    })
                  )
                }
                style={{backgroundColor:"#ADD5F5"}}

              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>

      <div className="  btn-view">
        <button className="me-3" onClick={() => navigate(-1)}
          style={{backgroundColor:"#ADD5F5"}}
        >
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button onClick={() => navigate("/preview")}
          style={{backgroundColor:"#ADD5F5"}}
        >
          <i class="fa-solid fa-eye"></i>
        </button>
        <button className="ms-3" onClick={() => navigate("/hobby")}
          style={{backgroundColor:"#ADD5F5"}}
        >
          {" "}
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Skills;
