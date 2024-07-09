"use client"
import { getFallbackLabel } from "@/modules/database";
import Navi from "@/components/nav";
import useScreenSize from "@/components/useScreenSize";
import { redirect } from "next/navigation";

export default function student({ searchParams }) {
    let screenInfos = useScreenSize();
    if (screenInfos.width < 360 || screenInfos.height < 640) {
        return redirect("/resolutionerror");
    }
    return(
        <div>
            <Navi />
        </div>
    )
}