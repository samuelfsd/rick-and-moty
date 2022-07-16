import { extendTheme } from "@chakra-ui/react"

const theme = {
  config: {
    initialColorMode:"dark",
    useSystemColorMode: true
  },
  styles:{
    global: {
      body: {
        padding: 0,
        margin: 0,
      }
    }
  }
}


export default extendTheme(theme);