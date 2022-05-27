import './CountryList.css'
import {Country } from '../../utils/CountryTypes'
import CountryItem from '../country-item/CountryItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect, useState } from 'react'
import Loading from '../loading/Loading'


const CountryList = (props: {countries: Country[], setSelectedCountry: any, loadedCountries: Country[], setLoadedCountries: any}) => {
    const countries: Country[] = props.countries
    const loadedCountries: Country[] = props.loadedCountries
    const setLoadedCountries: any = props.setLoadedCountries

    useEffect(() => {
        setLoadedCountries(countries.slice(0, NUM_LOAD))
    }, [countries, setLoadedCountries])

    const NUM_LOAD = 20
    // const [loadedCountries, setLoadedCountries] = useState<Country[]>(countries.slice(0, NUM_LOAD))
    const [hasMore, setHasMore] = useState<boolean>(countries.length - loadedCountries.length > 0)
    const fetchMoreData = () => {
        const numLoadedCountries = loadedCountries.length
        if (numLoadedCountries === countries.length) {
            setHasMore(false)
            return
        }

        let offset: number;
        if (numLoadedCountries + NUM_LOAD >= countries.length) {
            offset = countries.length - numLoadedCountries
        } else {
            offset = NUM_LOAD
        }

        let moreLoadedCountries = loadedCountries.concat(countries.slice(numLoadedCountries, numLoadedCountries + offset))
        setLoadedCountries(moreLoadedCountries)
    }

    return (
            <InfiniteScroll
                dataLength={loadedCountries.length}
                className='country-list'
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<Loading />}
                scrollableTarget={'div#root'}
                style={{overflow: 'initial'}}
                endMessage={<p>🎶...Traveled the world and the seven seas...🎵</p>}
            >
            {
            loadedCountries?.map((country: Country, index: number) => {
                return <CountryItem 
                            key={index} 
                            country={country} 
                            setSelectedCountry={props.setSelectedCountry}
                        />
            })
            }
            </InfiniteScroll>
    )
}

export default CountryList