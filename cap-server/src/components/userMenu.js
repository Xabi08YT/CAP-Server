import { DropdownMenu, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { LogOut, Settings, Trash2, User, UserRoundX } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function userMenu({fallback, uid, student}) {
    // <AvatarImage src={getImageURL(uid)}/>
    if(student == "true") {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        
                        <AvatarFallback>{fallback}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <Link>Profil</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <Link>Paramètres</Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <Link className="text-red-700">Se déconnecter</Link>
                    </DropdownMenuItem>
                    <DropDownMenuItem>
                        <Trash2 className="mr-2 h-4 w-4" />
                        <Link className="text-red-700">Se retirer de toutes les relations</Link>
                    </DropDownMenuItem>
                    <DropdownMenuItem>
                        <UserRoundX className="mr-2 h-4 w-4" />
                        <Link className="text-red-700">Supprimer le compte</Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenu>
        );
        // <AvatarImage src={getImageURL(uid)} />
    } else {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                       
                        <AvatarFallback>{fallback}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <Link>Profil</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <Link>Paramètres</Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <Link className="text-red-700">Se déconnecter</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <UserRoundX className="mr-2 h-4 w-4" />
                        <Link className="text-red-700">Supprimer le compte</Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenu>
        );
    }
}