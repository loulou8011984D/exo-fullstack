export default function School({ school }) {
  return (
    <div className="school-container">
      <p>{school.name}</p>
      <p>{school.capacity}</p>
      <p>{school.country}</p>
    </div>
  );
}
