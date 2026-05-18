import styled from 'styled-components';
import JnuLogo from '../../assets/image/전남대학교 로고.svg';
import { COLORS } from '../../constants/color';

const Main = () => {
  return (
    <Container>
      <Inner>
        <HeaderSection>
          <Logo src={JnuLogo} alt="전남대학교 로고" />
          <Title>전남대학교 의류학과 아카이브</Title>
          <Subtitle>
            Archive of major in Clothing and Textiles, Chonnam National
            University
          </Subtitle>
        </HeaderSection>

        <Section>
          <SectionTitle>졸업전시</SectionTitle>
          <LinkList>
            <LinkItem>
              <a href="https://cnu-clothing-department-graduation-work.vercel.app/">2025 전남대학교 의류학과 졸업전시</a>
            </LinkItem>
            <LinkItem>
              <a href="https://cnucloth-2026.vercel.app/">2026 전남대학교 의류학과 졸업전시</a>
            </LinkItem>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>공식사이트</SectionTitle>
          <LinkList>
            <LinkItem>
              <a
                href="https://www.jnu.ac.kr"
                target="_blank"
                rel="noopener noreferrer"
              >
                전남대학교 홈페이지
              </a>
            </LinkItem>
            <LinkItem>
              <a
                href="https://clothing.jnu.ac.kr"
                target="_blank"
                rel="noopener noreferrer"
              >
                전남대학교 의류학과 홈페이지
              </a>
            </LinkItem>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>소셜미디어</SectionTitle>
          <LinkList>
            <LinkItem>
              <a
                href="https://www.instagram.com/cnu_c.a.t/"
                target="_blank"
                rel="noopener noreferrer"
              >
                전남대학교 의류학과 Instagram
              </a>
            </LinkItem>
          </LinkList>
        </Section>
      </Inner>
    </Container>
  );
};

export default Main;

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${COLORS.background};
  display: flex;
  justify-content: center;
  padding: 80px 24px 120px;

  @media (max-width: 768px) {
    padding: 56px 20px 80px;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 770px;
`;

const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 96px;

  @media (max-width: 768px) {
    margin-bottom: 64px;
  }
`;

const Logo = styled.img`
  width: 157px;
  height: auto;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    width: 76px;
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
  letter-spacing: -1px;
  color: ${COLORS.black};
  margin: 0 0 12px;

  @media (max-width: 768px) {
    font-size: 30px;
    letter-spacing: -0.6px;
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: ${COLORS.gray500};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Section = styled.section`
  margin-bottom: 72px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 56px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: ${COLORS.black};
  margin: 0 0 20px;

  @media (max-width: 768px) {
    font-size: 19px;
    margin-bottom: 16px;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LinkItem = styled.li`
  font-size: 25px;
  font-weight: 500;
  color: ${COLORS.gray600};

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.15s ease;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;