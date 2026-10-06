import React, { useState } from 'react';

export default function Dashboard({ projects, onSelectProject, onCreateProject }) {
  const [projectName, setProjectName] = useState('');
  const [projectDesc, setProjectDesc] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    if (!projectName.trim()) return;
    onCreateProject({
      id: Date.now(),
      name: projectName.trim(),
      description: projectDesc,
      members: ['Arun'],
      tasks: []
    });
    setProjectName('');
    setProjectDesc('');
  };

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2 style={{ marginBottom: '1.25rem', color: '#111827' }}>Academic Projects</h2>

      {/* Create Project Card */}
      <form onSubmit={handleCreate} style={{ background: '#fff', padding: '1.25rem', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '2rem' }}>
        <h4 style={{ margin: '0 0 0.75rem 0', color: '#1f2937' }}>+ Create New Project</h4>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Project Name (e.g., Smart Attendance System)"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
            style={{ flex: 1, minWidth: '220px', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
          />
          <input
            type="text"
            placeholder="Description..."
            value={projectDesc}
            onChange={(e) => setProjectDesc(e.target.value)}
            style={{ flex: 2, minWidth: '250px', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
          />
          <button type="submit" style={{ padding: '0.5rem 1.25rem', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Create
          </button>
        </div>
      </form>

      {/* Project Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
        {projects.map(p => {
          const completed = p.tasks.filter(t => t.status === 'Completed').length;
          const pct = p.tasks.length ? Math.round((completed / p.tasks.length) * 100) : 0;
          return (
            <div
              key={p.id}
              onClick={() => onSelectProject(p.id)}
              style={{
                background: '#fff',
                padding: '1.25rem',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>{p.name}</h3>
              <p style={{ margin: '0 0 1rem 0', fontSize: '0.85rem', color: '#6b7280' }}>{p.description || 'No description provided.'}</p>
              <div style={{ fontSize: '0.85rem', color: '#374151', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>Tasks: {completed} / {p.tasks.length}</span>
                <strong>{pct}%</strong>
              </div>
              <div style={{ width: '100%', background: '#e5e7eb', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${pct}%`, background: '#10b981', height: '100%' }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}