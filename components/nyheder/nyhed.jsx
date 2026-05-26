import "./nyhed.css"


export default function Nyhed(){
    return(
        <>
        <section className="nyhed">
            <div className="nyhed-text">
            <h2>Tilmeld dig vores nyhedsbrev</h2>
            <p>Få inspiration og nyheder om dyrevelfærd og vores arbejde, direkte i din indbakke.</p>
            </div>
            <div className="nyhed-form">
                <form>
                    <input type="text" placeholder="Navn" className="navn-form" />
                    <input type="email" placeholder="Email" className="navn-form" />
                    <button type="submit" >Tilmeld</button>
                </form>
            </div>
        </section>
        </>
    )
}