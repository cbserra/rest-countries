import { Country } from '../../Country'
import './CountryItem.css'

const CountryItem = (props: {country: Country}) => {
    const country: Country = props.country
    
    return (
        <div className='country-item'>
            <img src={country.flag} alt="flag" />
            <h1>{country.name}</h1>
            <ul>
                <li>
                    <span className='key'>Population:</span>
                    <span className='value'>{country.population}</span>
                </li>
                <li>
                    <span className='key'>Region:</span>
                    <span className='value'>{country.region}</span>
                </li>
                <li>
                    <span className='key'>Capital:</span>
                    <span className='value'>{country.capital}</span>
                </li>
            </ul>
        </div>
    )
}

export default CountryItem