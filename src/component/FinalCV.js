import React from "react";
import { useNavigate } from "react-router-dom";
// import { deleteEducation } from "./store/CVSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import "./FinalCV.css";
import Pdf from "react-to-pdf";
import { Button } from "@mui/material";

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

  const ref = React.createRef();

  return (
    <>
      <div
        ref={ref}
        style={{ border: "1px solid black", padding: "20px 20px" }}
      >
        <div className="text-start">
          <div style={{ color: "#002060", fontFamily: "Arial Rounded MT" }}>
            <h2>
              {basicInfo.first_name} {basicInfo.last_name}
            </h2>
          </div>
          <div style={{ color: "#002060", fontFamily: "Arial Rounded MT" }}>
            <h4>Software Engineer</h4>
          </div>
        </div>
        <div className="text-end topp ">
          <div className=" basicInfo">
            <p style={{ color: "#0f78d4" }}>
              <span style={{ color: "#949494" }}> </span>
              {basicInfo.email}
            </p>
            <p>
              <span style={{ color: "#949494" }}></span> {basicInfo.phone}
            </p>
            <p>
              <span style={{ color: "#949494" }}></span> {basicInfo.address}
            </p>
            <p>
              {" "}
              <span style={{ color: "#949494", fontSize: "15px" }}></span>
              {basicInfo.city}
            </p>
            <p>
              {" "}
              <span style={{ color: "#949494", fontSize: "15px" }}> </span>
              {basicInfo.country}
            </p>
          </div>
        </div>
        <div>
          <p style={{ lineHeight: 1.5, fontSize: 14 }}>
            Quick- learner and detail-oriented professional with high
            proficiency in multi-tasking, crisis management, and problem
            resolution. Ability to employ knowledge of software engineering best
            practices and expertise gained through work experience and education
            to develop software and resolve problems/issues. Interpersonal
            communicator with an aptitude for conducting market research and
            liaising with vendors/key stakeholders to support organizational
            objectives.
          </p>
        </div>
        <div>
          <div
            style={{
              color: "#002060",
              fontFamily: "Arial Rounded MT",
              textAlign: "center",
            }}
          >
            <h4>Areas of Experties</h4>
          </div>
        </div>
        <div>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <li>Advanced Processor Technologies</li>
            <li>Team Lead</li>
            <li>Project Management</li>
            <li style={{}}>Teamwork & Multitasking</li>
            <li style={{ width: "48.5%" }}>Cross-Cultural Communication</li>
          </ul>
        </div>
        <div
          style={{
            color: "#002060",
            fontFamily: "Arial Rounded MT",
            textAlign: "center",
          }}
        >
          <h4>Career Experience</h4>
        </div>
        <div>
          {workHistroy.map((arrElem, id) => {
            return (
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ fontWeight: "bold", color: "#002060" }}>
                    {" "}
                    {arrElem.job_title}{" "}
                  </p>
                  <p>
                    {" "}
                    {arrElem.start_date}-to-{arrElem.end_date}{" "}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      marginTop: "-15px",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                  >
                    {" "}
                    {arrElem.company}{" "}
                  </p>
                  <p style={{ marginTop: "-15px", width: "100%" }}>
                    Lorem ipsum dolor sit amet. Ea dolorem quaerat ut dolorem
                    vitae qui placeat odio eum fuga accusantium ut rerum
                    cupiditate. Qui excepturi nobis aut repellat unde vel
                    voluptatibus praesentium qui deserunt exercitationem. Eos
                    aliquid error est laudantium recusandae sit omnis omnis hic
                    ullam cupiditate est fugit quaerat est omnis maxime!
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            color: "#002060",
            fontFamily: "Arial Rounded MT",
            textAlign: "center",
          }}
        >
          <h4>Education Background</h4>
        </div>

        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sr#</th>
                <th scope="col">Institue</th>
                <th scope="col">Degree Title</th>
                <th scope="col">Division</th>
                <th scope="col">Passing Year</th>
              </tr>
            </thead>
            {userEdu.map((arrElem, id) => {
              return (
                <tbody key={id}>
                  <tr>
                    <th scope="row">{id + 1}</th>
                    <td>{arrElem.school_name}</td>
                    <td>{arrElem.degree}</td>
                    <td>{arrElem.devision}</td>
                    <td>{arrElem.passingyear}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
      >
        <Pdf targetRef={ref} filename="Resume.pdf"  x={17} y ={2} >
          {({ toPdf }) => (
            <Button variant="outlined" sx={{ mt: 2 }} onClick={toPdf}>
              Download Resume
            </Button>
          )}
        </Pdf>
      </div>
    </>
  );
};

export default DataPreview;
