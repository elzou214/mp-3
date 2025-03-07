import { StyleMain,StyledH2,ContentDiv} from "../styledCompo"
import styled from "styled-components"
const StyledP = styled.p`
border-left: 0.5vh solid rgb(232, 123, 232);
    padding: 0.8vh;
    font-size: calc(1px + 1vw + 1vh);
    text-align: left;  
    color: black
`

export default function Achievements(){
    return(
        <StyleMain>
            <StyledH2>Achievements</StyledH2>
            <ContentDiv>
            <StyledP> 
                            Awarded with <strong>Dean's List </strong>every year from 2021 to 2025 with a GPA of 4.0 
                        </StyledP>

                        <StyledP>
                            <strong>Employee of the Month</strong> for every Month at Boogle from 2025 to 2030.  
                        </StyledP>

                        <StyledP>
                            Working in a group of ten, successfully developing and implementing the first VR interface that simulates taste.
                        </StyledP>

                        <StyledP>
                            <strong>Inventor of Sleep Simulation Technology,</strong>  that simulates 10 hours of sleep in just one hour
                        </StyledP>

            </ContentDiv>
        </StyleMain>

    )
}