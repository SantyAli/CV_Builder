import React from "react";
import { useNavigate } from "react-router-dom";
// import { deleteEducation } from "./store/CVSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import "./DataPreview.css";
const DataPreview = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const basicInfo = useSelector((state) => state.cv.basicInfo);
  const userEdu = useSelector((state) => state.cv.education);
  const workHistroy = useSelector((state) => state.cv.workHistory);
  const socialLink = useSelector((state) => state.cv.socialLinks);
  const skill = useSelector((state) => state.cv.skill);
  const language = useSelector((state) => state.cv.language);
  const hobby = useSelector((state) => state.cv.hobby);

  return (
    <>
      <div style={{ border: "4px solid blue", padding: "20px 40px" }}>
        {/* <h3>Basic Info</h3>
      <hr /> */}
        <div className="text-end">
          <div className=" basicInfo">
            <div style={{ color: "blue" }}>
              <h3>
                {" "}
                {basicInfo.first_name} {basicInfo.last_name}
              </h3>
            </div>

            <p>
              {" "}
              <span style={{ color: "#949494", fontSize: "17px" }}>
                City:{" "}
              </span>
              <b>{basicInfo.city}</b>
            </p>
            <p>
              {" "}
              <span style={{ color: "#949494", fontSize: "17px" }}>
                Country:{" "}
              </span>
              <b>{basicInfo.country}</b>
            </p>
            <p>
              <span style={{ color: "#949494" }}>Phone: </span>{" "}
              <b>{basicInfo.phone}</b>
            </p>
            <p>
              <span style={{ color: "#949494" }}>Email: </span>
              <b>{basicInfo.email}</b>
            </p>
            <p> {basicInfo.img}</p>
            <span style={{ color: "#949494" }}>Social Links: </span>
            <br />
            {socialLink.map((arrElem, id) => {
              return (
                <div>
                  <p>
                    {arrElem.social_website} :
                    <span style={{ color: "blue" }}>
                      <u>{arrElem.social_link}</u>{" "}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <h3 style={{ color: "blue" }}>About Self</h3>
        <p style={{ fontSize: "20px" }}>{basicInfo.about_info}</p>
        <br />
        <hr />
        <h3 style={{ color: "blue" }}>Education</h3>
        <table class="table" >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">School Name</th>
              <th scope="col">Total Marks</th>
              <th scope="col">Obtained Marks</th>
              <th scope="col">Devision</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          {userEdu.map((arrElem, id) => {
            return (
              <tbody key={id}>
                <tr>
                  <th scope="row">{id + 1}</th>
                  <td>{arrElem.school_name}</td>
                  <td>{arrElem.total_marks}</td>
                  <td>{arrElem.obtained_marks}</td>
                  <td>{arrElem.devision}</td>
                  <td>{arrElem.grade}</td>
                </tr>
              </tbody>
            )
          })}
        </table>
        <h3 style={{ color: "blue" }}>Work Histroy</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Job Title</th>
              <th scope="col">Employer</th>
              <th scope="col">Country</th>
              <th scope="col">Company</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
            </tr>
          </thead>
          {workHistroy.map((arrElem, id) => {
            return (
              <tbody key={id}>
                <tr>
                  <th scope="row">{id + 1}</th>
                  <td>{arrElem.job_title}</td>
                  <td>{arrElem.employer}</td>
                  <td>{arrElem.country}</td>
                  <td>{arrElem.company}</td>
                  <td>{arrElem.start_date}</td>
                  <td>{arrElem.end_date}</td>
                </tr>
                {/* <button onClick={() => dispatch(deleteEducation(arrElem.id))}> Del</button> */}
              </tbody>
            );
          })}
        </table>
        <h3 style={{ color: "blue" }}>Skills</h3>
        {/* <span style={{ color: "#949494" }}>Skills: </span> */}
        <div className="d-flex ">
          {skill.map((arrElem, id) => {
            return (
              <div>
                {console.log(arrElem)}
                <span style={{ color: "blue" }} className="pills">
                  {arrElem.skill}{" "}
                </span>
              </div>
            );
          })}
        </div>
        <hr />
        <h3 style={{ color: "blue" }}>Language</h3>
        <div className="d-flex ">
          {language.map((arrElem, id) => {
            return (
              <div>
                <span style={{ color: "blue" }} className="pills">
                  {arrElem.language}{" "}
                </span>
              </div>
            );
          })}
        </div>
        <hr />
        <h3 style={{ color: "blue" }}>Hobby</h3>
        <div className="d-flex ">
          {hobby.map((arrElem, id) => {
            return (
              <div>
                {console.log(arrElem)}
                <span style={{ color: "blue" }} className="pills">
                  {arrElem.hobby}{" "}
                </span>
              </div>
            );
          })}
        </div>
        <div className=" mt-5 me-5 mb-2 text-end">
          <button
            onClick={() => navigate(-1)}
            style={{ backgroundColor: "#ADD5F5" }}
          >
            back
          </button>
        </div>
      </div>
    </>
  );
};

export default DataPreview;
