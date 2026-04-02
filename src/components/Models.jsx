import React, { use } from 'react';
import Modelcard from './Modelcard.jsx'
const Models =  ({modelPromise,carts,setCarts}) => {
    const models=use(modelPromise)
    console.log(models)
    return (
        <div>
        <div className='lg:text-5xl font-bold text-4xl text-center mb-3 space-y-3'>
            <h1 >Choose Your Ai Model</h1>
            <p className='text-gray-400 text-lg font-thin'>All subscription gives you access to all frontier Ai models</p>
            </div>

<div className='lg:mx-30 lg:my-10 m-10 gap-10 grid lg:grid-cols-2 '>
    {models.map(model=>
   
    <Modelcard key={model.id} model={model} carts={carts} setCarts={setCarts}></Modelcard>
    )}
</div>

        </div>
    );
};

export default Models;