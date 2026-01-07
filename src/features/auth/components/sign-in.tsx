import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader,
    CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {Separator} from "@/components/ui/separator"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { SignInFlow } from "../types"

interface SignInCardProps {
    setState : (state: SignInFlow) => void
}
export const SignInCard = ({setState}:SignInCardProps) =>{
    return (
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">
                    Login to continue
                </CardTitle>
                <CardDescription>
                    Use your email or another service to continue
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5 pb-0 px-0">
                <form className="space-y-2.5">
                    <Input 
                        disabled = {false}
                        placeholder="Email"
                        type="email"
                        value=""
                        onChange={()=>{}}
                        required
                    />
                    <Input
                        disabled = {false}
                        placeholder="Password"
                        type="password"
                        value=""
                        onChange={()=>{}}
                        required
                    />
                    <Button type="submit" className="w-full" size={"lg"} disabled={false}>
                        Continue
                    </Button>
                </form>
                <Separator/>
                <Button 
                    disabled={false} 
                    onClick={()=>{}} 
                    variant={"outline"} 
                    size={"lg"} 
                    className="w-full relative"
                    >
                        Continue with google
                    <FcGoogle className="absolute top-2.5 left-2.5 size-5"/>
                </Button>
                <Button 
                    disabled={false} 
                    onClick={()=>{}} 
                    variant={"outline"} 
                    size={"lg"} 
                    className="w-full relative"
                    >
                        Continue with github
                    <FaGithub className="absolute top-2.5 left-2.5 size-5"/>
                </Button>
                <p className="text-xs text-muted-foreground">
                    Dont have an account ? 
                    <span onClick={()=>setState("signUp")} className="text-sky-700 cursor-pointer hover:underline">click here</span>
                </p>
            </CardContent>
        </Card>
    )
}