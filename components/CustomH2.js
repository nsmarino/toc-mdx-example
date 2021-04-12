import slugify from '../utils/slugify'

const CustomH2 = ({children}) => {

  return (<h2 id={slugify(children)}>{children}</h2>)
}

export default CustomH2