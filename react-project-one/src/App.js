import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import Overview from "./Components/ReviewModal/Overview";

function App() {
  return (
    <div dir="rtl">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </div>
  );
}

export default App;
