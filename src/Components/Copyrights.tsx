import styled from "styled-components"
import { Link } from "react-router-dom";



const StyledFooter = styled.footer`
text-align: center;
    background-color:#cea8ce; 


`

export default function Copyrights(){
    return(
        <StyledFooter>
                <p>All Rights Reserved by Elva Zou <Link to={`/`}> Credits</Link> &copy;</p>
        </StyledFooter>
    )
}