import styled from "styled-components";

export const StyledContainer1 = styled.div`
    height: 75vh;
    display: flex;
    flex-direction: column;
    background-color: rgb(245, 245, 247);
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 0px 0px rgba(235,0,0,0,0.5)
    position: relative;
`

export const StyledContainer2 = styled.div`
    height: 75vh;
    display: flex;
    flex-direction: column;
    background-color: rgb(0, 0, 0);
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 0px 0px rgba(235,0,0,0,0.5);
    color: white;
    overflow-y: hidden;
    overflow-x: hidden;
`

export const StyledContainer3 = styled.div`
    height: 55vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgb(245, 245, 247);
    align-items: center;
    justify-content: center;
    color: black;
    position: relative;
`
export const StyledContainer4 = styled.div`
    height: 10vh;
    display: flex;
    background-color: rgb(238, 238, 238);
    align-items: center;
    justify-content: center;
    border-top: 1px solid grey;
    color: grey;
`

export const StyledContainer5 = styled(StyledContainer1)`
    justify-content: start;
    overflow-y: hidden;
    overflow-x: hidden;
`