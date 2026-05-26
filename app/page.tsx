import Forening from "../components/animal-image-overlay/forening"
import Dyr from "../components/animal-image-overlay/dyr";
import Nyhed from "../components/nyheder/nyhed"
import "./globals.css"


export default function Home() {
  return (
    <>
      <Forening />

      <section className="home">
        <article>
          <h3>Om os</h3>
          <p>Vi kæmper for at nedbringe antallet af dyr i nød og sikre, at  alle nødstedte dyr får den rette hjælp. vi arbejder med et landsdækkende netværk af frivillige, internater og plejestationer, der hver dag hjælper dyr.</p>
        </article>
        <article>
          <h3>Dyr & Mennesker</h3>
          <p>Dyr er en vigtig del af vores liv og samfundet og styrker deres unikke værdi for mennesker. Dyr skaber tryghed, styrker sociale relationer og øger vores livskvalitet.</p>
          <p>Med dyr følger ansvar, derfor arbejder vi proaktivt med oplysning om ansvarligt ejerskab, så hverken dyr eller mennesker kommer i klemme i dagligdagen. Bag hver eneste sag står en ulykkelig menneskeskæbne, som med den rette hjælp heldigvis næsten finde varige løsninger.</p>
        </article>
        <article>
          <h3>Mad & Forbrug</h3>
          <p>Vi kæmper for et mere naturligt fødevareforbrug og en bæredygtig produktion med fokus på kvalitet, omtanke og respekt for dyr og natur. Det er vores mål, at hele Danmarks fødevareproduktion bliver omlagt til enten frihold eller økologisk drift med forbedret dyrevelfærd.</p>
          <p>Dansk fødevareproduktion er drevet af et ensidigt fokus på vækst, økonomi og lave omkostninger. I dag ejes 99 % af landbruget af store virksomheder, hvor mange dyr holdes under industrilignende forhold. De lever under produktionsforhold – ikke levende væsener. Det betyder, at millioner af dyr i Danmark lever under stærkt kritisable forhold.</p>
        </article>
      </section>


      <Nyhed />
      <Dyr />
    </>
  );
}
