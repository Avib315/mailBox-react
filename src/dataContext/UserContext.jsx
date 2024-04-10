import { createContext, useContext, useState } from "react";
export const UserContexts = createContext({
    userId: "",
})
function UserContextsProvider({ children }) {
    const [userId, setUserId] = useState("6613d0b33817d926fb939ceb")
    const value = {
        userId: userId
    }
    return <UserContexts.Provider value={value}> {children}</UserContexts.Provider>
}

export default UserContextsProvider;