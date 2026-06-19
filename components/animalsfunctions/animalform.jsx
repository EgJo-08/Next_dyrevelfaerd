import { createAnimal } from "../../actions/actionanimal"
import "./createanimals.css"
 
export default function AnimalCreate() {
    return (
        <div className="animal-form-wrapper">
            <h2 className="animal-form-wrapper__title">Opret dyr</h2>
            <form action={createAnimal} className="create-animal">
        <div><label htmlFor="name">Navn</label><input type="text" id="name" name="name" required /></div>
        <div><label htmlFor="description">Beskrivelse</label><textarea id="description" name="description" required /></div>
        <div><label htmlFor="age">Alder</label><input type="number" id="age" name="age" min="0" required /></div>
        <div><label htmlFor="assetId">Billede ID</label><input type="number" id="assetId" name="assetId" required /></div>
        <button type="submit">opret et dyr</button>
            </form>
            </div>
    )
}