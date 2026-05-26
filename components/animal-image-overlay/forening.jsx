import "./animal.css"
import Image from "next/image"
import kittens from "../../images/header/kittens.jpg"


export default function Forening(){
    return(
        <div className="image-text-holder">
            <Image src={kittens} alt="kittens" />
            <div className="text-holder">
            <h2>Foreningen for Dyrevelfærd</h2>
            <p>Vi specialiserer os i dyrevelfærd</p>
            </div>
        </div>
    )
}