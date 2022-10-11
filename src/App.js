import "./App.css";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Homee from "./component/Homee";
import BasicInfo from "./component/BasicInfo";
import store from "./component/store/store";
import Education from "./component/Education";
import Jobs from "./component/Jobs";
import DataPreview from "./component/DataPreview";
import WorkHistory from "./component/WorkHistory";
import Language from "./component/Language";
import Skills from "./component/Skills";
import BasicInfoo from "./component/BasicInfoo";
import Hobby from "./component/Hobby";
import FirstPage from "./component/FirstPage";
function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<BasicInfo />} />
          <Route path="/histry" element={<WorkHistory />} />
          <Route path="/educ" element={<Education />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/preview" element={<DataPreview />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/lang" element={<Language />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/homee" element={<Homee />} />
          <Route path="/basicinfo" element={<BasicInfoo />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
