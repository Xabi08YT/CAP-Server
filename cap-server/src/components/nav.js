import { navigationMenuTriggerStyle, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import Link from "next/link";
import userMenu from "./userMenu";
import useScreenSize from "./useScreenSize";

export default function Navi() {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            Hello World
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul>
                                <li>
                                    <Link href="#">
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Hi
                                        </NavigationMenuLink>
                                    </Link>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}