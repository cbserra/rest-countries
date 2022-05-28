import { useEffect, useState } from 'react'
import { Country, CountryOption } from '../../utils/CountryTypes'
import CountryDetail from '../country-detail/CountryDetail'
import CountryList from '../country-list/CountryList'
import Inputs from '../inputs/Inputs'
import './Main.css'
import Loading from '../loading/Loading'
import Error from '../error/Error'
import useAxios from 'axios-hooks'
import { AxiosError } from 'axios'

export type CountriesOrUndef = Country[] | undefined

const Main  = () => {
    const restCountriesGetUrl = 'https://restcountries.com/v2/all?fields=name,topLevelDomain,alpha3Code,capital,region,subregion,population,borders,nativeName,currencies,languages,flag,flags'
    const [{ data, loading, error }] = useAxios<CountriesOrUndef,boolean,AxiosError>(restCountriesGetUrl)

    const [countries, setCountries] = useState<CountriesOrUndef>([])
    const [countryNames, setCountryNames] = useState<CountryOption[] | undefined>([])
    const [filteredCountries, setFilteredCountries] = useState<CountriesOrUndef>([])
    const [loadedCountries, setLoadedCountries] = useState<Country[]>([])

    const [regions, setRegions] = useState<string[]>([])
    const [filteredRegion, setFilteredRegion] = useState<string>()

    const [selectedCountry, setSelectedCountry] = useState<Country>()
    const [prevSelectedCountries, setPrevSelectedCountries] = useState<Country[]>([])
    
    // For mapping 3-letter alpha country codes to country object, when rendering Country Borders.
    const [alpha3ToCountry, setAlpha3ToCountry] = useState<Record<string,Country>>({})

    /**
     * (Hopefully the) sole call to REST Countries API, to populate the `countries` state instance,
     * as well as the `filteredCountries` state instance.
     */
     useEffect(() => {
        setCountries(data)
        setFilteredCountries(data)
      }, [data]);

    /**
     * Creates a collection of `string => Country` options, and populates the state
     * so the dropdown menu will populate.
     */
    useEffect(() => {
        let names = countries?.map((country: Country) => { return { value: country, label: country.name }})
        setCountryNames(names)

        // Create a `Set` of unique Regions, extracted from `countries` object.
        let regions: string[] = Array.from(new Set(countries?.map((country: { region: string }) => country.region)))
        setRegions(regions)

        // Create map of 3-letter alpha names => country name for use on country details
        let alphaNames : Record<string, Country> = {}
        countries?.forEach((country: Country) => { 
            alphaNames[country.alpha3Code] = country 
        })
        setAlpha3ToCountry(alphaNames)
    }, [countries])
    
    /**
     *  Build option list of Country names, and sets the `countryNames` state. 
     *  This occurs on initial load, and whenever the value of `filteredCountries` changes.
     */
    useEffect(() => {
        let names = filteredCountries?.map((country: Country) => { return { value: country, label: country.name }})
        setCountryNames(names)
    }, [filteredCountries])

    /**
     * Called if 'Filter by Region' `select` element's value was changed, causing
     * a re-load of `CountryList`
     */
    useEffect(() => {
        if (filteredRegion) {
            setFilteredCountries(countries?.filter(country => country.region === filteredRegion))
        } else {
            setFilteredCountries(countries)
        }
    }, [filteredRegion, countries])

    return (
        <main>
            <div className='main-width-wrapper'>
                {  loading && (<Loading />) }
                
                { !loading && error && (<Error error={error} />)}
                
                { !loading && !error && selectedCountry && (
                    <CountryDetail 
                        country={selectedCountry} 
                        setSelectedCountry={setSelectedCountry} 
                        alphaNames={alpha3ToCountry}
                        setPrevSelectedCountries={setPrevSelectedCountries}
                        prevSelectedCountries={prevSelectedCountries}
                    />
                )}

                { !loading && !error && !selectedCountry && countryNames && regions && (
                    <Inputs 
                        countryNames={countryNames} 
                        regions={regions} 
                        setFilteredRegion={setFilteredRegion}
                        setSelectedCountry={setSelectedCountry} 
                    />
                )}

                { !loading && !error && !selectedCountry && filteredCountries && (
                    <CountryList 
                        countries={filteredCountries} 
                        setSelectedCountry={setSelectedCountry}
                        loadedCountries={loadedCountries}
                        setLoadedCountries={setLoadedCountries}
                    />
                )}
            </div>
        </main>
    )
}

export default Main