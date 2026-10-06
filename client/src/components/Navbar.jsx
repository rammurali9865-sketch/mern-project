import React from 'react';

export default function Navbar({ projectTitle, onLogout, user }) {
  return (
    <nav style={{
      background: '#1f2937',
      color: '#fff',
      padding: '0.85rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#60a5fa' }}>ProjectTracker</h2>
        <span style={{ fontSize: '0.9rem', color: '#9ca3af' }}>| {projectTitle}</span>
      </div>
      {user && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.85rem', color: '#d1d5db' }}>👤 {user.name}</span>
          <button 
            onClick={onLogout}
            style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '0.3rem 0.7rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}