import { loginService, registerService } from "@/service/authService";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
    providers: [
        //login by email and password
        CredentialsProvider({
            id:'login',
            name:'login',
            async authorize(userInfo) {
                // console.log("User Info in next auth : ", userInfo);

                //define object structure
                const newUserInfo = {
                    email: userInfo.email,
                    password: userInfo.password
                };

                //call login service
                const login = await loginService(userInfo);
                console.log("login : ", login);
                return login.token;              

            }
        }),
        CredentialsProvider({
            id:'register',
            name: 'register',
            async authorize(userInfo) {
                // console.log("User Info in next auth : ", userInfo);

                //define object structure
                const newUserInfo = {
                    email: userInfo.email,
                    password: userInfo.password
                };

                //call login service
                const login = await registerService(userInfo);
                console.log("login : ", login);
                return login.token;              

            }
        })
    ],

    // callback function is used to set token into cookies
    callbacks: {
        async jwt({token, user}){
            return {...token, ...user};
        },
        async session({session, token}){
            session.user = token;
            return session;
        }
    }

}
const handler = nextAuth(authOption);
export { handler as GET, handler as POST };