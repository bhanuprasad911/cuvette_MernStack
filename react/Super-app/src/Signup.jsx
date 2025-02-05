import React from 'react'
import poster from './assets/poster.png'
import Signupstyle from './Styles/Signup.module.css'

function Signup() {
  const newstyle ={
    color:"white",
    marginBottom:'4vh',
    fontFamily:'sans-serif',
    fontWeight:'100'
  }
  return (
    <>
    <div className={Signupstyle.main}>
        <img className={Signupstyle.poster} src={poster} alt="poster" />
        <h1 style={
          {color:'white',
            position:'absolute',
            bottom:'15vh',
            left:'5vw'
          }
        }>Discover new things on <br />Superapp</h1>
        <div className={Signupstyle.signup}>
            <h1 className={Signupstyle.heading}>Sign up</h1>
            <h3 style={newstyle}>Create your new account</h3>
            <div className={Signupstyle.signupform}></div>
            <form >
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Userame" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Mobile" />
              <div className={Signupstyle.checked}>

              <input type="checkbox" id='check' />
              <label style={
                {fontFamily:'sans-serif',
                  fontSize:'0.8em',
                  // marginTop:'6vh'
                }
              } htmlFor="check">Share my registration data with Superapp</label>
              </div>
              <button className={Signupstyle.button}>SIGN UP</button>
            </form>
            <h6 style={
              {color:"white",
                fontFamily:'roboto',
                fontWeight:'300',
                fontSize:'0.8rem'
              }
            }>By clicking on Sign up you agree to Superapp <span style={
              {color:'rgb(114,219,115)'}
            }>Terms and <br />Conditions of Use</span></h6>
            <h6 style={
              {color:'white',
                fontFamily:'roboto',
                fontWeight:'300',
                marginTop:'4vh',
                fontSize:'0.8rem'
              }
              }>To learn more about how Superapp collects, uses, shares and <br />protects your personal data please head Superapp <span style={
                {color:'rgb(114,219,115)'}
              }>Privacy Policy</span></h6>
        </div>
    </div>
      
    </>
  )
}

export default Signup
