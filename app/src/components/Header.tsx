import Image from "next/image"
import React from "react"
import Logo from "../../public/squashpro-logo.png"
import Link from "next/link"
import { Button } from "./ui/button"
import LogoutButton from "./LogoutButton"

const Header = () => {
  return (
    <header className="flex flex-row px-2 py-4 justify-between">
      <div id="logo" className="flex flex-row items-center gap-2 mx-4">
        <Image src={Logo} alt="SquashPro Logo" height={30} width={30} />
        <h1 className="text-xl">SquashPro</h1>
      </div>
      <nav>
        <ul className="flex flex-row gap-3 justify-center items-center">
          <li>
            <Link href="/tracker">Tracker</Link>
          </li>
          <li>
            <Link href="/chat">Chat</Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
