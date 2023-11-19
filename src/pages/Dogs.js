import { Link } from 'react-router-dom';

const Dogs = () => {
  return (
    <div>
      <h1>Collection of 🐶</h1>
      <ul>
        {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'].map(dog => {
          return (
            <li key={dog}>
              <Link to={`${dog}`}>{dog}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dogs;
