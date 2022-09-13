import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AdminSchoolPage() {
  const [schools, setSchools] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/schools`)
      .then((response) => response.data)
      .then((data) => setSchools(data));
  }, []);

  return (
    <div>
      {schools ? (
        <table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Ajouté le</th>
              <th>Modifié le</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school) => (
              <tr key={school.id}>
                <td>{school.name}</td>
                <td>{school.capacity}</td>
                <td>{school.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
      <Link to="/admin/schools/create">
        <button type="button">Créer une ecole</button>
      </Link>
    </div>
  );
}
