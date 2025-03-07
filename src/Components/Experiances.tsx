import { StyleMain,StyledH2,ContentDiv} from "../styledCompo"
import styled from "styled-components"

const StyledP = styled.p`

font-size: calc(1.7px + 1.1vw + 1.1vh);
    color:#901466;
    margin-top: 0;
`

const StyledLi = styled.li`
font-size: calc(1px + 1vw + 1vh);
    padding-bottom: 4%;
    color: black;
`
export default function Experiances(){
    return(
        <StyleMain>
            <StyledH2>Experiances</StyledH2>
            <ContentDiv>
            <StyledP><strong>Software Engineer(2025-2029) at <em>Boogle</em></strong></StyledP>
                        <StyledLi>Implement ML algorithms and conduct tests and experiments for ML systems</StyledLi>
                        <StyledLi>Designed and optimized algorithms that reduced system latency by 40%</StyledLi>

                        <StyledP><strong>Store Manager(2029-2033) at <em>City Conviance</em></strong></StyledP>
                        <StyledLi> Contributing to a 24% increase in store loyalty program enrollment.</StyledLi>
                        <StyledLi> Implemented a new transaction process that sped up checkout times by 42%</StyledLi>
            </ContentDiv>
        </StyleMain>

    )

}