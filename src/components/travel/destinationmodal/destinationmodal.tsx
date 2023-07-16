// import { useQuery } from '@tanstack/react-query'
// import './destinationmodal.scss'
// import { restFetcher } from '@/queryClient'
// import { destination } from '@/mocks/handlers'
// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'

// const Destinationmodal = () =>{
    
//     const navigate = useNavigate();

//     const{data,isLoading,isError,error} = useQuery(['POST'],()=>
//     restFetcher({
//       method:'GET',
//       path:`/api/v1/post/list`,
//     })
//   )

//   const [destination, setDestination] = useState('');
//   const handlerDestination= (e:any) => {
//     setDestination(e.target.value);
//     console.log(destination)
//   }

//   const [destinationDetail, setDestinationDetail] = useState('');
//   const handlerDestinationDetail= (e:any) => {
//     setDestinationDetail(e.target.value);
//     console.log(destinationDetail)
//   }
//   const res = data;

//   console.log(data);

//   const destinationdetaillist: destination[] = [
//     {
//         destination: '천안시'
//     },
//     {
//         destination: '천안시'
//     },
//     {
//         destination: '천안시'
//     },
//     {
//         destination: '천안시'
//     },
//     {
//         destination: '천안시'
//     },
//     {
//         destination: '천안시'
//     },
//     {
//         destination: '천안시'
//     },
//     {
//         destination: '천안시'
//     },
//     {
//         destination: '천안시'
//     },
//     {
//         destination: '천안시'
//     },
//     {
//         destination: '천안시'
//     },
//     {
//         destination: '천안시'
//     },
//   ]

//     return(
//         <div  className="destinationmodallayout">
//             <div className='destinationlist'>
//                 {data?.map((datas:destination,index:any)=>(
//                     <button className='destinationliststyle' value={datas.destination} onClick={handlerDestination} >
//                         {datas.destination}
//                     </button>
//                 ))}
//             </div>
//             <div className='destinationdetaillist'>
//                 {destinationdetaillist?.map((datas2:destination,index:any)=>(
//                     <button className='destinationdetailliststyle' value={datas2.destination} onClick={handlerDestinationDetail}>
//                         {datas2.destination}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Destinationmodal;