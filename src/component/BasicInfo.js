import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  setBasicInfo,
  addSocialLink,
  editSocialLink,
  removeSocialLink,
} from "./store/CVSlice";
import "./DataPreview.css";
import { useNavigate } from "react-router-dom";

const BasicInfo = () => {
  const dispatch = useDispatch();

  const basicInfo = useSelector((state) => state.cv.basicInfo);
  const socialLinks = useSelector((state) => state.cv.socialLinks);

  const first_name = basicInfo.first_name;
  const last_name = basicInfo.last_name;
  const City = basicInfo.city;
  const email = basicInfo.email;
  const phone = basicInfo.phone;
  const country = basicInfo.country;
  const about_info = basicInfo.about_info;

  const first_nameIpHandler = (e) => {
    dispatch(setBasicInfo({ first_name: e.target.value }));
  };
  const last_nameIpHandler = (e) => {
    dispatch(setBasicInfo({ last_name: e.target.value }));
  };
  const cityIpHandler = (e) => {
    dispatch(setBasicInfo({ city: e.target.value }));

    // setAge(e.target.value);
  };
  const emailIpHandler = (e) => {
    // setEmail(e.target.value);
    dispatch(setBasicInfo({ email: e.target.value }));
  };
  const phoneIpHandler = (e) => {
    // setPhone(e.target.value);
    dispatch(setBasicInfo({ phone: e.target.value }));
  };
  const counteryHandler = (e) => {
    // setCountry(e.target.value);
    dispatch(setBasicInfo({ country: e.target.value }));
  };
  const imgHandler = (e) => {
    // setCountry(e.target.value);
    dispatch(setBasicInfo({ img: e.target.value }));
  };
  const AboutInfoHandler = (e) => {
    dispatch(setBasicInfo({ about_info: e.target.value }));
  };
  return (
    // body{
    //   background-color: lightblue;
      
    //   }
    <div className="basicInfoUi" >
      <div className="d-flex">
        <div class="mb-3 me-5 ms-2" style={{ width: "45%" }}>
          <input
          required
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Firt Name"
            value={first_name}
            onChange={first_nameIpHandler}
          />
        </div>
        <div class="mb-3 ms-5" style={{ width: "45%" }}>
          <input
          required
            type="text"
            class="form-control"
            placeholder="Last Name"
            id="exampleInputPassword1"
            value={last_name}
            onChange={last_nameIpHandler}
          />
        </div>
      </div>
      <div className="d-flex">
        <div class="mb-3 me-5 ms-2" style={{ width: "45%" }}>
          <input
          required
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="City"
            value={City}
            onChange={cityIpHandler}
          />
        </div>
        <div class="mb-3  ms-5" style={{ width: "45%" }}>
          <input
          required  
            type="email"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Email"
            value={email}
            onChange={emailIpHandler}
          />
        </div>
      </div>
      <div className="d-flex">
        <div class="mb-3 me-5 ms-2" style={{ width: "45%" }}>
          <input
            class="form-control"
            id="exampleInputPassword1"
            type="number"
            placeholder="Phone"
            value={phone}
            onChange={phoneIpHandler}
          />
        </div>
        <div class="mb-3 ms-5" style={{ width: "45%" }}>
          <input
            type="text"
            value={country}
            onChange={counteryHandler}
            placeholder="Country"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
      </div>

      {/* <div class="form-group">
        <label for="exampleFormControlFile1">Example file input</label>
        <input
        value={img}
          type="file"
          class="form-control-file"
          id="exampleFormControlFile1"
          onChange={imgHandler}
        />
      </div> */}

      <div className="d-flex ms-2">
        <textarea
          name=""
          id=""
          cols="65"
          rows="6"
          placeholder="Tell us About Your Self"
          onChange={AboutInfoHandler}
          value={about_info}
        ></textarea>
      </div>

        <div
          className="row mt-2   ms-5 mb-5  "
          // style={{ border: "2px solid black" }}
        >
          <div className="col-6 mt-3 ">
            <div className="social-link">
            <button
              onClick={() => {
                dispatch(addSocialLink());
              }}
              style={{width: "200px" ,backgroundColor:"#ADD5F5"}}

            >
              + Add Social Media
            </button>
            </div>
            {socialLinks.map((link, index) => {
              return (
                <div
                  style={{ display: "flex " }}
                  className="mt-2 "
                  key={"social_links" + index}
                >
                  <select
                  className="me-2"
                    label="Social Website"
                    placeholder="Social Website"
                    value={link.social_website}
                    onChange={(e) =>
                      dispatch(
                        editSocialLink({
                          index,
                          key: "social_website",
                          value: e.target.value,
                        })
                      )
                    }
                  >
                    <option value="">Website</option>
                    <option value="twitter">Twitter</option>
                    <option value="linkedin">Linkdin</option>
                  </select>

                  <input
                  className="me-2"

                    label="Social Link"
                    placeholder="Social Link"
                    value={link.social_link}
                    style={{ width: "200px" }}
                    onChange={(e) => {
                      dispatch(
                        editSocialLink({
                          index,
                          key: "social_link",
                          value: e.target.value,
                        })
                      );
                    }}
                  />
                  <button
                  style={{backgroundColor:"#ADD5F5"}}
                    onClick={() =>
                      dispatch(
                        removeSocialLink({
                          index,
                        })
                      )
                    }
                  >
                    DELETE
                  </button>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  );
};

export default BasicInfo;
