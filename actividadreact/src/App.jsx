import Header from "./components/Header";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Container from "./components/Container";
import PlayerForm from "./components/PlayerForm";
import PlayerList from "./components/PlayerList";
import { useState } from "react";

function App() {
  const [players, setPlayers] = useState([]);

  const addPlayer = (player) => {
    setPlayers([...players, player]);
  };

  return (
    <>
      <Header />
      <Container>
        <Title text="Registro de Jugadores" />
        <PlayerForm onAdd={addPlayer} />
        <PlayerList players={players} />
      </Container>
      <Footer />
    </>
  );
}

export default App;











