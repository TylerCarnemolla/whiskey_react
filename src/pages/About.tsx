import React from 'react'
import Background from '../assets/images/about_bg.jpg'



const About = () => {
  return (
<div style={{backgroundImage: `url(${Background})`}} 
    className="flex flex-row justify-center mx-auto bg-cover bg-fixed bg-right"
    >
      <div className = 'flex place-items-center h-screen'>
              <div className='flex flex-col items-center' >
                  <h3 className='text-white text-6xl'>About Us</h3> 
                  <div className="my-9 ">

                    <p className='text-white text-xl text-center m-20'>
                        Welcome to Whiskey Cabinet, a community crafted by veterans, for veterans. Established
                        by a group of passionate individuals with military backgrounds, our journey began with a shared love
                          for whiskey and a desire to create a space where veterans could come together, share experiences, and enjoy the 
                          finer things in life. Whiskey Cabinet, born in 2011, has evolved into more than just an app—it's a camaraderie
                          built around the spirit of friendship and the enjoyment of exceptional drinks. Our platform not only allows you 
                          to buy and share drinks seamlessly but also invites you to be a part of our unique "drinker chapters." These chapter
                          s are vibrant communities on our social media pages where you can connect with fellow veterans who share similar stories and 
                          values. Join us in raising a glass, forging connections, and celebrating the bonds that go
                          beyond the bottle. Head over to our Whiskey Cabinet social media pages to discover your own 
                          "drinker chapter" and become a part of a 
                        community where every sip is a toast to shared experiences and the strength that unites us.
                        </p>
                    </div>
              </div>

      </div>
      
      
  </div>
  )
}

export default About
