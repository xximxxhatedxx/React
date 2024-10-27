import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    position: relative;
    background-color: #fff;
    padding: 30px 20px 20px;
    margin: 40px 0px;
    border: 1px solid #888;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    max-height: 90vh;
`;

export const ModalContent = styled.div`
    max-height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    overflow: hidden auto;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        width: 3px;
    }
  
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        background:black; 
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background:rgb(54, 56, 58); 
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;

    &:hover {
        color: red;
    }
`;