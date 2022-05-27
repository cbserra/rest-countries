import { Country } from '../../utils/CountryTypes'
import './BackButton.css'

const BackButton = (props: { 
    prevSelectedCountries: Country[],
    setSelectedCountry: any,
    setPrevSelectedCountries: any
}) => {
    return (
        <button 
            className='back-button' 
            onClick={() => props.setSelectedCountry(props.prevSelectedCountries?.pop())}
        >
            <i className="fa-solid fa-arrow-left-long"></i>
            &nbsp;Back
        </button>
    )
}

export default BackButton