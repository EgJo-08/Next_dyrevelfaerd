import Dyr from "../../components/animal-image-overlay/dyr"
import Nyhed from "../../components/nyheder/nyhed"
import Adopter from "../../components/animal-image-overlay/adopter"
import "./frivilig.css"
import Image from "next/image"
import dog from "../../images/volunteer/internat.jpg"
import leading from "../../images/volunteer/leading.jpg"
import volunteer from "../../images/volunteer/volunteer.jpg"

export default function Frivilig() {
    return (
        <>
            <Dyr />

            <section className="frivilig">
                <h3 className="flyt">Bliv frivilig</h3>
                <section className="frivilig-main">
                <article className="frivilig-article ">
                    <div>
                        <h3>Dyreredder</h3>
                    </div>
                    <Image src={dog} alt="dog being held" />
                    <p>En central del af foreningens arbejde med dyreværn udføres af dyreværnsinspektører, som hovedsageligt arbejder frivilligt. Disse assisterer med hjælp til nødstedte dyr og sager, hvor myndighederne ikke selv har mulighed for at bringe dyr til nærmeste dyrlæge eller plejefaciliteter.</p>
                    <div className="disclamer">
                        <p>OBS: Vi har været så heldige at få rigtig mange ansøgninger og har derfor lukket midlertidigt for nye...</p>
                    </div>
                </article>
                <article className="frivilig-article ">
                    <div>
                        <h3>Kredsformand</h3>
                    </div>
                    <Image src={leading} alt="board room meeting" />
                    <p>For at være frivillig i Dyrenes Beskyttelse kræver det, at du har et stort engagement og viden om dyr og dyrevelfærd. Du skal have en relevant erfaring og kunne indgå i dialog. Derudover skal du være klar til at tage ansvaret i din rolle og arbejde tæt sammen med andre frivillige. I planlægningen vil du få støtte fra kredsbestyrelsen, der i begyndelsen vil hjælpe med at organisere arbejdet. Herfra får du mulighed for selv at blive kredsformand.</p>
                </article>
                <article className="frivilig-article ">
                    <div>
                        <h3>Bliv internatfrivillig</h3>
                    </div>
                    <Image src={volunteer} alt="woman standing next to car" />
                    <p>Hverdagen på vores centre er travl og organiseret omkring dyrenes trivsel. Derfor er vi afhængige af, at der er mennesker, som har lyst til at donere deres tid til at gøre en forskel for dyrene som frivillig eller plejefamilie. Vores internater har ofte brug for hjælp til at passe katte og hunde, pleje syge dyr og hjælpe på internaterne.</p>
                </article>
                </section>
            </section>

            <Nyhed />
            <Adopter />
        </>
    )
}