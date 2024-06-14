
import Link from 'next/link';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div className="container is-fluid">
      <div className="columns is-centered">
        <div className="column is-one-third">
          <h1 className="title">Login</h1>
          <Login />
          <p className="mt-4">Don't have an account? <Link href="/register">Register here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
