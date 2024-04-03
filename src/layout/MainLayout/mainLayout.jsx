import { Outlet } from "react-router-dom"
import { MainNav } from "../../components/MainNav/mainNav"

export const MainLayout = () => {
    return <main>
        <MainNav />
        <Outlet />
    </main>
}