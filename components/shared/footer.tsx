'use client'

import { ChevronUp } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import { APP_NAME } from "@/lib/constants"

export default function Footer(){
    return(
        <footer className="bg-[#1605b3] text-white underline-link">
            <div className="w-full">
                <Button variant={"ghost"}
                className="bg-[#1601cd] w-full rounded-none"
                onClick={()=>window.scrollTo({top : 0, behavior : "smooth"})}>
                    <ChevronUp className="mr-2 h-4 w-4" />
                    Back To Top
                </Button>
            </div>
            <div className="p-4">
                <div className="flex justify-center gap-5 text-sm">
                    <Link href='/page/conditions-of-use'>Conditions of Use</Link>
                    <Link href='/page/privacy-policy'>Privacy Notice</Link>
                    <Link href='/page/help'>Help</Link>
                </div>
                <div>
                    <p>© 2000 - 2026, {APP_NAME}, Inc. or its affliates</p>
                </div>
                <div className="mt-8 ">
                    222 Main St., Hoston, TX, Zip 12345 | +1 281 555-7777
                </div>
            </div>
        </footer>
    )
}