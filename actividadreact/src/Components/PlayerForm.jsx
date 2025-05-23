import { useState } from "react";

function PlayerForm({ onAdd }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && position) {
      onAdd({ name, position });
      setName("");
      setPosition("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Nombre del jugador"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="Posición"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
export default PlayerForm;