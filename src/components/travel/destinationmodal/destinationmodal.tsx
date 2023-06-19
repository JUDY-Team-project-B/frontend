import { useQuery } from '@tanstack/react-query'
import './destinationmodal.scss'
import { restFetcher } from '@/queryClient'
import { destination } from '@/mocks/handlers'

const Destinationmodal = () =>{

    const{data,isLoading,isError,error} = useQuery(['POST'],()=>
    restFetcher({
      method:'GET',
      path:`/api/v1/post/list`,
    })
  )

  const res = data;

  console.log(data);

    return(
        <div  className="destinationmodallayout">
            <div className='destinationlist'>
                {data?.map((datas:destination,index:any)=>(
                    <div className='destinationliststyle' >
                        {datas.destination}
                    </div>
                ))}

            </div>
            <div className='destinationdetaillist'>

            </div>
        </div>
    )
}

export default Destinationmodal;