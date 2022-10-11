import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { removeEducation, editEducation, addEducation } from "./store/CVSlice";
import { useNavigate } from "react-router-dom";
    

const Education = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const educationData = useSelector((state) => state.cv.education);

  return (
    <>
      <div>
        <h1 className="text-center mt-3">Tell us about your Educations</h1>

        <div className="text-center mt-5 ">
          <button
            onClick={() => {
              dispatch(addEducation());
            }}
            style={{ width: "200px", backgroundColor: "#ADD5F5" }}
            className="mb-3"
          >
            + Add Education
          </button>
        </div>
        {educationData.map((arrElem, index) => {
          return (
            <div className=" mb-5 " style={{ borderBottom: "2px solid blue",  }}>
              <div className="d-flex justify-content-between">
                <input
                  required
                  style={{ height: "35px", width: "250px" }}
                  type="text"
                  className="m-1"
                  placeholder="School Name"
                  value={arrElem.school_name}
                  onChange={(e) => {
                    dispatch(
                      editEducation({
                        index,
                        key: "school_name",
                        value: e.target.value,
                      })
                    );
                  }}
                />
                <input
                  // label="Education"
                  style={{ height: "35px", width: "250px" }}
                  type="text"
                  className="m-1"
                  placeholder="Total Mark"
                  value={arrElem.total_marks}
                  // style={{ width: "200px" }}
                  onChange={(e) => {
                    dispatch(
                      editEducation({
                        index,
                        key: "total_marks",
                        value: e.target.value,
                      })
                    );
                  }}
                />
                <input
                  style={{ height: "35px", width: "250px" }}
                  type="text"
                  className="m-1"
                  placeholder="Obtained Mark"
                  value={arrElem.obtained_marks}
                  onChange={(e) => {
                    dispatch(
                      editEducation({
                        index,
                        key: "obtained_marks",
                        value: e.target.value,
                      })
                    );
                  }}
                />
              </div>
              <div className="d-flex  ">
                <input
                  style={{ height: "35px", width: "250px" }}
                  type="text"
                  className="m-1 "
                  placeholder="Devision"
                  value={arrElem.devision}
                  onChange={(e) => {
                    dispatch(
                      editEducation({
                        index,
                        key: "devision",
                        value: e.target.value,
                      })
                    );
                  }}
                />
               <div className="ip">
               <input
                  style={{ height: "35px", width: "250px" }}
                  className="m-1"
                  type="text"
                  placeholder="Grade"
                  value={arrElem.grade}
                  onChange={(e) => {
                    dispatch(
                      editEducation({
                        index,
                        key: "grade",
                        value: e.target.value,
                      })
                    );
                  }}
                />
               </div>

                <div className="btnn">
                <button
                  onClick={() =>
                    dispatch(
                      removeEducation({
                        index,
                      })
                    )
                  }
                  style={{ height: "35px", backgroundColor: "#ADD5F5" }}
                  className="m-1"
                >
                  DELETE
                </button>
                </div>
              </div>
              {/* <button onClick={() => navigate('/jobs') }>Next</button> */}
            </div>
          );
        })}
      </div>

      <div className="   mt-5 me-5 mb-2 text-end">
        <button
          className="me-3"
          onClick={() => navigate(-1)}
          style={{ backgroundColor: "#ADD5F5" }}
        >
          {" "}
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button
          onClick={() => navigate("/preview")}
          style={{ backgroundColor: "#ADD5F5" }}
        >
          {" "}
          <i class="fa-solid fa-eye"></i>
        </button>
        <button
          className="ms-3"
          onClick={() => navigate("/skill")}
          style={{ backgroundColor: "#ADD5F5" }}
        >
          {" "}
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </>
  );
};

export default Education;
