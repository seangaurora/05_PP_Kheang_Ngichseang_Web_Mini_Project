'use client'
import React from 'react'
import {signIn} from 'next-auth/react'
import Image from 'next/image'

export default function page() {

  // define handle login
  async function handleLogin(userInfo){
    // console.log(`User Email: ${userInfo.get('email')}, password: ${userInfo.get('password')}`);
    //define structure object
    const newUserInfo = {
        email: userInfo?.get('email'),
        password: userInfo?.get('password')
    }

    //calling next auth service and passing " newUserInfo "
    const res = signIn('credentials', {
      redirect: false,
      ...newUserInfo,
    })
}

  return (
    <>
    <div className=''>
      <div className=''>
      <Image
                  src="/assets/icons/logo.svg"
                  width={150}
                  height={100}
                />
      </div>
      <div className='flex h-[90%]'>
        <div className='w-[50%] h-[90%]'>
          {/* <LoginComponent {...handleLogin}/> */}

          {/* <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login
                        </h1>
                        <form className="space-y-4" action={handleLogin}>
                            <div>
                                <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Email" required=""/>
                            </div>
                            <div>
                                <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="•••••••••••••••" 
                                className="bg-gray-50 mt-3 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                            </div>
                            <button type="submit" className="w-full text-white mt-4 bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>

                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <input 
                                      id="remember" 
                                      aria-describedby="remember" 
                                      type="checkbox" 
                                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                                      required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
          </section> */}



        </div>
        {/* <div className='w-[50%] h-[90%]'>Image</div> */}
      </div>
    </div>
    {/* <div>
      <LoginComponent/>
    </div> */}





    </>
    
  )



}
