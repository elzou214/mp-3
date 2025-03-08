import { useState } from "react";
import { StyleMain,StyledH2} from "../styledCompo"
import styled from "styled-components"

const StyledOutput = styled.div`

 margin-top: 5vh;
    border: 0.15vw solid rgb(205, 195, 195);
    min-width: 15vh;
    min-height: 0.5vh;
    background-color: white;
    font-size: calc(1.5vh + 1vw);

`


const StyledCalculator = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    text-align: center;
`
const StyledNumbers = styled.div`

display: flex;
    flex-direction: column;
    padding: 6%;
    width: 50%;
    margin-top: 0;
`
const First = styled.input`
margin-bottom: 3vh;
height: 8vh;    
    color: black;
    text-align: center;
    font-size: calc(3vh + 1vw);
    background-color:white; 


`

const Second = styled.input`
height: 8vh;    
    text-align: center;
    color: black;
    font-size: calc(3vh + 1vw);
    background-color:white;  


`
const StyledButton =styled.button`
    font-size: calc(7px + 1.2vw); 
    color: white;
    padding: 1vh 1.5vw;  
    background-color: #2980B9;  
    border-radius: 1.2vw;
    border-color: black;


`
const StyledLabel = styled.label`
  color : black;
`
export default function Projects() {
  document.title = "Projects | Resume";
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [output, setOutput] = useState("\u200B"); 

  const calculate = (s: string) => {
    const num1 = Number(first);
    const num2 = Number(second);
    let result: number;

    switch (s) {
      case "pow":
        result = 1 
        for(let i = 0; i < num2; i++){
          result = num1 * result
      }
        break;
      case "add":
        result = num1 + num2;
        break;
      case "sub":
        result = num1 - num2;
        break;
      case "div":
        result = num1 / num2;
        break;
      case "mul":
        result = num1 * num2;
        break;
      default:
        return;
    }
    setOutput(result.toString());
  };

  const clearAll = () => {
    setFirst("");
    setSecond("");
    setOutput("\u200B");
  };

  return (
    <StyleMain>
      <StyledH2> Calculator</StyledH2>
      <StyledCalculator>
        
        <StyledNumbers>
          <StyledLabel htmlFor="First">Num1</StyledLabel>

          <First
            type="number" value={first} onChange={(e) => setFirst((e.target.value))}/>
          <StyledLabel htmlFor="Second">Num2</StyledLabel>
          <Second
            type="number" value={second} onChange={(e) => setSecond((e.target.value))}/>
        </StyledNumbers>  

        <div>
          <StyledButton onClick={() => calculate("pow")}> ** </StyledButton>
          <StyledButton onClick={() => calculate("add")}> + </StyledButton>
          <StyledButton onClick={() => calculate("sub")}> - </StyledButton>
          <StyledButton onClick={() => calculate("div")}> / </StyledButton>
          <StyledButton onClick={() => calculate("mul")}> * </StyledButton>
          <StyledButton onClick={clearAll}> Clear </StyledButton>
        </div>

        <StyledOutput>
          <h3 style={{ color: Number(output) < 0 ? "red" : "black" }}>
            {output}
          </h3>
        </StyledOutput>
      </StyledCalculator>
    </StyleMain>
  );
}
