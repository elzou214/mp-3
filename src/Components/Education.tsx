import { StyleMain,StyledH2,ContentDiv} from "../styledCompo"
import styled from "styled-components"

const StyledP=styled.p`
    border-left: 0.5vh solid rgb(232, 123, 232);
    padding: 1vh;
    font-size: calc(0.9vw + 1vh);
    text-align: left;  
    color: black;
`
export default function Education(){
    return(
         <StyleMain>
            <StyledH2>Interests</StyledH2>
            <ContentDiv>
                <StyledP><strong>Newton South High School (2021-2025)</strong> <br/> <br/> <em> 
                            Relevant Coursework: Calculus, Object Oriented Programming, Physics
                        </em>
                </StyledP>
                <StyledP><strong>Boston University (2021-2025)</strong> - BA in Computer Science <br/> <br/> <em> 
                            Relevant Coursework: Algorithms, Machine Learning, Systems Design, 
                            Data Structures, and Web Development.
                        </em></StyledP>
                <StyledP><strong>Boston University (2025-2029)</strong> - MS in Computer Enginering <br/> <br/> <em>
                    Relevant Coursework: Embedded Systems Design, Robotics, Computer Vision, Artificial 
                    Intelligence
                </em></StyledP>
            
            
            </ContentDiv>
        
        </StyleMain>

    )
}