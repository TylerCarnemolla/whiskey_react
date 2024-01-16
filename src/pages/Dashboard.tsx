import DataTable from '../components/DataTable'
import Background from '../assets/images/about_bg.jpg'


function Dashboard() {
  return (
    <div  className="flex flex-col  h-screen bg-cover bg-fixed bg-right" style={{backgroundImage: `url(${Background})`}} 
    >
      <div > 
   
        <DataTable/>
      </div>
    </div>
  )
}

export default Dashboard
