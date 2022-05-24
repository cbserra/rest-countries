import { useEffect, useState } from 'react'
import { Country } from '../../Country'
import CountryList from '../country-list/CountryList'
import Inputs from '../inputs/Inputs'
import './Main.css'

const Main  = () => {
    const [countries, setCountries] = useState<Country[]>([])
    const [countryNames, setCountryNames] = useState([])
    const [regions, setRegions] = useState<string[]>([])

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then(resp => resp.json())
        .then(data => {
            let countryData:Country[] = data
            setCountries(countryData)

            let names = data.map((country: { name: string }) => country.name)
            setCountryNames(names)

            let regions: string[] = Array.from(new Set(data.map((country: { region: string }) => country.region)))
            setRegions(regions)
        })

        // fetch('https://restcountries.com/v2/all?fields=region')
        // .then(resp => resp.json())
        // .then(data => {
        //     setRegions(data)

        //     console.log(`regions: ${JSON.stringify(regions)}`)
        // })
    }, [])

    return (
        <main>
            <Inputs countryNames={countryNames} regions={regions} />
            <CountryList countries={countries} />
            {/* <p>{JSON.stringify(countries)}</p>

            <p>{JSON.stringify(countryNames)}</p> */}
        </main>
    )
}

export default Main