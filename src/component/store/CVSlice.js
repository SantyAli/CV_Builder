const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  basicInfo: {
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    email: "",
    phone: "",
    country: "",
    img: "",
    about_info: "",
  },
  workHistory: [
    {
      job_title: "",
      employer: "",
      country: "",
      company: "",
      start_date: "",
      end_date: "",
      toogle: false,
    },
  ],
  socialLinks: [],
  education: [
    {
      degree: "",
      passingyear: "",
      school_name: "",
      total_marks: "",
      obtained_marks: "",
      devision: "",
      grade: "",
    },
  ],
  skill: [{}],
  language: [{}],
  hobby: [{}],
};
const CVSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    setBasicInfo(state, action) {
      state.basicInfo = { ...state.basicInfo, ...action.payload };
    },
    addSocialLink(state, action) {
      state.socialLinks.push({
        social_website: "",
        social_link: "",
      });
    },
    editSocialLink(state, action) {
      // index, key, value
      const { index, key, value } = action.payload;
      let social_links = [...state.socialLinks];
      const link = social_links[index];
      if (social_links[index]) {
        link[key] = value;
      }

      state.socialLinks = [...social_links];
    },
    removeSocialLink(state, action) {
      // index
      const { index } = action.payload;
      let social_links = [...state.socialLinks];
      social_links.splice(index, 1);
      state.socialLinks = [...social_links];
    },
    setEducation(state, action) {
      // state.education = [...state.education, { ...action.payload }];
      // state.education = [...state.education,{...action.payload}];
      // state.education = [...state.education,...action.payload];
      // state.education = [{...state.education,...action.payload}];
    },
    addEducation(state, action) {
      state.education.push({
        school_name: "",
        total_marks: "",
        obtained_marks: "",
        devision: "",
        grade: "",
      });
    },
    editEducation(state, action) {
      // index, key, value
      const { index, key, value } = action.payload;
      let education = [...state.education];
      const obj = education[index];
      if (obj) {
        obj[key] = value;
      }
      state.education = [...education];
    },
    removeEducation(state, action) {
      // index
      const { index } = action.payload;
      let education = [...state.education];
      education.splice(index, 1);
      state.education = [...education];
    },
    addWork(state, action) {
      state.workHistory.push({
        job_title: "",
        employer: "",
        country: "",
        company: "",
        start_date: "",
        end_date: "",
        toogle: false,
      });
    },
    editWork(state, action) {
      // index, key, value
      const { index, key, value } = action.payload;
      let workHistory = [...state.workHistory];
      const obj = workHistory[index];
      if (obj) {
        obj[key] = value;
      }
      state.workHistory = [...workHistory];
    },
    removeWork(state, action) {
      // index
      const { index } = action.payload;
      let workHistory = [...state.workHistory];
      workHistory.splice(index, 1);
      state.workHistory = [...workHistory];
    },
    setWorkHistory(state, action) {
      state.workHistory = [...state.workHistory, { ...action.payload }];
    },
    // educationForm(state, action) {
    //   let x = state.education;
    //   let newobj = {
    //     [action.payload]: {
    //       name: action.payload,
    //       address: "",
    //     },
    //   };

    //   state.education = { x, ...newobj };
    //   console.log(state.education);
    // },
    addSkills(state, action) {
      state.skill.push({
        // social_website: "",
        skill: "",
      });
    },
    editSkills(state, action) {
      // index, key, value
      const { index, key, value } = action.payload;
      let skill = [...state.skill];
      const link = skill[index];
      if (link) {
        link[key] = value;
      }
      state.skill = [...skill];
    },
    removeSkills(state, action) {
      // index
      const { index } = action.payload;
      let skill = [...state.skill];
      skill.splice(index, 1);
      state.skill = [...skill];
    },
    //language

    addLanguages(state, action) {
      state.language.push({
        // social_website: "",
        language: "",
      });
    },
    editLanguages(state, action) {
      // index, key, value
      const { index, key, value } = action.payload;
      let language = [...state.language];
      const link = language[index];
      if (link) {
        link[key] = value;
      }
      state.language = [...language];
    },
    removeLanguages(state, action) {
      // index
      const { index } = action.payload;
      let language = [...state.language];
      language.splice(index, 1);
      state.language = [...language];
    },
    addHobby(state, action) {
      state.hobby.push({
        // social_website: "",
        hobby: "",
      });
    },
    editHobby(state, action) {
      // index, key, value
      const { index, key, value } = action.payload;
      let hobby = [...state.hobby];
      const link = hobby[index];
      if (link) {
        link[key] = value;
      }
      state.hobby = [...hobby];
    },
    removeHobby(state, action) {
      // index
      const { index } = action.payload;
      let hobby = [...state.hobby];
      hobby.splice(index, 1);
      state.hobby = [...hobby];
    },
    //hobby
    deleteEducation(state, action) {
      const exist = state.education.find((x) => x.id === action.payload);
      if (exist) {
        return state.education.filter((item) => item.id !== exist.id);
        //  state.filter((item) => item.id !== exist.id);
      }
    },
  },
});
export const {
  addEducation,
  removeEducation,
  editEducation,
  editWork,
  addWork,
  removeWork,
  setBasicInfo,
  addSocialLink,
  editSocialLink,
  removeSocialLink,
  setEducation,
  setWorkHistory,
  editSkills,
  addSkills,
  removeSkills,
  addLanguages,
  editLanguages,
  removeLanguages,
  addHobby,
  removeHobby,
  editHobby,
} = CVSlice.actions;
export default CVSlice.reducer;
