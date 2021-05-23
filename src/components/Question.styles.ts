import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 1100px;
    background: rgb(34,137,195);
    background: linear-gradient(0deg, rgba(34,137,195,1) 0%, rgba(62,45,253,1) 100%);
    border-radius: 0%;
    border: 2px solid grey;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0 , 0,0,0.25);
    text-align: center;

    p{
        font-size: 1rem;
    }
`

export const ButtonWrap = styled.div`
    transition: all 0.3s ease;

    ::hover{
        opacity: 0.8;
    }
    button{
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        border-radius: 6px;
        color: black;
        font-weight: 800;
    }
`

