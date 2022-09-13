import axios from "axios";
import { useState } from "react";

export default function AdminCreateSchoolPage() {
  const [school, setSchool] = useState({
    name: "",
    capacity: "",
    country: "",
  });

  const postSchool = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/schools`, { ...school })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };

  return (
    <div>
      <p>Page de création d'ecole</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postSchool();
        }}
      >
        <input
          type="text"
          value={school.name}
          placeholder="name"
          onChange={(e) =>
            setSchool({
              ...school,
              name: e.target.value,
            })
          }
        />
        <input
          type="number"
          value={school.capacity}
          placeholder="nombre eleves"
          onChange={(e) =>
            setSchool({
              ...school,
              capacity: e.target.value,
            })
          }
        />{" "}
        <input
          type="text"
          value={school.country}
          placeholder="country"
          onChange={(e) =>
            setSchool({
              ...school,
              country: e.target.value,
            })
          }
        />
        <input type="submit" value="Créer une ecole" />
      </form>
    </div>
  );
}
