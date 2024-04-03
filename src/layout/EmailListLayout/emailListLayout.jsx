import { Outlet } from "react-router-dom"
import {EmailList} from "../../components/EmailList/emailList"

export const EmialListLayout = () => {
return <>
    <EmailList/>
    <Outlet/>
</>
}