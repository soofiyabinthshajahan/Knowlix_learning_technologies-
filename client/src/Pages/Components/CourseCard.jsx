import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryColors = {
  Technology: { bg: '#EBF5FF', border: '#2563EB', text: '#1E40AF' },
  Languages: { bg: '#F3E8FF', border: '#7C3AED', text: '#6B21A8' },
  Science: { bg: '#ECFDF5', border: '#10B981', text: '#047857' },
  Creative: { bg: '#FFF7ED', border: '#F59E0B', text: '#D97706' },
  Religious: { bg: '#FEF2F2', border: '#EF4444', text: '#DC2626' },
};

const Card = styled.div`
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: all 0.3s;
  border: 1px solid #e5e7eb;
  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    border-color: #d1d5db;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 12rem;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  backdrop-filter: blur(4px);
  border: 1px solid;
`;

const RatingBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  background: rgba(0,0,0,0.7);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  backdrop-filter: blur(4px);
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #4B5563;
  margin-bottom: 1rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const Label = styled.span`
  color: #6B7280;
  font-weight: 500;
`;

const Value = styled.span`
  font-weight: 600;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const OutlineButton = styled.button`
  flex: 1;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  border: 2px solid #e5e7eb;
  color: #374151;
  background: white;
  transition: all 0.2s;
  &:hover {
    background: #f9fafb;
    border-color: #d1d5db;
    transform: translateY(-2px);
  }
`;

const FillButton = styled.button`
  flex: 1;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  background: #059669;
  border:none;
  color: white;
  transition: all 0.2s;
  &:hover {
    background: #047857;
    transform: translateY(-2px);
  }
`;

const CourseCard = ({ course, onViewDetails }) => {
  const color = CategoryColors[course.category];

  return (
    <Card>
      <ImageWrapper>
        <Image src={course.image} alt={course.title} loading="lazy" />
        <Badge style={{
          backgroundColor: color.bg,
          borderColor: color.border,
          color: color.text
        }}>
          {course.category}
        </Badge>
        <RatingBadge>⭐ {course.rating}</RatingBadge>
      </ImageWrapper>

      <Content>
        <Title>{course.title}</Title>
        <Description>{course.description}</Description>
        {course.audience && (
          <InfoRow>
            <Label>Audience</Label>
            <Value>{course.audience}</Value>
          </InfoRow>
        )}
        {course.duration && (
          <InfoRow>
            <Label>Duration</Label>
            <Value>{course.duration}</Value>
          </InfoRow>
        )}
        <InfoRow>
          <Label>Students</Label>
          <Value>{course.students.toLocaleString()}</Value>
        </InfoRow>
        <ButtonGroup>
          <Link to={`/courses/${course.id}`} style={{ flex: 1, textDecoration: 'none' }}>
            <OutlineButton>View Details</OutlineButton>
          </Link>
          <FillButton>Enroll Now</FillButton>
        </ButtonGroup>
      </Content>
    </Card>
  );
};

export default CourseCard;
