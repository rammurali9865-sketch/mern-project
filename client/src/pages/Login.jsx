import React, { useState } from 'react';

export default function Login({ onLogin, onSwitchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin({ email, name: email.split('@')[0] });
    }
  };

  return (
    <div style={{ maxWidth: '380px', margin: '5rem auto', padding: '2rem', background: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <h2 style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#1f2937' }}>Student Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="email"
          placeholder="College Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
        />
        <button type="submit" style={{ padding: '0.7rem', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Login
        </button>
      </form>
      <p style={{ marginTop: '1.2rem', textAlign: 'center', fontSize: '0.85rem', color: '#6b7280' }}>
        Don't have an account? <span onClick={onSwitchToRegister} style={{ color: '#2563eb', cursor: 'pointer', fontWeight: 'bold' }}>Register</span>
      </p>
    </div>
  );
}