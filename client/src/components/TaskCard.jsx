import React, { useState } from 'react';

export default function TaskCard({ task, onStatusChange, onAddComment }) {
  const [commentText, setCommentText] = useState('');

  const statusColors = {
    'Completed': '#10b981',
    'In Progress': '#f59e0b',
    'Pending': '#6b7280'
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onAddComment(task.id, commentText.trim());
    setCommentText('');
  };

  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderLeft: `5px solid ${statusColors[task.status] || '#6b7280'}`,
      borderRadius: '6px',
      padding: '1rem',
      marginBottom: '0.85rem'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0, color: '#111827' }}>{task.title}</h4>
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          style={{ padding: '0.25rem 0.5rem', border: '1px solid #d1d5db', borderRadius: '4px', background: '#f9fafb' }}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', margin: '0.6rem 0', fontSize: '0.85rem', color: '#4b5563' }}>
        <span>👤 <strong>Assigned:</strong> {task.assignedTo}</span>
        <span>📅 <strong>Deadline:</strong> {task.deadline}</span>
      </div>

      <div style={{ marginTop: '0.5rem', borderTop: '1px solid #f3f4f6', paddingTop: '0.5rem' }}>
        <small style={{ fontWeight: 'bold', color: '#6b7280' }}>
          Comments ({(task.comments || []).length}):
        </small>
        <ul style={{ margin: '0.3rem 0', paddingLeft: '1.2rem', fontSize: '0.8rem', color: '#374151' }}>
          {(task.comments || []).map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
        <form onSubmit={handleComment} style={{ display: 'flex', gap: '0.4rem', marginTop: '0.3rem' }}>
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            style={{ flex: 1, padding: '0.25rem 0.5rem', fontSize: '0.8rem', border: '1px solid #e5e7eb', borderRadius: '4px' }}
          />
          <button type="submit" style={{ padding: '0.25rem 0.6rem', fontSize: '0.8rem', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Post
          </button>
        </form>
      </div>
    </div>
  );
}