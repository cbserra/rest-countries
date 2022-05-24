import { Country } from '../../Country'
import './CountryDetail.css'

const CountryDetail = (props: {country: Country, setSelectedCountry: any, alphaNames: Record<string, string>}) => {
    const country = props.country
    console.log(country)
    console.log(props.alphaNames)
    return (
        <div className='country-detail-container'>
            <button 
                className='back-button' 
                onClick={() => props.setSelectedCountry(undefined)}
            >
                <i className="fa-solid fa-arrow-left-long"></i>
                Back
            </button>
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
                                <span className='value'>{country.currencies?.map(currency => currency.name).join(',')}</span>
                            </li>
                            <li>
                                <span className='key'>Languages:</span>
                                <span className='value'>{country.languages?.map(language => language.name).join(',')}</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className='borders'>
                        <span className='key'>Border Countries:</span>
                        {country.borders?.map((border, index) => <span key={index} className='border-value'>{props.alphaNames[border]}</span>)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CountryDetail