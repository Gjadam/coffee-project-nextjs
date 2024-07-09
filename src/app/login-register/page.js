'use client'
import { useState } from "react"
// Components
import Login from "../../components/templates/login-register/Login"
import { authTypes } from "@/utils/constants"
import Register from "../../components/templates/login-register/Register"

function Login_register() {

  const [authType, setAuthType] = useState(authTypes.LOGIN)

  const showRegisterForm = () => {
    setAuthType(authTypes.REGISTER)
  }

  const showLoginForm = () => {
    setAuthType(authTypes.LOGIN)
  }

  return (
    <div className=' flex gap-5 w-full h-screen  overflow-hidden '>
      <div className=" h-full hidden lg:block lg:w-3/5 p-10 ">
        <div className=" w-full  h-full rounded-3xl bg-[url('/images/jpg/register-bg.jpg')] bg-cover bg-center bg-no-repeat ">
        </div>
      </div>
      <div className="flex justify-start items-center w-full lg:w-2/5 transition-all duration-200">
        <div className=" flex justify-start items-center w-full p-10">
          {
            authType === authTypes.LOGIN ? (
              <Login showRegisterForm={showRegisterForm} />
            ) : (
              <Register showLoginForm={showLoginForm} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Login_register