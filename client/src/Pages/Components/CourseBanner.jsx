import styled from "styled-components";

const BannerSection = styled.div`
  padding: 4rem;
  width: 100%;
  height: 46vh;
  background-image: url("https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 1rem;
`;

const Path = styled.div`
  display: flex;
;`

const Path_1 = styled.a`
  color: #3d3d3dff;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  font-weight: 550;
  text-decoration: none;

  &:hover {
    color: #158a68;
  }
`;

const Path_2 = styled.a`
  color: #477e6a;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  font-weight: 550;
  text-decoration: none;

  &:hover {
    color: #158a68;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #477e6a;
`;

const SubTitleWrap = styled.div`
  display: flex;
`;

const SubTitle = styled.p`
  color: #3d3d3dff;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  text-decoration: underline;
`;

const FacultyInfo = styled.div`
  margin-bottom: 30px;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 6px;
  border-left: 4px solid #477e6a;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: fit-content;
;`

const FacultyName = styled.a`
  font-size: 1.3rem;
  color: #477e6a;
  text-decoration: none;
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
  transition: color 0.3s ease;
  padding-right: 20rem;

  &:hover {
    color: #158a68;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    font-size: 1.1rem;
  }
;`

const FacultyQualifications = styled.a`
  font-size: 1rem;
  color: #666;
  text-decoration: none;
  font-style: italic;
  transition: color 0.3s ease;

  &:hover {
    color: #477e6a;
    text-decoration: underline;
  }
;`

const CourseBanner = ({
  courseTitle,
  facultyName,
  facultyQualifications
}) => {
    return (
      <BannerSection>
        <Path>
            <Path_1 href="/">Courses</Path_1>
            <p>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</p>
            <Path_2 href="">{courseTitle}</Path_2>
        </Path>
        <Title>{courseTitle}</Title>
        <SubTitleWrap>
            <SubTitle>Course on Knowlix</SubTitle>
            <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
            <SubTitle>By Knowlix Technologies</SubTitle>
        </SubTitleWrap>
        <FacultyInfo>
            <FacultyName href="#faculty-profile">{facultyName}</FacultyName>
            <FacultyQualifications href="#faculty-qualifications">
                {facultyQualifications}
            </FacultyQualifications>
        </FacultyInfo>
      </BannerSection>  
    )
}

export default CourseBanner;