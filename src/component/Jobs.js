import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const navigate = useNavigate();

  const [jobTitile, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Job Title"
        onChange={(e) => {
          setJobTitle(e.target.value);
        }}
        value={jobTitile}
      />
      <br />
      <input
        type="text"
        placeholder="company Name"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      />
      <br />
      <label htmlFor="">Start Date </label>
      <input
        type="date"
        onChange={(e) => {
          setStartDate(e.target.value);
        }}
        value={startDate}
      />
      <br />
      <label htmlFor="">End Date</label>
      <input
        type="date"
        onChange={(e) => {
          setEndDate(e.target.value);
        }}
        value={endDate}
      />
      <br />
      <input type="radio" name="" id="current" />
      <label htmlFor="current"> current</label>
      <br />
      <textarea
        name=""
        id=""
        placeholder="descrition"
        cols="25"
        rows="3"
      ></textarea>
      <div className=" btn-view">
        <button className="me-3"  onClick={() => navigate("/preview")}>PreView</button>

        <button onClick={() => navigate(-1)}>back</button>
        <button className="ms-3" onClick={() => navigate("/jobs")}>Next</button>
      </div>
    </div>
  );
};

export default Jobs;
