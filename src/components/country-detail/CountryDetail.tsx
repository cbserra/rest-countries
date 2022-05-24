import { Country } from '../../Country'
import BackButton from '../back-button/BackButton'
import './CountryDetail.css'

const CountryDetail = (props: {country: Country, setSelectedCountry: any, alphaNames: Record<string, string>}) => {
    const country = props.country
    console.log(country)
    console.log(props.alphaNames)
    return (
        <div className='country-detail-container'>
            <BackButton 
                setSelectedCountry={props.setSelectedCountry} 
            />
            <div className='country-detail'>
                <div className='country-detail-flag'>
                    <img src={country.flag} alt='flag' />
                </div>
               
                <div className='country-detail-text'>
                    <div className='header'>
                        <h1>{country.name}</h1>
                    </div>
                    
                    <div className='left'>
                        <ul>
                            <li>
                                <span className='key'>Native Name:</span>
                                <span className='value'>{country.nativeName}</span>
                            </li>
                            <li>
                                <span className='key'>Population:</span>
                                <span className='value'>{country.population}</span>
                            </li>
                            <li>
                                <span className='key'>Region:</span>
                                <span className='value'>{country.region}</span>
                            </li>
                            <li>
                                <span className='key'>Sub Region:</span>
                                <span className='value'>{country.subregion}</span>
                            </li>
                            <li>
                                <span className='key'>Capital:</span>
                                <span className='value'>{country.capital}</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className='right'>
                        <ul>
                            <li>
                                <span className='key'>Top Level Domain:</span>
                                <span className='value'>{country.topLevelDomain}</span>
                            </li>
                            <li>
                                <span className='key'>Currencies:</span>
                                <span className='value'>{country.currencies?.map(currency => currency.name).join(', ')}</span>
                            </li>
                            <li>
                                <span className='key'>Languages:</span>
                                <span className='value'>{country.languages?.map(language => language.name).join(', ')}</span>
                            </li>
                        </ul>
                    </div>
                    
                    {country.borders?.length > 0 && (
                        <div className='borders'>
                            <h2>Border Countries:</h2>
                            {country.borders?.map((border, index) => <span key={index} className='border-value'>{props.alphaNames[border]}</span>)}
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default CountryDetail