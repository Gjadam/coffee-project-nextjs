import { redirect } from "next/navigation";

// Components
import Sidebar from "../templates/user-panel/Sidebar";

// Backend
import { authUser } from "@/utils/serverHelpers";

export default async function UserPanelLayout({ children }) {

    const user = await authUser()

    if (!user) {
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
