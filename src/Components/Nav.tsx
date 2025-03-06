import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
padding-right: 5vw;

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
`

const StyledLi = styled.li`
 width: 90%;
    padding: 2vh 0;
    font-size: calc(3px + 2vw);
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