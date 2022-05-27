import { useEffect, useState } from 'react'
import { Country, CountryOption } from '../../utils/CountryTypes'
import CountryDetail from '../country-detail/CountryDetail'
import CountryList from '../country-list/CountryList'
import Inputs from '../inputs/Inputs'
import './Main.css'
import Loading from '../loading/Loading'

const Main  = () => {

    const [countries, setCountries] = useState<Country[]>([])
    const [countryNames, setCountryNames] = useState<CountryOption[]>([])
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([])

    const [regions, setRegions] = useState<string[]>([])
    const [filteredRegion, setFilteredRegion] = useState<string>()

    const [selectedCountry, setSelectedCountry] = useState<Country>()
    const [prevSelectedCountries, setPrevSelectedCountries] = useState<Country[]>([])
    const [alpha3ToCountry, setAlpha3ToCountry] = useState<Record<string,Country>>({})

    const [isLoading, toggleIsLoading] = useState<boolean>(true)

    /**
     * (Hopefully the) sole call to REST Countries API, to populate the `countries` state instance,
     * as well as the `filteredCountries` state instance.
     */
     useEffect(() => {
        setTimeout(() => {
            fetch('https://restcountries.com/v2/all')
            .then(resp => resp.json())
            .then(data => {
                let countryData:Country[] = data
                setCountries(countryData)
                setFilteredCountries(countryData)
    
                setTimeout(() => {
                    toggleIsLoading(false)
                }, 0)
            })
        }, 0)
      }, []);

    /**
     * Creates a collection of `string => Country` options, and populates the state
     * so the dropdown menu will populate.
     */
    useEffect(() => {
        let names = countries.map((country: Country) => { return { value: country, label: country.name }})
        setCountryNames(names)
    }, [countries])
    
    /**
     * Create a `Set` of unique Regions, extracted from `countries` object.
     */
    useEffect(() => {

        let regions: string[] = Array.from(new Set(countries.map((country: { region: string }) => country.region)))
        setRegions(regions)
   
    }, [countries])

    /**
     * Creates a `Record<string, Country>`, in orer to do name-lookup while rendering the borders
     * of the currently-selected Country.
     */
    useEffect(() => {

        // Create map of 3-letter alpha names => country name for use on country details
        let alphaNames : Record<string, Country> = {}
        countries.forEach((country: Country) => { 
            alphaNames[country.alpha3Code] = country 
        })
        setAlpha3ToCountry(alphaNames)

    }, [countries])

    /**
     *  Build option list of Country names, and sets the `countryNames` state. 
     *  This occurs on initial load, and whenever the value of `filteredCountries` changes.
     */
    useEffect(() => {
        let names = filteredCountries.map((country: Country) => { return { value: country, label: country.name }})
        setCountryNames(names)
    }, [filteredCountries])

    /**
     * Called if 'Filter by Region' `select` element's value was changed, causing
     * a re-load of `CountryList`
     */
    useEffect(() => {
        if (filteredRegion) {
            setFilteredCountries(countries.filter(country => country.region === filteredRegion))
        } else {
            setFilteredCountries(countries)
        }
    }, [filteredRegion, countries])

    return (
        <main>
            <div className='main-width-wrapper'>
                { isLoading && (
                    <Loading />
                )}

                { !isLoading && selectedCountry && (
                    <CountryDetail 
                        country={selectedCountry} 
                        setSelectedCountry={setSelectedCountry} 
                        alphaNames={alpha3ToCountry}
                        setPrevSelectedCountries={setPrevSelectedCountries}
                        prevSelectedCountries={prevSelectedCountries}
                    />
                )}

                { !isLoading && !selectedCountry && countryNames && regions && (
                    <Inputs 
                        countryNames={countryNames} 
                        regions={regions} 
                        setFilteredRegion={setFilteredRegion}
                        setSelectedCountry={setSelectedCountry} 
                    />
                )}

                { !isLoading && !selectedCountry && filteredCountries && (
                    <CountryList 
                        countries={filteredCountries} 
                        setSelectedCountry={setSelectedCountry}
                    />
                )}
            </div>
        </main>
    )
}

export default Main