import { stringify } from 'querystring'
import { useEffect, useState } from 'react'
import { Country, CountryOption } from '../../Country'
import CountryDetail from '../country-detail/CountryDetail'
import CountryList from '../country-list/CountryList'
import Inputs from '../inputs/Inputs'
import './Main.css'

const Main  = () => {



    const [countries, setCountries] = useState<Country[]>([])
    const [countryNames, setCountryNames] = useState<CountryOption[]>([])
    const [regions, setRegions] = useState<string[]>([])
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
    const [filteredRegion, setFilteredRegion] = useState<string>()
    const [selectedCountry, setSelectedCountry] = useState<Country>()
    const [alpha3ToName, setAlpha3ToName] = useState<Record<string,string>>({})

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then(resp => resp.json())
        .then(data => {
            let countryData:Country[] = data
            setCountries(countryData)
            setFilteredCountries(countryData)

            let names = countryData.map((country: Country) => { return { value: country, label: country.name }})
            setCountryNames(names)

            let regions: string[] = Array.from(new Set(countryData.map((country: { region: string }) => country.region)))
            setRegions(regions)

            let alphaNames : Record<string, string> = {}
            countryData.forEach((country: Country) => { 
                alphaNames[country.alpha3Code] = country.name 
            })
            setAlpha3ToName(alphaNames)
        })

        // fetch('https://restcountries.com/v2/all?fields=region')
        // .then(resp => resp.json())
        // .then(data => {
        //     setRegions(data)

        //     console.log(`regions: ${JSON.stringify(regions)}`)
        // })
    }, [])

    useEffect(() => {
        let names = filteredCountries.map((country: Country) => { return { value: country, label: country.name }})
        setCountryNames(names)
    }, [filteredCountries])

    useEffect(() => {
        if (filteredRegion) {
            setFilteredCountries(countries.filter(country => country.region === filteredRegion))
        } else {
            setFilteredCountries(countries)
        }
    }, [filteredRegion])

    return (
        <main>
            { selectedCountry && (
                <CountryDetail 
                    country={selectedCountry} 
                    setSelectedCountry={setSelectedCountry} 
                    alphaNames={alpha3ToName}
                />
            )}

            { !selectedCountry && countryNames && regions && (
                <Inputs 
                    countryNames={countryNames} 
                    regions={regions} 
                    setFilteredRegion={setFilteredRegion}
                    setSelectedCountry={setSelectedCountry} 
                />
            )}

            { !selectedCountry && filteredCountries && (
                <CountryList 
                    countries={filteredCountries} 
                    setSelectedCountry={setSelectedCountry}
                />
            )}
        </main>
    )
}

export default Main