import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addHobby, removeHobby, editHobby } from "./store/CVSlice";
const Skills = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hobbies = useSelector((state) => state.cv.hobby);
  return (
    <div>
      <h1 className="text-center mt-3">Tell us about your Hobby</h1>
      <div className="text-center mt-3">
        <button
              style={{width: "200px" ,backgroundColor:"#ADD5F5"}}

          onClick={() => {
            dispatch(addHobby());
          }}
        >
          Add Hobbies
        </button>
      </div>
      <div className="d-flex flex-column align-items-center mt-3">
        {hobbies.map((hobby, index) => {
          return (
            <div
              style={{ display: "flex" }}
              className="mb-3 mt-3"
              key={"hobby" + index}
            >
              <input
                                className="me-2"

                label="Add Hobby"
                placeholder="Hobby"
                value={hobby.hobby}
                onChange={(e) => {
                  dispatch(
                    editHobby({
                      index,
                      key: "hobby",
                      value: e.target.value,
                    })
                  );
                }}
              />
              <button
                onClick={() =>
                  dispatch(
                    removeHobby({
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

      <div className=" btn-view">
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

        {/* <button className="ms-3" onClick={() => navigate("/lang")}>
          {" "}
          <i class="fa-solid fa-angle-right"></i>
        </button> */}
      </div>
    </div>
  );
};

export default Skills;
