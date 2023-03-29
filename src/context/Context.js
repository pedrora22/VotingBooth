import { createContext, useState } from 'react';

export const ContextV = createContext();

const ContextVB = ({ children }) => {
    const [vote, setVote] = useState({
        vote: 0
    })

    const proValue = {
        vote, setVote
    }

    return(
        <ContextV.Provider value={proValue}>
            {children}
        </ContextV.Provider>
    )
}

export default ContextVB