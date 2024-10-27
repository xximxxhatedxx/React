import React from 'react';
import { useNavigationHistory } from './useNavigationHistory';

const DebugHistoryModal = ({onClose, show}) => {
    const { history, clearHistory } = useNavigationHistory();

    if(!show){
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-container">
                <button className="close" onClick={onClose}>×</button>
                <div className='modal-content'>
                    <h2>Navigation History</h2>
                    <ul>
                        {history.map((path, index) => (
                            <li key={index}>{path}</li>
                        ))}
                    </ul>
                    <button onClick={clearHistory}>Clear History</button>
                </div>
            </div>
        </div>
        
    );
};

export default DebugHistoryModal;
