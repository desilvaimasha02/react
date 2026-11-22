import './BodyContent.css'
import logo from "../../assets/react.svg"

function BodyContent() {
  return (
    <div id="bodycontent">
        <h1>Body Content</h1>
        <img src="favicon.svg" alt="favocon logo" />
      <img src={logo} alt="" />
    </div>
  )
}

export default BodyContent
