import './App.css'
import { useState } from 'react';

function App() {

  
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    src: ""
  })

  const [image, setImage] = useState()
  console.log(image)

 const  handleChange = (e) => {
   console.log(e.target);
   const {name, value, files} = e.target;
  console.log(name, value, files);
  

  setUserDetails((prev)=>{
      return {...prev, [name]:value}
  })
  
  if(files && files[0]) setImage(URL.createObjectURL(files[0]))
 
 }
 console.log({userDetails});

 
 const handleSubmit = (e) => {
  e.preventDefault()
  
  console.log(userDetails)
 }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">FirstName</label>
          <input type="text" name='firstname' id='firstname' value={userDetails.firstname} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="firstname">LastName</label>
          <input type="text" name='lastname' value={userDetails.lastname} id='lastname' onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' value={userDetails.email} id='email' onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="image">Upload Image</label>
          <input type="file" name='src' onChange={handleChange}/>
          {image && <img src={image } />}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
