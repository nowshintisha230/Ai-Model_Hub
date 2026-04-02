import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Modelcard = ({model,carts,setCarts}) => {
    const [isSubscribe,setIsSubscribe]=useState(false)

const handleSubscription=()=>{
    setIsSubscribe(true)

const isFound =carts.find(item => item.id === model.id)
if(isFound)
{
    toast.error("Item already in cart")
    return;
}
    setCarts([...carts,model])
   toast.success("Item Added successfully")
}

    return (
       
            <div className='shadow-lg bg-gray-100 rounded-2xl lg:transition-transform lg:duration-300 lg:hover:scale-105 w-full'>
    <div className='m-3 sm:m-4 md:m-6 space-y-3 sm:space-y-4 md:space-y-5'>
    <div className='flex justify-between items-start gap-2'>
  <img className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain flex-shrink-0' src={model.image}></img>
  <h1 className='bg-yellow-400 p-1.5 sm:p-2 rounded-xl text-xs sm:text-sm md:text-base font-bold transition-transform duration-300 hover:scale-105 text-center'>🔥 {model.status}</h1>
  </div>
<h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>{model.title}</h1>
<p className='text-sm sm:text-base'>{model.description}</p>
<h1 className='text-xl sm:text-2xl md:text-3xl'><span className='font-semibold'>Price:</span>${model.price}/month</h1>


<button onClick={handleSubscription} className='btn bg-red-600 hover:bg-red-500 rounded-xl text-white font-bold w-full sm:w-auto text-sm sm:text-base px-4 py-2'>{isSubscribe?"Subscribed" : "Subscribe Now"}</button>
    </div>
 </div>
        
    );
};

export default Modelcard;