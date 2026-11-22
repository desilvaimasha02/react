
import './FooterContent.css'
import image from '../../assets/vite.svg'
function FooterContent() {
  return (
    <div id="footercontent">
        <h1>Footer Content</h1>
        <p style={{color: 'white', fontSize: '16px'}}>this is footer content.there are few details here.</p>
        <img src="favicon.svg" alt="icon image" />
        <img src={image} alt="" />
      
    </div>
  )
}

export default FooterContent
