import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import UserAuthForm from "@/components/forms/user-auth-form";
import { login, signup } from "../login/actions";

export const metadata: Metadata = {
  title: "Login",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center">
      <div className="h-full flex items-center container">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Card>
            <form>
              <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>Please enter your username and password to login.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Username</Label>
                      <Input id="email" name="email" placeholder="Your email" required type="email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" name="password" required type="password" />
                    </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" formAction={login}>Log in</Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
