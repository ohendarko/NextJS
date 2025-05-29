'use server';
import { auth, signIn } from "@/auth";
import { error } from "console";
import { useSession } from "next-auth/react";


 
export const SignIn = async() => {
    const { data: session, status } = useSession();
    
    if(error) {
        console.error("Error in SignIn:", error);
        return;
    }
    const result = await signIn("google", { redirect: false })

    return result;

}

export const Sessions = async() => {
    const session = await auth();
    return session.user.name;
}

