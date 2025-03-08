import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    padding-right: 5vw;
    @media screen and (max-width: 750px){
        padding-right: 0;
            width: 100%;

    }


`
const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    width: 15vw;
    
    list-style: none;
    padding-left: 0;
    text-align: center;
    align-items: center;
    border: 0.15vw solid rgb(205, 195, 195);
    background-color: white;

    @media screen and (max-width: 750px){
    padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: white;
    }
`

const StyledLi = styled.li`
    width: 90%;
    padding: 2vh 0;
    font-size: calc(3px + 2vw);
    @media screen and (max-width: 750px){
    font-size: calc(2px + 2.5vw);
        padding: 2% 1%;

    }
`


export default function Nav(){
    
    
    return(
        
        <StyledNav>
            
            <StyledUl>
                <StyledLi>
                    <Link to={`/`}> Home </Link>

                </StyledLi>

                <StyledLi>
                    <Link to={`/achievements`}>Achievements</Link>
                </StyledLi>

                <StyledLi>
                    <Link to={`/experiances`}> Experiances</Link>
                </StyledLi>

                <StyledLi>
                    <Link to={`/education`}> Education </Link>
                </StyledLi>

                <StyledLi>
                   <Link to={`/projects`}> Projects</Link> 
                </StyledLi>

                <StyledLi>
                    <Link to={`/interests`}> Interests</Link>
                </StyledLi>

            </StyledUl>

        </StyledNav>

    )
}