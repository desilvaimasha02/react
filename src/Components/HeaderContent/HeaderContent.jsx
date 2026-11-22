import './HeaderContent.css'
import heroImage from '../../assets/hero.png'
function HeaderContent() {
  return (
    <div id = "headercontent">
        <h1>Header Content</h1>
        <p style={{color: 'white', fontSize: '16px'}}>this is header.this is a simple paragraph.there are more details here.</p>
        <img src={heroImage} alt="" />

    </div>
  )
}

export default HeaderContent
