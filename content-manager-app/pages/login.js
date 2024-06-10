import Link from 'next/link';
import Login from '@/components/Login';

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Login />
      <p>Don't have an account? <Link href="/register">Register here</Link></p>
    </div>
  );
};

export default LoginPage;
