import styled from 'styled-components';

export const LoadSection = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#AEEAF1, #FFFFFF);
    font-family: 'montserrat', sans-serif;
    text-transform: uppercase;
    color: #555555;
    letter-spacing: .1rem;
    @media screen and (min-width:767px){
        letter-spacing: 1rem;
        font-size: 2rem;
    }
`;

export const Section = styled.section`
    width: 90vw;
    margin: 8rem auto;
    max-width: 117rem;
  @media screen and (min-width: 992px) {
    width: 95vw;  
}`;

export const Title = styled.div`
    margin-bottom: 4rem;
    text-align: center;
    text-transform: capitalize;
  @media screen and (min-width: 800px) {
      font-size: 4rem;
  }`;

export const Underline = styled.div`
    width: 8rem;
    height: 0.4rem;
    background: #2caeba;
    margin: 1.2rem auto 6rem;
  `;

export const JobsCenter = styled.div`
    width: 80vw;
    margin: 0 auto;
    max-width: 117rem;
    @media screen and (min-width: 992px) { 
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
`;

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 6.4rem;
    flex-wrap: wrap;
    @media screen and (min-width: 992px) {
      flex-direction: column;
      justify-content: flex-start;
  }
  `;

export const JobBtn = styled.span`
    text-transform: uppercase;
    color: #333;
    width: 14rem;
    letter-spacing: .3rem;
    font-weight: 400;
    transition: .25s ease-out;
    font-size: 2rem;
    border: 2px solid transparent;
    cursor: pointer;
    display: block;
    text-align: center;
    margin: 0 auto;
    &:hover{
      color: #2CAEBA;
      box-shadow: 0 2px #2CAEBA;
    }
    &.active {
      color: #2CAEBA;
      box-shadow: 0 2px #2CAEBA;
    }
    
    
    @media screen and (min-width: 992px) {
      margin-bottom: 1.6rem;
      &:hover {
        color: #2CAEBA;
        box-shadow: -2px 0 #2CAEBA;
      }
      &.active {
      color: #2CAEBA;
        box-shadow: -2px 0 #2CAEBA;
    }
  }
  `;

export const JobInfo = styled.article`
h3{
  font-weight: 400;
  letter-spacing: .2rem;
}
h4{
  text-transform: uppercase;
  color: #617DA3;
  background: #DAE2EC;
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border-radius: .4rem;
  margin: 1.6rem 0 1.4rem;
}
`;

export const JobDate = styled.p`
    color: #617DA3;
    letter-spacing: .16rem;
    margin-bottom: 1.6rem;
  `;

export const JobDesc = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3.2rem;
    align-items: center;
    margin-bottom: 2rem;
    p{
      margin-bottom: 0;
      color: #333;
    }
  `;

export const JobIcon = styled.div`
    color: #2caeba;
`;

