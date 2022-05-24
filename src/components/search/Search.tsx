import { useCombobox } from 'downshift'
import { useState } from 'react'
import Select, { components, ControlProps } from 'react-select'
import { DropdownIndicator } from 'react-select/dist/declarations/src/components/indicators'
import './Search.css'
import searchIcon from '../../images/magnifying-glass-solid.svg'

const Search = (props : {countryNames: string[]}) => {
//     return (
//         <div className='search-container'>
//             <input list='countries' className='search' type='text' placeholder='Search for a country…' />
//             <datalist id='countries'>
//                 {props.countryNames.map((name, index) => <option key={index} value={name} />)}
//             </datalist>
//         </div>
//     )
// }
const customStyles = {
    menu: (provided: any) => ({
      ...provided,
      width: '30rem',
      borderBottom: '1px dotted pink',
    //   color: state.selectProps.menuColor,
      padding: 20,
    }),
  
    control: () => ({
        // backgroundImage: `url(${searchIcon})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: '1rem',
        // backgroundPosition: '10% 50%',
        width: '30rem',
        height: '3.5rem',
        fontWeight: 400,
        fontSize: '.875rem',
        lineHeight: '1.25rem',
        boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.0532439)',
        borderRadius: '5px',
    }),

    // container: () => ({
    //     width: '30rem',
    //     height: '3.5rem',
    //     fontWeight: 400,
    //     fontSize: '.875rem',
    //     lineHeight: '1.25rem',
    //     boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.0532439)',
    //     borderRadius: '5px',
    // }),

    singleValue: (provided: any, state: { isDisabled: any }) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

    const Control = ({ children, ...props }: ControlProps<any, false>) => {
        return <components.Control {...props}>
        <i className="fa-solid fa-magnifying-glass"></i> {children}
        </components.Control>
    }

    const GoodSelect = (props: any): JSX.Element => <Select {...props} isClearable={true} className='country-name-search' options={options} styles={customStyles} classNamePrefix='search' placeholder='Search for a country…'
      components={{ Control, DropdownIndicator: () => null, IndicatorSeparator: () => null }} />



    const countryNames = props.countryNames
    const options = countryNames.map((name) => {
        return {'value': name.toLowerCase(), 'label': name}
    })
    return (
        // <GoodSelect />
        <Select isClearable={true} className='country-name-search' options={options} styles={customStyles} classNamePrefix='search' placeholder='Search for a country…' 
            components={{ Control, DropdownIndicator:() => null, IndicatorSeparator:() => null }}
        />
    )
}

// const [inputItems, setInputItems] = useState(countryNames)
//     const {
//       isOpen,
//       getToggleButtonProps,
//       getLabelProps,
//       getMenuProps,
//       getInputProps,
//       getComboboxProps,
//       highlightedIndex,
//       getItemProps,
//     } = useCombobox({
//       items: inputItems,
//       onInputValueChange: ({ inputValue }) => {
//         setInputItems(
//           countryNames.filter(item =>
//             item.toLowerCase().startsWith(inputValue!.toLowerCase()),
//           ),
//         )
//       },
//     })
//     return (
//       <div>
//         <label {...getLabelProps()}>Choose an element:</label>
//         <div {...getComboboxProps()}>
//           <input {...getInputProps()} />
//           <button
//             type="button"
//             {...getToggleButtonProps()}
//             aria-label="toggle menu"
//           >
//             &#8595;
//           </button>
//         </div>
//         <ul {...getMenuProps()}>
//           {isOpen &&
//             inputItems.map((item, index) => (
//               <li
//                 style={
//                   highlightedIndex === index
//                     ? { backgroundColor: '#bde4ff' }
//                     : {}
//                 }
//                 key={`${item}${index}`}
//                 {...getItemProps({ item, index })}
//               >
//                 {item}
//               </li>
//             ))}
//         </ul>
//       </div>
//     )
//   }

export default Search