import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeSkills, editSkills, addSkills } from "./store/CVSlice";
const Skills = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.cv.skill);
  return (
    <div>
      <h1 className="text-center mt-3">Tell us about your Skills</h1>
      <div className="text-center mt-3">
        <button
          style={{ width: "200px", backgroundColor: "#ADD5F5" }}
          onClick={() => {
            dispatch(addSkills());
          }}
        >
          Add Skills
        </button>
      </div>
      <div className="d-flex flex-column align-items-center mt-3">
        {skills.map((skill, index) => {
          return (
            <div
              style={{ display: "flex" }}
              className="mb-3 mt-3"
              key={"skill" + index}
            >
              {/* <select
                  label="Social Website"
                  placeholder="Social Website"
                  value={skill.skill}
                  onChange={(e) =>
                    dispatch(
                        editSkills({
                        index,
                        key: "skill",
                        value: e.target.value,
                      })
                    )
                  }
                >
                  <option value="">Website</option>
                  <option value="twitter">Twitter</option>
                  <option value="linkedin">Linkdin</option>
                </select> */}

              <input
                className="me-2"
                label="Add Skill"
                placeholder="Skill"
                value={skill.skill}
                onChange={(e) => {
                  dispatch(
                    editSkills({
                      index,
                      key: "skill",
                      value: e.target.value,
                    })
                  );
                }}
              />
              <button
                onClick={() =>
                  dispatch(
                    removeSkills({
                      index,
                    })
                  )
                }
                style={{ backgroundColor: "#ADD5F5" }}
              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>
      <div className="  btn-view">
        <button
          className="me-3"
          onClick={() => navigate(-1)}
          style={{ backgroundColor: "#ADD5F5" }}
        >
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button
          onClick={() => navigate("/preview")}
          style={{ backgroundColor: "#ADD5F5" }}
        >
          <i class="fa-solid fa-eye"></i>
        </button>

        <button
          className="ms-3"
          onClick={() => navigate("/lang")}
          style={{ backgroundColor: "#ADD5F5" }}
        >
          {" "}
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Skills;
