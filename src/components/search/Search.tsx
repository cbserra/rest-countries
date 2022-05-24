import Select, { components, ControlProps } from 'react-select'
import './Search.css'
import { CountryOption } from '../../Country'

const Search = (props : {countryNames: CountryOption[], setSelectedCountry: any}) => {

// May implement in future along with styled-components
// const customStyles = {
//     menu: (provided: any) => ({
//       ...provided,
//       width: '30rem',
//       borderBottom: '1px dotted pink',
//     //   color: state.selectProps.menuColor,
//       padding: 20,
//     }),
  
//     control: () => ({
//         // backgroundImage: `url(${searchIcon})`,
//         // backgroundRepeat: 'no-repeat',
//         // backgroundSize: '1rem',
//         // backgroundPosition: '10% 50%',
//         width: '30rem',
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

    const Control = ({ children, ...props }: ControlProps<any, false>) => {
        return <components.Control {...props}>
        <i className="fa-solid fa-magnifying-glass"></i> {children}
        </components.Control>
    }

    return (
        <Select 
            isClearable={true} 
            className='country-name-search' 
            options={props.countryNames} 
            // styles={customStyles} 
            classNamePrefix='search' 
            placeholder='Search for a country…' 
            components={{ Control, DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            onChange={value => props.setSelectedCountry(value.value)}
        />
    )
}

export default Search