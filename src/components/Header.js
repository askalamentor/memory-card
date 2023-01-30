import '../styles/Header.css';

export default function Header() {
  return (
    <div className="Header">
      <h1 className="title">Memory Game</h1>
      <div className="score-container">
        <span>Score:</span>
        <span>Best Score:</span>
      </div>
    </div>
  );
}
