import { Card } from '../card/Card';
import './card-list.css';

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
