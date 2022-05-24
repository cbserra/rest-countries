import './FilterDropdown.css'
import Select from 'react-select'


const FilterDropdown = (props: {regions: string[], setFilteredRegion: any}) => {

    /*
     * Commenting out for now, but may explore this approach in the future, along with 
     * styled-components package
     */
    // const customStyles = {
    //     menu: (provided: any) => ({
    //       ...provided,
    //       width: '12.5rem',
    //       borderBottom: '1px dotted pink',
    //     //   color: state.selectProps.menuColor,
    //       padding: 20,
    //     }),
      
    //     control: () => ({
    //         // backgroundImage: `url(${searchIcon})`,
    //         // backgroundRepeat: 'no-repeat',
    //         // backgroundSize: '1rem',
    //         // backgroundPosition: '10% 50%',
    //         width: '12.5rem',
    //         height: '3.5rem',
    //         fontWeight: 400,
    //         fontSize: '.875rem',
    //         lineHeight: '1.25rem',
    //         boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.0532439)',
    //         borderRadius: '5px',
    //     }),
    
    //     // container: () => ({
    //     //     width: '30rem',
    //     //     height: '3.5rem',
    //     //     fontWeight: 400,
    //     //     fontSize: '.875rem',
    //     //     lineHeight: '1.25rem',
    //     //     boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.0532439)',
    //     //     borderRadius: '5px',
    //     // }),
    
    //     singleValue: (provided: any, state: { isDisabled: any }) => {
    //       const opacity = state.isDisabled ? 0.5 : 1;
    //       const transition = 'opacity 300ms';
      
    //       return { ...provided, opacity, transition };
    //     }
    //   }

    type OptionType = {value: string, label: string}

    const options: OptionType[] = props.regions.map((region) => {
        return {'value': region.toLowerCase(), 'label': region}
    })

    // const DropdownIndicator = (
    //     props: DropdownIndicatorProps<OptionType, true>
    //   ) => {
    //     return (
    //       <components.DropdownIndicator {...props}>
    //         <i className="fa-solid fa-chevron-down"></i>
    //       </components.DropdownIndicator>
    //     );
    //   };

    return (
        
        <Select 
            // styles={customStyles} 
            isSearchable={false}
            isClearable={true} 
            placeholder="Filter by Region" 
            classNamePrefix={"filter-dropdown"} 
            components={{IndicatorSeparator:() => null }} 
            className='filter-dropdown' 
            options={options} 
            onChange={(value => props.setFilteredRegion(value?.label))}
            
        />
    )
}

export default FilterDropdown