function PlayerList({ players }) {
  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>
          {player.name} - {player.position}
        </li>
      ))}
    </ul>
  );
}

export default PlayerList;
