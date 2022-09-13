/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import School from "./School";

export default function SchoolList() {
  const [schools, setSchools] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/schools`)
      .then((response) => response.data)
      .then((data) => setSchools(data));
  }, []);

  return (
    <div>
      {schools &&
        schools.map((school) => (
          <Link to={`/schools/${school.id}`} key={school.id}>
            <School school={school} />
          </Link>
        ))}
    </div>
  );
}
