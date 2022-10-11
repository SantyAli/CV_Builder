import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { editWork, addWork, removeWork } from "./store/CVSlice";

export default function WorkHistory() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const work = useSelector((state) => state.cv.workHistory);
  return (
    <div className=" mt-3">
      <h1 className="text-center">Tell us about your most recent job</h1>
      <div>
        <div className="text-center mt-5">
          <button
            onClick={() => {
              dispatch(addWork());
            }}
            style={{ width: "200px", backgroundColor: "#ADD5F5" }}
            className="mb-3"
          >
            + Add Job
          </button>
        </div>

        {work.map((arrElm, index) => {
          return (
            <div className=" mb-3 " style={{ borderBottom: "2px solid blue" }}>
              <div className="d-flex justify-content-around">
                <input
                  required
                  style={{ height: "35px", width: "250px" }}
                  type="text"
                  className="m-1"
                  placeholder="Job Tittle"
                  value={arrElm.job_title}
                  onChange={(e) => {
                    dispatch(
                      editWork({
                        index,
                        key: "job_title",
                        value: e.target.value,
                      })
                    );
                  }}
                />
                <br />
                <input
                  style={{ height: "35px", width: "250px" }}
                  type="text"
                  className="m-1"
                  placeholder="Employer"
                  value={arrElm.employer}
                  // style={{ width: "200px" }}
                  onChange={(e) => {
                    dispatch(
                      editWork({
                        index,
                        key: "employer",
                        value: e.target.value,
                      })
                    );
                  }}
                />
                <br />
                <input
                  style={{ height: "35px", width: "250px" }}
                  type="text"
                  className="m-1"
                  placeholder="Company"
                  value={arrElm.company}
                  onChange={(e) => {
                    dispatch(
                      editWork({
                        index,
                        key: "company",
                        value: e.target.value,
                      })
                    );
                  }}
                />
              </div>
              <div className="d-flex justify-content-around">
                <input
                  style={{ height: "35px", width: "250px" }}
                  type="text"
                  className="m-1"
                  placeholder="Country"
                  value={arrElm.country}
                  onChange={(e) => {
                    dispatch(
                      editWork({
                        index,
                        key: "country",
                        value: e.target.value,
                      })
                    );
                  }}
                />
                <br />
                <input
                  style={{ height: "35px", width: "250px" }}
                  className="m-1"
                  type="date"
                  placeholder="Start Date"
                  value={arrElm.start_date}
                  onChange={(e) => {
                    dispatch(
                      editWork({
                        index,
                        key: "start_date",
                        value: e.target.value,
                      })
                    );
                  }}
                />

                <input
                  style={{ height: "35px", width: "250px" }}
                  className="m-1"
                  type="date"
                  placeholder="End Date"
                  value={arrElm.end_date}
                  disabled={arrElm.toogle}
                  onChange={(e) => {
                    dispatch(
                      editWork({
                        index,
                        key: "end_date",
                        value: e.target.value,
                      })
                    );
                  }}
                />
                <div className="d-flex me-5  ">
                  <input
                    type="checkbox"
                    id={index}
                    name="currentlyWorking"
                    onChange={() =>
                      dispatch(
                        editWork({
                          index,
                          key: "toogle",
                          value: !arrElm.toogle,
                        })
                      )
                    }
                  />
                  <label htmlFor={index} className="mt-2">
                    Currently Working
                  </label>
                </div>
                <button
                  onClick={() =>
                    dispatch(
                      removeWork({
                        index,
                      })
                    )
                  }
                  className="m-1"
                  style={{ height: "35px", backgroundColor: "#ADD5F5" }}
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className=" mt-5 me-5 mb-2 text-end"> */}
      <div className="mt-5 me-5 mb-2 text-end">
        <button
          onClick={() => navigate(-1)}
          style={{ backgroundColor: "#ADD5F5" }}
        >
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button
          className="ms-3"
          onClick={() => {
            navigate("/preview");
          }}
          style={{ backgroundColor: "#ADD5F5" }}
        >
          <i class="fa-solid fa-eye"></i>
        </button>
        <button
          style={{ backgroundColor: "#ADD5F5" }}
          onClick={() => navigate("/educ")}
          className="ms-3"
        >
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}
