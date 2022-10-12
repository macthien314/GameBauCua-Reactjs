import styled from 'styled-components'; 

export const Button = styled.button`
    background:${props=>props.bgPrimary ? 'linear-gradient(#f74c0b, #ec4736)' : 'blue'} ;  
    color:#fff;
    border:none;
    border-radius: 0.5rem;
    font-weight:bold;
    padding:1rem;
    opacity:1;
    &:hover{
            opacity:0.7;
            transition: all 0.5s;
            
    }
    &.button_style{
        font-size:25px;
    }


`

export const SmallButton = styled(Button)`
    background-color: orange;
    color: white;
    font-size: 3rem;

`