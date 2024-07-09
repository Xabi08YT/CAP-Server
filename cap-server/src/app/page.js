"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useScreenSize from "@/components/useScreenSize";
import { redirect } from "next/navigation";

export default function Home() {
  let screenInfos = useScreenSize();
  if (screenInfos.width < 360 || screenInfos.height < 640) {
    return redirect("/resolutionerror");
  }
  if(screen.width < 400) {
    return(<main className="flex min-h-screen flex-col items-center justify-between">
      <Card className="border-none max-w-sm mx-auto">
        <CardHeader className="flex flex-col self-center items-center">
          <CardTitle>Connexion</CardTitle>
          <CardDescription className="text-center">Pour utiliser le logiciel, vous devez vous connecter.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input type="text" placeholder="Nom d'utilisateur" className="mt-5 border-slate-300" required />
          <Input type="password" placeholder="Mot de passe" className="my-5 border-slate-300" required />
          <Button type="submit" className="min-w-[100%] mt-5">Se connecter</Button>
        </CardContent>
        <CardFooter className="mt-4 text-center text-sm max-w-sm">
          Si vous n'avez pas de compte, vous devez demander sa création aux administrateurs.
        </CardFooter>
      </Card>
    </main>);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="border-slate-300 max-w-sm mx-auto ">
        <CardHeader className="flex flex-col self-center items-center">
          <CardTitle>Connexion</CardTitle>
          <CardDescription className="text-center">Pour utiliser le logiciel, vous devez vous connecter.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input type="text" placeholder="Nom d'utilisateur" className="mt-5 border-slate-300" required />
          <Input type="password" placeholder="Mot de passe" className="my-5 border-slate-300" required />
          <Button type="submit" className="min-w-[100%] mt-5">Se connecter</Button>
        </CardContent>
        <CardFooter className="mt-4 text-center text-sm max-w-sm">
          Si vous n'avez pas de compte, vous devez demander sa création aux administrateurs.
        </CardFooter>
      </Card>
    </main>
  );
}
