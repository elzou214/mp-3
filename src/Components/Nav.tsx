import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
`
const StyledUl = styled.ul`
`

const StyledLi = styled.li`
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