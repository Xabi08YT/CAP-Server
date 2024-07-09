"use client"
import Image from "next/image";

export default function resError() {
    return (
        <div className="flex flex-col justify-center items-center justify-between p-24">
            <Image src="/screenwarn.png" height="128" width="128" alt="screen warn icon" />
            <p className="text-red-700 font-extrabold">Erreur: Résolution non supportée. La résolution d'écran minimale supportée est de 360x640px.</p>
        </div>
    );
}