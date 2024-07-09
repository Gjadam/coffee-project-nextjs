import { redirect } from 'next/navigation';

// Components
import Sidebar from '../templates/admin-panel/SideBar'

// Backend
import { authUser } from "@/utils/serverHelpers";

export default async function AdminPanelLayout({ children }) {

    const user = await authUser()

    if (user) {
        if (user.role !== 'ADMIN') {
            redirect("/login-register")
        }
    } else {
        redirect("/login-register")
    }


    return (
        <div className=" flex flex-col xl:flex-row  xl:gap-20  p-10 w-full h-full">
            <Sidebar userInfos={user} />
            <div className=" w-full xl:w-4/5 bg-gray-100 rounded-[3rem] p-5 overflow-hidden">
                {children}
            </div>
        </div>
    )
}
