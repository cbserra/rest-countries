import FilterDropdown from "../filter-dropdown/FilterDropdown"
import Search from "../search/Search"
import './Inputs.css'

const Inputs = (props: {countryNames: string[], regions: string[]}) => {
    return (
        <div className="inputs-container">
            <div className="inputs-search">
                <Search countryNames={props.countryNames} />
            </div>

            <div className="inputs-filter">
                <FilterDropdown regions={props.regions} />
            </div>
        </div>
    )
}

export default Inputs