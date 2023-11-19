import { useParams, Link, Outlet } from 'react-router-dom';

const DogDetails = () => {
  const { dogId } = useParams();
  return (
    <>
      <h1>Dog Details: {dogId}</h1>
      <ul>
        <li>
          <Link to="subbreeds">Subbreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogDetails;
