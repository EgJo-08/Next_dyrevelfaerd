import "./footer.css"

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-kontakt">
            <h3>kontakt</h3>
            <ul>
                <li>Torvesøvej 22, 1.</li>
                <li> 1131 København K</li>
                <li> CVR: 22446187</li>
                <li> Husk at du kan få fradrag for donationer på op til 16.600 kr.</li>
            </ul>
            </div>
            <div className="footer-copyright">
            <p>© 2024 - Foreningen for Dyrevelfærd</p>
            </div>
            <div className="footer-partnere">
                <h3>partnere</h3>
                <ul>
                    <li>Anima</li>
                    <li>World Animal Protection</li>
                    <li>Fødevarestyrelsen</li>
                    <li>Faktalink</li>
                </ul>
            </div>
        </footer>
    )
}