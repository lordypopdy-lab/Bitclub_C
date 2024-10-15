import { createContext, useEffect, useState } from "react";

export const TokenContext = createContext({});

export function TokenContextProvider({ children }) {
    const [tokens, setToken] = useState(null);
    useEffect(() => {
        try {
            if (!tokens) {
                axios.get('/tokens').then(({ data }) => {
                    setToken(data);
                })
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }, [])

    return (
        <TokenContext.Provider value={{ tokens, setToken }}>
            {children}
        </TokenContext.Provider>
    )
}