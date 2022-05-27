import { CountryOption } from "../../utils/CountryTypes"
import FilterDropdown from "../filter-dropdown/FilterDropdown"
import Search from "../search/Search"
import './Inputs.css'

const Inputs = (props: {
    countryNames: CountryOption[], 
    regions: string[], 
    setFilteredRegion: any,
    setSelectedCountry: any
}) => {
    return (
        <div className="inputs-container">
            <div className="inputs-search">
                <Search countryNames={props.countryNames} setSelectedCountry={props.setSelectedCountry} />
            </div>

            <div className="inputs-filter">
                <FilterDropdown regions={props.regions} setFilteredRegion={props.setFilteredRegion} />
            </div>
        </div>
    )
}

export default Inputs