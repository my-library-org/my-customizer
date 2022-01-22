# My-customizer
this is the main function of my-library-core. the function that allows you to customize your styled-components from any file

## Instalation

### npm
```bash
npm install my-customizer
```
### yarn 
```bash
yarn add my-customizer
```

## Demo

with this function you can modify the styled-component, any propertie with a single function.
you can call the propeties with camel-case or with abbreviations
```jsx 
import styled from 'styled-components'
import customizer  from 'my-customizer'

const Container = styled.div`
  background: #ccc;
  height: 100px;
  width: 100px;
  grid-template-columns: 1fr 1fr
  ${({myStyle}) => myStyle && customizer(myStyle)}
`
function App() {
 
  return (
    <>
    <Container myStyle={{gridTemplateColumns: 'repeat(4, 1fr)'}}>
    </Container>
    // or
    <Container myStyle={{gtc: 'repeat(auto-fill, minmax(220px, 1fr))'}}>
    </Container>
    </>
    
  )
}

export default App
```