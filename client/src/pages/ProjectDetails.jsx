import React from 'react';
import ProjectCard from '../components/ProjectCard';
import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';

export default function ProjectDetails({ project, onBack, onAddMember, onAddTask, onStatusChange, onAddComment }) {
  return (
    <div style={{ maxWidth: '900px', margin: '1.5rem auto', padding: '0 1rem' }}>
      <button
        onClick={onBack}
        style={{ marginBottom: '1rem', background: 'transparent', border: 'none', color: '#2563eb', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 'bold' }}
      >
        ← Back to Projects
      </button>

      <ProjectCard project={project} onAddMember={onAddMember} />

      <h3 style={{ marginBottom: '0.75rem', color: '#1f2937' }}>Add New Task</h3>
      <TaskForm members={project.members} onAddTask={onAddTask} />

      <h3 style={{ marginBottom: '0.75rem', color: '#1f2937' }}>Tasks ({project.tasks.length})</h3>
      {project.tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onAddComment={onAddComment}
        />
      ))}
    </div>
  );
}