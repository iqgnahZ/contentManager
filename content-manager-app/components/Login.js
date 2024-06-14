import React, { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/firebase'
import { useRouter } from 'next/router'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Email and password are required')
      return
    }
    setLoading(true)
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      alert('Login successful')
      // console.log('Router object:', router)
      router.push('/')
    } catch (error) {
      setError('Failed to login. ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setLoading(true)
    setError('')
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
      alert('Google login successful')
      // console.log('Router object:', router)
      router.push('/')
    } catch (error) {
      setError('Failed to login with Google. ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <button onClick={handleGoogleLogin} disabled={loading}>
        {loading ? 'Logging in with Google...' : 'Login with Google'}
      </button>
    </div>
  )
}

export default Login
