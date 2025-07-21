import styled from "styled-components";

const CompaniesSection = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    font-size: 1.3rem;
    color: #006c45;
    margin-bottom: 20px;
    font-weight: 600;
  }
;`

const CompanyLogos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  img {
    height: 40px;
    width: auto;
    transition: filter 0.3s ease;

    &:hover {
      filter: grayscale(0%);
    }
  }
;`

const CourseCompanies = () => {
    return (
        <CompaniesSection>
            <h3>Our Alumni Work At</h3>
            <CompanyLogos>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1199px-IBM_logo.svg.png?20250604110737" alt="IBM" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/1200px-Razorpay_logo.svg.png?20171127075036" alt="Razorpay" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Intel_logo_2023.svg/768px-Intel_logo_2023.svg.png?20230330174340" alt="Intel" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/245px-Accenture.svg.png?20241209170218" alt="Accenture" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Wipro_new_logo.svg/768px-Wipro_new_logo.svg.png?20250425120007" alt="Wipro" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/600px-Infosys_logo.svg.png?20100302211036" alt="Infoys" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/104px-EY_logo_2019.svg.png?20200124061112" alt="EY" />
            </CompanyLogos>
          </CompaniesSection>
    )
}

export default CourseCompanies;