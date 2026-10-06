import React, { useState } from 'react';

export default function TaskForm({ members, onAddTask }) {
  const [title, setTitle] = useState('');
  const [assignedTo, setAssignedTo] = useState(members[0] || '');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({
      id: Date.now(),
      title: title.trim(),
      assignedTo: assignedTo || members[0] || 'Unassigned',
      deadline: deadline || 'No deadline',
      status: 'Pending',
      comments: []
    });

    setTitle('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} style={{
      background: '#fff',
      padding: '1.2rem',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      marginBottom: '1.5rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr)) auto',
      gap: '0.75rem',
      alignItems: 'end'
    }}>
      <div>
        <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.25rem', color: '#374151' }}>Task Title</label>
        <input
          type="text"
          placeholder="e.g. Write Unit Tests"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.25rem', color: '#374151' }}>Assign Member</label>
        <select
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
        >
          {members.map((m, i) => (
            <option key={i} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.25rem', color: '#374151' }}>Deadline</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          style={{ width: '100%', padding: '0.45rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
        />
      </div>

      <button type="submit" style={{
        padding: '0.55rem 1.2rem',
        background: '#059669',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Add Task
      </button>
    </form>
  );
}