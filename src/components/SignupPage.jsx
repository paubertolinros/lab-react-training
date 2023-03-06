import React, {useState} from 'react';

const SignupPage = () => {
  const [info, setInfo] = useState({})
  const initialState = {
    email: '',
    password: '',
    nationality: '',
    };
  const [newInfo, setNewInfo] = useState(initialState);
    
  const handleChange = (e) => {
    setNewInfo(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo(newInfo);
    setNewInfo(initialState)
  };
  
  const inputColor = (password) => {
    return password === "" || password.length <= 5   
  }

  const validateEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  }
 
  return (
    <section className="section-form">
      <form onSubmit={handleSubmit} className="form">
        <label>Email</label>
        <input value={newInfo.email} type="email" name="email" onChange={handleChange} style={{ borderColor: validateEmail(newInfo.email) ? "green" : "red" }} required />
        {validateEmail(newInfo.email) ? <p className="valid">You typed a valid email</p> : <p className="invalid">You typed a invalid email</p>}
        <label>Password</label>
        <input value={newInfo.password} type="password" name="password" onChange={handleChange} style={{ borderColor: inputColor(newInfo.password) ? "red" : "green" }} required /> 
        {inputColor(newInfo.password) ? <p className="invalid">You typed a invalid email</p> : <p className="valid">You typed a valid email</p>}
        <label>Nationality</label>
        <select name="nationality" value={newInfo.nationality} onChange={handleChange} required>
          <option value="">Select your nationality</option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <button type="submit">Sign up</button>
      </form>
      <p>{info.nationality === "en" ? "Hello" : info.nationality === "de" ? "Hallo" : info.nationality === "fr" ? "bon jour" : undefined}</p>
      {info.email ? <p>Your email is {info.email}</p> : null}
    </section>
  )
}

export default SignupPage;