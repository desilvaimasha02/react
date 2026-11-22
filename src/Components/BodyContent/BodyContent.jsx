import './BodyContent.css'
import logo from "../../assets/react.svg"

function BodyContent() {
  return (
    <div id="bodycontent">
        <h1>Body Content</h1>
        <p className="body">This is the body content.</p>
        <p style={{color: 'white', fontSize: '16px'}}>this is a simple paragraph in the body content.</p>
        <img src="favicon.svg" alt="favicon logo" />
      <img src={logo} alt="" />
    </div>
  )
}

export default BodyContent
