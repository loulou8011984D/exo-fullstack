import School from "@components/School";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SchoolPage() {
  const [school, setSchool] = useState("");

  const params = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/schools/${params.id}`)
      .then((response) => response.data)
      .then((data) => setSchool(data));
  }, []);

  return (
    <>
      <h2>Page d'une ecole</h2>
      <School school={school} />
    </>
  );
}
