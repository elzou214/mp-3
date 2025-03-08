import styled from "styled-components"
const StyledH1 = styled.h1`
  margin: 0;  
  padding: 1vh 0;  
  color: black;
`

const StyledP = styled.p`
  margin: 0;    
  padding: 1vh 0;  
  color: black;
`

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    background-color:#cea8ce; 
    @media screen and (max-width: 750px){
    align-items: center;

    }


    `

export default function Header(){
    return(
        <StyledHeader>
          <StyledH1> Elva Zou </StyledH1>
          <StyledP> My Online Resume </StyledP>
        </StyledHeader>
    )

}