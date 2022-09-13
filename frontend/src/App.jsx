import HomePage from "@pages/HomePage";
import SchoolPage from "@pages/SchoolPage";
import AdminSchoolPage from "@pages/AdminSchoolPage";
import AdminCreateSchoolPage from "@pages/AdminCreateSchoolPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schools/:id" element={<SchoolPage />} />
        <Route path="/admin/schools" element={<AdminSchoolPage />} />
        <Route
          path="/admin/school/create"
          element={<AdminCreateSchoolPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
