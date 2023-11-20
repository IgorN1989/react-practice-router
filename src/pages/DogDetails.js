import { useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

const DogDetails = () => {
  const location = useLocation();
  const backLinlLocationRef = useRef(location.state?.from ?? '/dogs');
  const { dogId } = useParams();
  return (
    <>
      <h1>Dog Details: {dogId}</h1>
      <Link to={backLinlLocationRef.current}>Back to Collection Page</Link>
      <ul>
        <li>
          <Link to="subbreeds">SubBreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Suspense faalback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;
