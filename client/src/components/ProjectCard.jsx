import React, { useState } from 'react';

export default function ProjectCard({ project, onAddMember }) {
  const [memberInput, setMemberInput] = useState('');

  const completedCount = project.tasks.filter(t => t.status === 'Completed').length;
  const progressPercent = project.tasks.length 
    ? Math.round((completedCount / project.tasks.length) * 100) 
    : 0;

  const handleMemberSubmit = (e) => {
    e.preventDefault();
    if (!memberInput.trim()) return;
    onAddMember(memberInput.trim());
    setMemberInput('');
  };

  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 style={{ margin: '0 0 0.5rem 0', color: '#111827' }}>{project.name}</h2>
          <p style={{ margin: '0 0 1rem 0', color: '#6b7280', fontSize: '0.9rem' }}>{project.description}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>
            {progressPercent}%
          </span>
          <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Progress</div>
        </div>
      </div>

      <div style={{ width: '100%', background: '#e5e7eb', height: '8px', borderRadius: '4px', overflow: 'hidden', marginBottom: '1.25rem' }}>
        <div style={{ width: `${progressPercent}%`, background: '#10b981', height: '100%', transition: 'width 0.3s ease' }}></div>
      </div>

      <div>
        <strong style={{ fontSize: '0.9rem', color: '#374151' }}>Team Members:</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '0.5rem 0' }}>
          {project.members.map((m, idx) => (
            <span key={idx} style={{ background: '#e0f2fe', color: '#0369a1', padding: '0.25rem 0.6rem', borderRadius: '12px', fontSize: '0.85rem' }}>
              {m}
            </span>
          ))}
        </div>

        <form onSubmit={handleMemberSubmit} style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          <input
            type="text"
            placeholder="Add new team member..."
            value={memberInput}
            onChange={(e) => setMemberInput(e.target.value)}
            style={{ padding: '0.4rem 0.6rem', borderRadius: '4px', border: '1px solid #d1d5db', fontSize: '0.85rem' }}
          />
          <button type="submit" style={{ padding: '0.4rem 0.8rem', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            + Add
          </button>
        </form>
      </div>
    </div>
  );
}