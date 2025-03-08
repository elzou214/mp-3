import { StyleMain,StyledH2,ContentDiv} from "../styledCompo"
import styled from "styled-components"

const StyledP=styled.p`
color : black;
border-left: 0.5vh solid rgb(232, 123, 232);
    padding: 0.8vh;
    font-size: calc(2px + 1vh + 1vw);
    text-align: left;  
    line-height: 1.6;
`




export default function Interests(){
    document.title = "Interests | Resume";
    return(
        <StyleMain>
            <StyledH2>Interests</StyledH2>
            <ContentDiv>
            <StyledP> <strong>Music: </strong> Passionate about exploring various music genres 
                            and occualtionly creating and appreciating music.  Interest in studying 
                        audio enginering for better sound design. </StyledP>
                        <StyledP><strong>Gaming: </strong> Enjoys a wide range of games such as strategy, 
                            FPS, and RPG, with a good understand of game rules and storytelling. Applies
                             analytical and problem-solving skills from gaming experiances to software development 
                             and programming tasks in computer science.</StyledP>
            </ContentDiv>

        </StyleMain>
        


    )

}