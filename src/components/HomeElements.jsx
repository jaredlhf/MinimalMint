import styled from "styled-components";
import iconImage from "../assets/Mint_icon.png"

export const StyledButton = styled.button`
    height: 50px;
    width: 100px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    border-color: black;
    color: black;
    background-color: white;  
`

export const StyledTitle = styled.h1`
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 500;
`

export const StyledText = styled.h2`
    font-size: 20px;
    font-weight: 500;
`

export const StyledInput = styled.input`
    height: 50px;
    width: 600px;
    border: 2px solid black;
    border-radius: 4px;

    font-size: 16px;
    font-weight: 500;
    padding: 0px 10px;
`

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    padding: 20px 40px;
`

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const Icon = styled.img`
    width: 100px;
    height: auto;
`

export const WalletButton = styled(StyledButton)`
    width: 150px;
    margin-left: auto;
`
export const MetadataButton = styled(StyledButton)`
    
`

export const SwapButton = styled(StyledButton)`
    
`

export const MintButton = styled(StyledButton)`
    
`
