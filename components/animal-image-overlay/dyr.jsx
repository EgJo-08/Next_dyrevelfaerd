import "./animal.css"
import Image from "next/image"
import save from "../../images/help/save.jpg"


export default function Dyr(){
    return(
        <div className="image-text-holder">
            <Image src={save} alt="pindsvin" />
            <div className="text-holder">
            <h2 className="big">står du med et dyr i nød?</h2>
            <p>Ring til Dyrenes Vagtcentral på 1812 og få råd og hjælp og håndtering af dyr.</p>
            </div>
        </div>
    )
}