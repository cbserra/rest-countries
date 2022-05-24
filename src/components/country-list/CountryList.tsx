import './CountryList.css'
import {Country } from '../../Country'
import CountryItem from '../country-item/CountryItem'


const CountryList = (props: {countries: Country[]}) => {
    const countries: Country[] = props.countries
    return (
        <div className='country-list'>
            {
            countries?.map((country: Country, index: number) => {
                return <CountryItem key={index} country={country} />
            })
        }
        </div>
    )
}

export default CountryList