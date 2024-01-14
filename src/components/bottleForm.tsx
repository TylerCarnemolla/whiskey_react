import Input from "./input"
import {useForm} from 'react-hook-form'
import { server_calls } from "../api/server.ts"
import {useDispatch, useStore} from 'react-redux'
import { chooseBrand, chooseKind, chooseProof, chooseNotes, chooseOrigin} from "../redux/slices/RootSlice"


//interfaces
interface BottleFormProps{
    id?:string []
    onClose: () => void;
    refreshData: () => void; 
}


const BottleForm: React.FC<BottleFormProps> = (props) => {  
    const {register, handleSubmit} = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = async (data:any, event:any) =>{
        console.log(`ID: ${props.id}`);
        if(props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated! ${data} ${props.id}`)
            // setTimeout(() => {window.location.reload()},5000);
            event.target.reset()
        }else{
            //use dispatch to update our state in our store
            dispatch(chooseBrand(data.brand))
            dispatch(chooseKind(data.kind))
            dispatch(chooseProof(data.proof))
            dispatch(chooseNotes(data.notes))
            dispatch(chooseOrigin(data.origin))
            console.log(data);
            await server_calls.create(data)
            props.onClose()
            props.refreshData()
        }
    }

    return (//TO DO - add handle function
    <div className="flex flex-col"> 
      <form  onSubmit={handleSubmit(onSubmit)} className="p-4 flex flex-col flex-wrap" >
        <div className="flex ">
          

                    <div className="flex flex-col">
                        <label htmlFor="brand">Make</label>
                        < Input  {...register('brand')} name='brand' placeholder="Brand"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="kind">Kind</label>
                        < Input {...register('kind')} name='kind' placeholder="Kind"/>
                    </div>
        
                    <div className="flex flex-col">
                        <label htmlFor="proof">Proof</label>
                        < Input {...register('proof')} name='proof' placeholder="Proof"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="notes">Tasting Notes</label>
                        < Input {...register('notes')} name='notes' placeholder="Notes"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="origin">Origin</label>
                        < Input {...register('origin')} name='origin' placeholder="Origin"/>
                    </div>
        
        </div>
        <div className="seperate">

                <div className="flex justify-center mt-4">
                    <button className=" p-3 rounded-lg bg-blue-500 border-2 border-blue-300 hover:bg-blue-300 ">
                        Submit
                    </button>
                </div>
        </div>
        
        


      </form>
    </div>
  )
}

export default BottleForm
