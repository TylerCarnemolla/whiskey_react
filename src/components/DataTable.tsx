import React, { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server'
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import { useGetData } from '../custom_hooks/FetchData';

const columns: GridColDef[] = [
  {field: 'id', headerName: "ID", width:90},
  {field: 'brand', headerName: "Brand Name", flex: 1},
  {field: 'kind', headerName: "Kind", flex:1},
  {field: 'proof', headerName:"Proof", flex:1},
  {field: 'notes', headerName:"Notes", flex:2},
  {field: 'origin', headerName:"Origin", flex:2},
]


function DataTable() {
  let [open, setOpen ] = useState(false)

  const { bottleData, getData} = useGetData();
  const[selectionModel, setSelectionModel] = useState<string[]>([])


  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    // setTimeout( () => {window.location.reload()}, 500)
    
    }

  const refreshData = () => {
    getData();
  };




  return (
    <>
      <Modal 
      id = {selectionModel}
      open = {open}
      onClose={handleClose}
      refreshData = {refreshData}
      />
      <div className='flex  flex-row'>
        <div>
          <button className='p-3 m-3 rounded-lg  bg-red-800 border-2 text-white border-grey-900 hover:bg-red-500'
          onClick={()=> handleOpen()}>
            Add Bottle to Collection

          </button>
        </div>
        <button onClick={handleOpen} className="p-3 m-3 rounded-lg bg-red-800 border-2 border-grey-900 text-white hover:bg-red-500" >Update</button>
        <button onClick={deleteData} className="p-3 m-3 rounded-lg bg-red-800 border-2 border-grey-900 text-white hover:bg-red-500" >Delete</button>
      </div>
      {/* data table section */}
      <div className={open?  "hidden": "container mx-10 my-5 flex flex-col"}
        style = {{height: 400, width: '100%'}}
        >
          <h2 className="p-3 bg-red-800 text-white my-2 rounded">Collection</h2>
            <div className='bg-gray-500'>
          
                    <DataGrid rows={bottleData} columns={columns} rowsPerPageOptions={[5]}
                    checkboxSelection={true}
                    onRowSelectionModelChange={(item:any)=> {
                      setSelectionModel(item)
                    }}
                  style={{
                    color: 'white', // Set the text color to white
                  }}
                    />
              </div>

      </div>
    </>
  )
}

export default DataTable
