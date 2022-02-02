import styled from "styled-components";



export const Background = styled.div`
  width: 100%;
  background-color: ${(props) => (props.color ? props.color : "#ffffff")};
`;

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding: 0 20px;
    max-width: 1120px;
    width: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  

  @media (min-width: 1024px) {
    max-width: 1120px;
    width: 100%;
    
  }
`;

export const LargeContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  

  @media (min-width: 1024px) {
    max-width: 1300px;
    width: 100%;
    padding: 0 60px;
  }
`;


export const InfoContainer = styled.div` 
width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  

  @media (min-width: 1024px) {
    max-width: 927px;
    width: 100%;
    
  }
`