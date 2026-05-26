import Image from "next/image"
import Link from "next/link"
import logo from "../../images/logo.png"
import "./header.css"

export default function Header(){
    return(
        <>
        <header className="header">
            <div className="header-image">
            <Image src={logo} alt="Foreningen for Dyrevelfærd logo" />
            <h2>Foreningen for Dyrevelfærd</h2>
            </div>
            <ul>
                <Link href="/" ><li>Hjem</li></Link>
                <Link href="/frivilig"><li>Bliv frivilig</li></Link>
                <Link href="/adopter"><li>Adopter et dyr</li></Link>
            </ul>
        </header>
        </>
    )
}