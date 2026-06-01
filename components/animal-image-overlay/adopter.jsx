import "./animal.css"
import Image from "next/image"
import adopt from "../../images/adopt/adopt.jpg"


export default function Dyr() {
    return (
        <div className="image-text-holder">
            <Image src={adopt} alt="pindsvin" />
            <div className="text-holder">
                <h2 className="big">Adoptér et dyr</h2>
                <p>Overvejer du et nyt medlem af familien? Måske er det det perfekte match til et af vores mange søde internatdyr, som venter på nye kærlige hjem..</p>
            </div>
        </div>
    )
}