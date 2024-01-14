import Background from '../assets/images/bar_bg.jpg'

const Home = () => {
  return (
    <div style={{backgroundImage: `url(${Background})`}} 
    className="flex flex-row justify-center mx-auto bg-cover bg-fixed bg-right"
    >
      <div className = 'flex place-items-center h-screen'>
        <div className='flex flex-col  rounded-lg bg-black bg-opacity-60 items-center'>
            <h3 className='p-10 text-6xl bg-opacity-20 text-white rounded-xl'>Whiskey Cabinet</h3> 
          </div>

      </div>
      
    </div>
  )
}

export default Home

