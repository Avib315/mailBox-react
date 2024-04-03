import { Outlet } from "react-router-dom"
import { MainNav } from "../../components/MainNav/mainNav"
import { Cheats } from "../../components/Cheats/cheats"

export const CheatsLayout = () => {
    return <>
        <Cheats />
        <Outlet />
    </>
}