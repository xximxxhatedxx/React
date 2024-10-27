import React from 'react';
import { useNavigationHistory } from './useNavigationHistory';
import { CloseButton, Modal, ModalContainer, ModalContent } from './DebugHistoryModalStyled';

const DebugHistoryModal = ({onClose, show}) => {
    const { history, clearHistory } = useNavigationHistory();

    if(!show){
        return null;
    }

    return (
        <Modal>
            <ModalContainer>
                <CloseButton onClick={onClose}>×</CloseButton>
                <ModalContent>
                    <h2>Navigation History</h2>
                    <ul>
                        {history.map((path, index) => (
                            <li key={index}>{path}</li>
                        ))}
                    </ul>
                    <button onClick={clearHistory}>Clear History</button>
                </ModalContent>
            </ModalContainer>
        </Modal>
        
    );
};

export default DebugHistoryModal;
