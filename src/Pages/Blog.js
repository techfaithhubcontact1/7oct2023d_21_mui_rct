import { useContext } from "react"
import { ThemeProvider2 } from ".."


export default function Blog() {
  const color3 = useContext(ThemeProvider2);
  return (

    // Color Applied using  useContext funcrion 
    
    <h1 style={ { color:color3 } }>Blog Pge</h1>
  )
}
