import React, { useState } from 'react';
import CourseCard from './CourseCard';
import { courses } from '../Data/CourseData';
import styled from 'styled-components';

const CourseGrid = styled.div`
  display: grid;
  gap: 2rem;

  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;


const CoursePage = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCourses = showAll ? courses : courses.slice(0, 4);

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>
        Explore Our Courses
      </h2>

      <CourseGrid>
        {visibleCourses.map((course) => (
          <CourseCard key={course.id} course={course} onViewDetails={(id) => console.log('View details for', id)} />
        ))}
      </CourseGrid>

      {courses.length > 2 && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: '0.5rem',
              border: '2px solid #059669',
              background: showAll ? 'white' : '#059669',
              color: showAll ? '#059669' : 'white',
              transition: 'all 0.3s',
              cursor: 'pointer',
            }}
          >
            {showAll ? 'Show Less' : 'View More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
