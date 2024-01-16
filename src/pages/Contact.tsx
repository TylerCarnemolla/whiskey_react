
import Background from "../assets/images/about_bg.jpg"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
const Contact = () => {
  return (
    <div style={{backgroundImage: `url(${Background})`}} 
    className="flex flex-row justify-center mx-auto bg-cover bg-fixed bg-right"
    >
      <div className = 'flex place-items-center h-screen'>
              <div className='flex flex-col items-center' >
                  <h3 className='text-white text-6xl'>Contact Us</h3> 
                  <div className="my-9 ">

                      <p className='text-white text-xl text-center m-20'>
                          We stand by what we say and are a community of drinkers with golden hearts. Please reach out to us with any questions, comments, or concerns.
                          Feel free to call, email, or direct message us on social media. 
                          <br />
                          <br />

                          If there is a bottle you are looking for but we do not have in stock, please dont hesitate to reach out and we will have it ordered and
                          in stock for faster purchasing next time. 
                          <br />
                          <br />
                          Get in touch with your local Drinker Chapter to find comrades to share a drink and a story with. Nobody drinks alone.

                          </p>
                          <div className='flex justify-center'>
                          <div className='flex flex-col w-1/4 rounded-lg bg-black bg-opacity-60 items-center'>
                            <div className='text-white text-xl'>
                              <InstagramIcon style={{color:'white', fontSize:"50"}}/>
                              @Whiskey_Cabinet
                            </div>
                            <div className='text-white text-xl'>
                              <XIcon style={{color:'white', fontSize:"50"}}/>
                              @Whiskey_Cabinet
                            </div>
                            <div className='text-white text-xl'>
                              <FacebookIcon style={{color:'white', fontSize:"50"}}/>
                              Whiskey Cabinet

                            </div>
                            <div className='text-white text-center text-xl'>
                              <p>1-(800)-555-5555 | WhiskeyCabinet@net.net | 3232 NW Street ST, NV</p>

                            </div>


                          </div>
                          </div>
                    </div>
              </div>

      </div>
      
      
  </div>
  )
}

export default Contact
