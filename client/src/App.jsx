import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProjectDetails from './pages/ProjectDetails';

export default function App() {
  const [currentUser, setCurrentUser] = useState({ name: 'Arun', email: 'arun@college.edu' });
  const [authView, setAuthView] = useState('login');
  const [activeProjectId, setActiveProjectId] = useState(1);

  // Default project preloaded with the Smart Attendance System requirement
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Smart Attendance System',
      description: 'Track academic project tasks and deadlines for Smart Attendance System.',
      members: ['Arun', 'Bala', 'Karthik', 'Priya'],
      tasks: [
        { id: 1, title: 'Database', assignedTo: 'Arun', deadline: '2026-10-10', status: 'Completed', comments: ['MongoDB schemas drafted'] },
        { id: 2, title: 'Backend API', assignedTo: 'Bala', deadline: '2026-10-15', status: 'Completed', comments: ['Auth endpoints tested'] },
        { id: 3, title: 'React UI', assignedTo: 'Karthik', deadline: '2026-10-20', status: 'In Progress', comments: ['Components connected'] },
        { id: 4, title: 'Testing', assignedTo: 'Priya', deadline: '2026-10-25', status: 'Pending', comments: [] },
        { id: 5, title: 'Documentation', assignedTo: 'Arun', deadline: '2026-10-30', status: 'Pending', comments: [] }
      ]
    }
  ]);

  const activeProject = projects.find(p => p.id === activeProjectId);

  const handleAddMember = (member) => {
    setProjects(projects.map(p => {
      if (p.id === activeProjectId && !p.members.includes(member)) {
        return { ...p, members: [...p.members, member] };
      }
      return p;
    }));
  };

  const handleAddTask = (task) => {
    setProjects(projects.map(p => {
      if (p.id === activeProjectId) {
        return { ...p, tasks: [...p.tasks, task] };
      }
      return p;
    }));
  };

  const handleStatusChange = (taskId, status) => {
    setProjects(projects.map(p => {
      if (p.id === activeProjectId) {
        return {
          ...p,
          tasks: p.tasks.map(t => t.id === taskId ? { ...t, status } : t)
        };
      }
      return p;
    }));
  };

  const handleAddComment = (taskId, comment) => {
    setProjects(projects.map(p => {
      if (p.id === activeProjectId) {
        return {
          ...p,
          tasks: p.tasks.map(t => t.id === taskId ? { ...t, comments: [...t.comments, comment] } : t)
        };
      }
      return p;
    }));
  };

  const handleCreateProject = (newProj) => {
    setProjects([...projects, newProj]);
    setActiveProjectId(newProj.id);
  };

  if (!currentUser) {
    return authView === 'login' ? (
      <Login onLogin={(user) => setCurrentUser(user)} onSwitchToRegister={() => setAuthView('register')} />
    ) : (
      <Register onRegister={(user) => setCurrentUser(user)} onSwitchToLogin={() => setAuthView('login')} />
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', fontFamily: 'sans-serif' }}>
      <Navbar 
        projectTitle={activeProject ? activeProject.name : 'Dashboard'} 
        user={currentUser} 
        onLogout={() => setCurrentUser(null)} 
      />
      {activeProject ? (
        <ProjectDetails
          project={activeProject}
          onBack={() => setActiveProjectId(null)}
          onAddMember={handleAddMember}
          onAddTask={handleAddTask}
          onStatusChange={handleStatusChange}
          onAddComment={handleAddComment}
        />
      ) : (
        <Dashboard
          projects={projects}
          onSelectProject={(id) => setActiveProjectId(id)}
          onCreateProject={handleCreateProject}
        />
      )}
    </div>
  );
}