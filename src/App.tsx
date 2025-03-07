import styled from 'styled-components'
import Header from './Components/Header'
import Achievements from './Components/Achievements'
import Projects from './Components/Projects'
import Nav from './Components/Nav'
import Experiances from './Components/Experiances'
import Interests from './Components/Interests'
import Education from './Components/Education'
import Home from './Components/Home'
import { Route,Routes,createBrowserRouter,RouterProvider } from 'react-router-dom'

function Root(){
  return(
    <>
      <Nav/>
      <Routes>
        <Route path={`/`} element={<Home/>}/> 
        <Route path={`/achievements`}  element={<Achievements/>} /> 
        <Route path={`/experiances`} element={<Experiances/>}/> 
        <Route path={`/education`} element={<Education/>}/> 
        <Route path={`/projects`} element={<Projects/>}/> 
        <Route path={`/interests`} element={<Interests/>}/> 

      </Routes>
    </>

  )
}


const router=createBrowserRouter(
  [
    {path:"*", Component:Root}
  ]

);



export default function App() {
  return(
    <StyledBody>
      <PageDiv>
        <Header/>
        <LayoutDiv>
          <RouterProvider router={router}/>
          
           
        </LayoutDiv>

      </PageDiv>
      

    </StyledBody>

  )
  

}

const StyledBody = styled.body`
  font-family: 'Open Sans', Arial, sans-serif;
  background-color: white;
`


const PageDiv = styled.div`
 width: 70vw;
    background-color: rgb(244, 230, 244);
    margin: 0 auto;
    @media screen and (max-width: 750px){
    width: 100%;

    }


`
const LayoutDiv = styled.div`
display: flex;
    flex-direction: row;
    border: 0.15vw solid rgb(205, 195, 195);
    padding: 2vh 2vw;
    min-height: 70vh;
    @media screen and (max-width: 750px){
    display: flex;
        flex-direction: column;

    }


`
