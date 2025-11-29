// src/ProjectDetailPage.js

import { ShowCasePage } from './components/ShowCasePage';
import { useParams } from 'react-router-dom';
import { projectsData } from './data/projectsData';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 20px 80px 20px' }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: '#fff',
          marginBottom: '20px',
          fontFamily: 'Centra, sans-serif'
        }}>
          Project Not Found
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#B8B8B8',
          fontFamily: 'Centra, sans-serif'
        }}>
          Sorry, we couldn't find the project you're looking for.
        </p>
      </div>
    );
  }

  return <ShowCasePage {...project} />;
}
