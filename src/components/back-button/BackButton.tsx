import { Country } from '../../Country'
import './BackButton.css'

const BackButton = (props: { setSelectedCountry: (country: Country | undefined) => void }) => {
    return (
        <button 
            className='back-button' 
            onClick={() => props.setSelectedCountry(undefined)}
        >
            <i className="fa-solid fa-arrow-left-long"></i>
            &nbsp;Back
        </button>
    )
}

export default BackButton