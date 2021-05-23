import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }
    body{
    background: rgb(34,137,195);
    background: linear-gradient(0deg, rgba(34,137,195,1) 0%, rgba(62,45,253,1) 100%);
    background-size: cover;
    margin: 0;
    display: flex;
    justify-content: center;
    }
    *{
        box-sizing: border-box;
        font-family: 'Catamaran' , sans-serif;
    }
    h1{
        color: whitesmoke;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
        color: whitesmoke;
    }
    .score{
        color: whitesmoke;
        font-size: 2rem;
        margin: 0;
    }

    .start , .next{
        cursor: pointer;
        border: 2px solid black;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 5px;
        height: 40px;
        padding: 0 40px;
    }
    .start{
        max-width: 200px;
    }
`