import styled from "styled-components"
import { StyleMain,StyledH2,StyledP} from "../styledCompo"

const ImgDiv = styled.div`
width: 50%;
    margin: 0vh 0vw;
    margin-right: 4vw;
`

const PicDiv = styled.img`
max-width: 100%;
    box-shadow: 0 8px 16px rgba(0,0,0,0.15); 
    border: 0.40vw solid rgba(255, 255, 255, 0.8); 
`
const IntroDiv = styled.div`
width: 50%;
    margin: 0vh 0vw;
    margin-left: 0px;
    font-size: calc(2px + 1.5vw);
    line-height: 1.5;
    text-align: justify;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    padding: 1vh 2vw; 
`
const ContentDiv=styled.div`
display: flex;
    flex-direction: row;
    
    padding: 0vh 0vw;

`
export default function Home(){
    return(
    
            
        <StyleMain>
            <StyledH2> Home </StyledH2>
            <ContentDiv>
                <ImgDiv>
                    <PicDiv src="/pic.png" alt="Elva Zou"/> 
                </ImgDiv>
                <IntroDiv>
                    <StyledP> 
                        Hello, my name is Elva, I'm currenly a senior majoring in computer science at Boston University. 
                        Right now, I'm in the search for a software enginering or data scientist job.  

                        Feel free to click
                        on the navigation bar on the left to learn more about me. 
                    </StyledP>
                    
                </IntroDiv>

            </ContentDiv>
        </StyleMain>
       
        


    )

}


