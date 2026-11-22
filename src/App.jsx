import BodyContent from "./Components/BodyContent/BodyContent"
import FooterContent from "./Components/FooterContent/FooterContent"
import HeaderContent from "./Components/HeaderContent/HeaderContent"

function App() {
  return (
    <>
 <h1>react app</h1>
 <p style={{color: 'blue',fontSize: '16px'}}>this is my first react app.this is a simple paragraph.</p>


   <HeaderContent />
     <BodyContent /> 
     <FooterContent />
    </>
  )
}

export default App



