import { AxiosError } from 'axios'
import './Error.css'


interface Props {
    error: AxiosError,
    // children: React.ReactNode
  }
  
//   expor/t const ThemeProvider: React.FunctionComponent<Props> = ({ children }) => {
const Error: React.FunctionComponent<Props> = (props: {error: AxiosError }) => {
    // console.log(`children = ${props.children}`)
    return (
        <p>
            Error: { JSON.stringify(props.error) }
        </p>
    )
}

export default Error