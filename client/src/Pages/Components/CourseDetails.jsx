import React from 'react';
import styled from 'styled-components';
import { ArrowLeft, Clock, Users, BookOpen, Award, Star, Play, CheckCircle } from 'lucide-react';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
`;

const Header = styled.div`
  background: white;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4B5563;
  font-weight: 500;
  transition: 0.2s;
  &:hover {
    color: #111827;
  }
`;

const Layout = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media(min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const Badge = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  color: #111827;
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #4B5563;
  line-height: 1.75rem;
  margin-bottom: 1.5rem;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: #4B5563;
  font-size: 0.875rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
`;

const CourseImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayButton = styled.button`
  width: 5rem;
  height: 5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  &:hover {
    background: white;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1.5rem;
`;

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #374151;
`;

const ModuleBox = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
`;

const ModuleHeader = styled.div`
  background: #f9fafb;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  color: #111827;
`;

const LessonList = styled.div`
  padding: 1.5rem;
`;

const Lesson = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #374151;
  font-size: 0.875rem;
`;

const Price = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const SidebarButton = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  transition: 0.2s;
`;

const EnrollButton = styled(SidebarButton)`
  background: #059669;
  color: white;
  &:hover {
    background: #047857;
  }
`;

const WishlistButton = styled(SidebarButton)`
  border: 2px solid #e5e7eb;
  color: #374151;
  background: white;
  &:hover {
    background: #f3f4f6;
  }
`;

const InstructorBadge = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  background: linear-gradient(to bottom right, #34d399, #059669);
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CourseDetails = ({ course, onBack }) => {
  const categoryColor = {
    backgroundColor: course?.category && CategoryColors[course.category]?.bg,
    borderColor: course?.category && CategoryColors[course.category]?.border,
    color: course?.category && CategoryColors[course.category]?.text,
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <BackButton onClick={onBack}>
            <ArrowLeft size={20} /> Back to Courses
          </BackButton>
        </HeaderContent>
      </Header>
      <Layout>
        <div>
          <Card>
            <Badge style={categoryColor}>{course.category}</Badge>
            <InfoRow>
              <Star size={16} fill="#FACC15" color="#FACC15" /> {course.rating} Rating
              <div>{course.level}</div>
            </InfoRow>
            <Title>{course.title}</Title>
            <Description>{course.description}</Description>
            <InfoRow>
              <Users size={16} /> {course.students.toLocaleString()} students
              <BookOpen size={16} /> {course.lessons} lessons
              <Clock size={16} /> {course.duration}
            </InfoRow>
          </Card>

          <Card>
            <ImageWrapper>
              <CourseImage src={course.image} alt={course.title} />
              <Overlay>
                <PlayButton>
                  <Play size={32} color="#059669" />
                </PlayButton>
              </Overlay>
            </ImageWrapper>
          </Card>

          <Card>
            <SectionTitle>What's Included</SectionTitle>
            {course.features.map((feature, index) => (
              <Feature key={index}>
                <CheckCircle size={20} color="#10B981" /> {feature}
              </Feature>
            ))}
          </Card>

          <Card>
            <SectionTitle>Course Curriculum</SectionTitle>
            {course.curriculum.map((mod, i) => (
              <ModuleBox key={i}>
                <ModuleHeader>Module {i + 1}: {mod.module}</ModuleHeader>
                <LessonList>
                  {mod.lessons.map((lesson, j) => (
                    <Lesson key={j}>
                      <Play size={16} color="#9CA3AF" /> {lesson}
                    </Lesson>
                  ))}
                </LessonList>
              </ModuleBox>
            ))}
          </Card>
        </div>

        <div>
          <Card>
            <Price>${course.price}</Price>
            <div style={{ color: '#6B7280', textAlign: 'center', marginBottom: '1.5rem' }}>One-time payment</div>
            <EnrollButton>Enroll Now</EnrollButton>
            <WishlistButton>Add to Wishlist</WishlistButton>

            <div style={{ fontSize: '0.875rem', color: '#374151', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Instructor</span><strong>{course.instructor}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Duration</span><strong>{course.duration}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Lessons</span><strong>{course.lessons}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Level</span><strong>{course.level}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Certificate</span><Award size={16} color="#10B981" />
              </div>
            </div>
          </Card>

          <Card>
            <SectionTitle>About the Instructor</SectionTitle>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
              <InstructorBadge>
                {course.instructor.split(' ').map(n => n[0]).join('')}
              </InstructorBadge>
              <div>
                <div style={{ fontWeight: '600', color: '#111827' }}>{course.instructor}</div>
                <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>Expert Instructor</div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
              Experienced professional with years of expertise in {course.category.toLowerCase()}.
              Passionate about teaching and helping students achieve their learning goals.
            </p>
          </Card>
        </div>
      </Layout>
    </Container>
  );
};

export default CourseDetails;

const CategoryColors = {
  Technology: { bg: '#EBF5FF', border: '#2563EB', text: '#1E40AF' },
  Languages: { bg: '#F3E8FF', border: '#7C3AED', text: '#6B21A8' },
  Science: { bg: '#ECFDF5', border: '#10B981', text: '#047857' },
  Creative: { bg: '#FFF7ED', border: '#F59E0B', text: '#D97706' },
  Religious: { bg: '#FEF2F2', border: '#EF4444', text: '#DC2626' },
};
