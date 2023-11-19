import { useParams } from 'react-router-dom';

export const SubBreeds = () => {
  const { dogId } = useParams();
  return <div>SubBreeds: {dogId}</div>;
};
