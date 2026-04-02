import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {

  const handlePayments = () => {
    setCarts([]);
    toast.success("Proceeded Successfully")
  }


  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

const handleDelete =(item)=>{
const filteredArray =carts.filter(c => c.id !==item.id)
setCarts(filteredArray)
toast.success("Item deleted successfully")
}

  return (
    <div>
      <h1 className='text-5xl font-bold text-center m-10'>Your Cart</h1>

      {carts.length === 0 ? (
        <p className='text-center text-xl bg-gray-200 w-8/12 mx-auto p-10 rounded m-10'>Cart is empty</p>
      ) : (
        <>
          <div className='space-y-5 w-8/12 mx-auto my-10'>
            {carts.map(item => (
              <div key={item.id} className='p-5 space-y-7 shadow-lg border-2 rounded-2xl bg-orange-100'>
                
                <div className='flex justify-between items-center gap-3'>
                  <img src={item.image} className='w-10 h-10' alt={item.title} />
                  <div>
                    <p className='text-gray-500'>{item.description}</p>
                  </div>
                  <button onClick={() => handleDelete(item)} className='btn'>❌</button>
                </div>

                <div className='flex justify-between items-center'>
                  <p className='text-3xl font-bold'>{item.title}</p>
                  <p className='text-3xl font-bold'>Price: ${item.price}/month</p>
                </div>
              </div>
            ))}
          </div>

          <div className='bg-black text-3xl font-bold text-white text-center w-8/12 mx-auto p-5 my-10 rounded-xl'>
            <h1>Total: ${totalPrice}</h1>
          </div>

          <h1
            onClick={handlePayments}
            className='bg-red-500 text-3xl font-thin text-white text-center w-8/12 mx-auto p-5 my-10 rounded-xl hover:bg-red-400'>
            Proceed to checkout
          </h1>
        </>
      )}
    </div>
  );
};

export default Cart;