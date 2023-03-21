import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectEmail } from '../redux/features/authSlice';

function PrivateRoute({ children }) {
  const userEmail = useSelector(selectEmail);
  if (userEmail === 'bammydele88@gmail.com') {
    return children;
  }
  return (
    <section>
      <div>
        <h2>Permission Denied to unauthorized users.</h2>

        <Link to="/">
          <button>&larr; Back To Home</button>
        </Link>
      </div>
    </section>
  );
}
export function PrivateRouteLink({ children }) {
  const userEmail = useSelector(selectEmail);
  if (userEmail === 'bammydele88@gmail.com') {
    return children;
  }
  return null;
}

export default PrivateRoute;
