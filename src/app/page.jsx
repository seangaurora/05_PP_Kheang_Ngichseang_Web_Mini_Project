import LoginComponent from "@/components/LoginComponent";
import { getServerSession } from "next-auth/next"
export default async function Home() {
  const user = await getServerSession();
  console.log(user)
  return <main>
    heee
  </main>;
}



