import { Outlet } from "react-router-dom"
import {EmailNav} from "../../components/EmailNav/emailNav"
export const EmialLayout = () => {
return <>
    <EmailNav/>
    <Outlet/>
</>
}