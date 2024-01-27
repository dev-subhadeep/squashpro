"use client"
import React from "react"
import Logo from "../../public/squashpro-logo.png"
import Image from "next/image"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, SearchIcon } from "lucide-react"
import MessagesIcon from "./icons/MessagesIcon"
import ThirdIcon from "./icons/ThirdIcon"
import { useRouter } from "next/navigation"
import Link from "next/link"

const SideMenu = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col shadow-xl p-4 w-[90px] h-screen fixed top-0 gap-[32px]">
      <div id="logo">
        {/* <Image src={Logo} height={56} width={56} alt="SquashPro logo" /> */}
        <Link href="/">
          <div
            id="icon"
            className="p-8 bg-[#615EF0] rounded-xl h-4 w-4 flex flex-row justify-center items-center text-white font-bold text-xl"
          >
            Q
          </div>
        </Link>
      </div>
      <Button onClick={() => router.push("/")} variant="ghost">
        <HomeIcon />
      </Button>
      <Button onClick={() => router.push("/chat")} variant="ghost">
        <MessagesIcon />
      </Button>
      <Button onClick={() => router.push("/tracker")} variant="ghost">
        <ThirdIcon />
      </Button>
      <Button variant="ghost">
        <SearchIcon />
      </Button>
      <Button variant="ghost">
        <CalendarIcon />
      </Button>
    </div>
  )
}

export default SideMenu
