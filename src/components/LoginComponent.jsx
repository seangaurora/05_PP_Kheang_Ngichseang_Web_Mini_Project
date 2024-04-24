// 'use client'
// import React from 'react'

// export default function LoginComponent({handleLogin}) {

//   return (
//     <>
        
// {/* <div className="flex justify-center">
//     <div className="flex justify-center flex-1">
//         <div className="">
//             <div classNameName="mt-12 flex flex-col items-center">
//                 <h1 className="text-2xl xl:text-3xl font-extrabold">
//                     Sign In
//                 </h1>
                
//                 <div className="w-full flex-1 mt-8">

//                    <form action={handleLogin} className="">
//                         <input
//                             className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                             type="email" placeholder="Email" name='email'/>
//                         <input
//                             className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
//                             type="password" placeholder="Password" name='password' />
//                         <button
//                             className="mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            

//                             <span className="ml-3">
//                                 Sign In
//                             </span>
//                         </button>
//                     </form>

//                     <div className="my-12 border-b text-center">
//                         <div
//                             className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
//                             Or sign In with Google
//                         </div>
//                     </div>

//                     <div className="flex flex-col items-center">
//                         <button
//                             className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
//                             <div className="bg-white p-2 rounded-full">
//                                 <svg className="w-4" viewBox="0 0 533.5 544.3">
//                                     <path
//                                         d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
//                                         fill="#4285f4" />
//                                     <path
//                                         d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
//                                         fill="#34a853" />
//                                     <path
//                                         d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
//                                         fill="#fbbc04" />
//                                     <path
//                                         d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
//                                         fill="#ea4335" />
//                                 </svg>
//                             </div>
//                             <span className="ml-4">
//                                 Sign In with Google
//                             </span>
//                         </button>
//                     </div>

                    

                   
//                 </div>
//             </div>
//         </div>
       
//     </div>
// </div> */}

// <section className="bg-gray-50 dark:bg-gray-900">
//   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//       <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//           <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
//           Flowbite    
//       </a>
//       <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                   Sign in to your account
//               </h1>
//               <form className="space-y-4 md:space-y-6" action={handleLogin}>
//                   <div>
//                       <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                       <input 
//                       type="email" 
//                       name="email" 
//                       id="email" 
//                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
//                   </div>
//                   <div>
//                       <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                       <input 
//                       type="password" 
//                       name="password" 
//                       id="password" 
//                       placeholder="••••••••" 
//                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
//                   </div>
//                   <div className="flex items-center justify-between">
//                       <div className="flex items-start">
//                           <div className="flex items-center h-5">
//                             <input 
//                             id="remember" 
//                             aria-describedby="remember" 
//                             type="checkbox" 
//                             className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
//                             required=""/>
//                           </div>
//                           <div className="ml-3 text-sm">
//                             <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
//                           </div>
//                       </div>
//                       <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
//                   </div>
//                   <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
//                   <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                       Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
//                   </p>
//               </form>
//           </div>
//       </div>
//   </div>
// </section>

//     </>
    
//   )
// }
