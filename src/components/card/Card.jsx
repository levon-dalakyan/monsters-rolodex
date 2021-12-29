import './card.css';

export const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <div>
        <img
          src={`https://robohash.org/${monster.id}?set=set4&size=180x180`}
          alt="monster"
        />
      </div>
      <h2>{monster.name}</h2>
      <div>{monster.address.city}</div>
      <p>{monster.email}</p>
    </div>
  );
};
