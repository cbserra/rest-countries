import './FilterDropdown.css'
import Select from 'react-select'
import { IndicatorSeparator } from 'react-select/dist/declarations/src/components/indicators'


const FilterDropdown = (props: {regions: string[]}) => {
    // console.log(`regions = ${props.regions}`)
    const options = props.regions.map((region) => {
        return {'value': region.toLowerCase(), 'label': region}
    })
    return (
        
        <Select isClearable={true} placeholder="Filter by Region" classNamePrefix={"filter-dropdown"} components={{IndicatorSeparator:() => null }} className='filter-dropdown' options={options} />

        // <select name="filter-dropdown" id="filter-dropdown" className='filter-dropdown'></select>
    )
}

export default FilterDropdown