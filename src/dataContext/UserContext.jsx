import { createContext, useContext, useState } from "react";
export const UserContexts = createContext({
    userId: "",
})
function UserContextsProvider({ children }) {
    const [userId, setUserId] = useState("6616d4ebfeb2a84fe1ce6271")
    const value = {
        userId: userId
    }
    return <UserContexts.Provider value={value}> {children}</UserContexts.Provider>
}

export default UserContextsProvider;