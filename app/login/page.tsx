import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

import { Input } from "@/components/ui/input";
import { login, signup } from "../login/actions";

export const metadata: Metadata = {
  title: "Login",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-start gap-2">
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
    </section>
    
  );
}
