function App() {
  const age = 20;
  const country = "sri lanka";
  const firstname = "david";
  const secondname = "alan";
  const thirdname = "smith";
  const arr = ["apple", "grape", "orange"];
  const lang =<ul>
    <li>html</li>
    <li>css</li>
    <li>js</li>
    <li>react</li>
    </ul>; 
    const pobj = {
      name : "smith",
      age : 90
    }
  return (
    <>
    <div className="cont">
      <h1>EMPLOYEE DETAILS</h1>
      <p>full name : {firstname} {secondname} {thirdname}</p>
    <p>react app</p>
    <p>{20/20}% for jsx</p>
    <p>age : {age}</p>
    <p>country : {country}</p>
    <p>{firstname} likes to eat {arr[0]}</p>
<p>front languages</p>
 <p>{lang}</p>
 <p>{pobj.name} is {pobj.age} years old</p>
    </div>
    
    </>
  )
}

export default App
