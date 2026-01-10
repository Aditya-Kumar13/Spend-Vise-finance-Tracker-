import React from 'react'

const Balance = ({totalincome, totalexpense,total}) => {
  return (
    <div className=' h-70 w-fit bg-white/10 shadow-xl backdrop-blur-md flex flex-col justify-center items-center rounded-2xl border-2 border-white/20 relative z-10 p-10'>
        <div className="circle1 h-13 w-13 rounded-full bg-amber-50 absolute -z-10 top-10 blur-xl left-10">

        </div>
        <div className="circle h-13 w-13 rounded-full bg-red-400 absolute -z-10 top-40 blur-2xl right-35">

        </div>
        <div className="circle h-13 w-13 rounded-full bg-amber-50 absolute -z-10 top-50 blur-xl right-10">

        </div>
        <div className="circle h-13 w-13 rounded-full bg-amber-50 absolute -z-10 top-35 blur-xl left-30">

        </div>
        <div className="total">
            <h1 className='text-2xl'>TOTAL BALANCE</h1>
        </div>
        <div className="totalmoney">
            <span className={`text-7xl ${total >= 0 ? "text-green-500" : "text-red-500"} `}>${total}</span>
        </div>
        <div className="amount flex gap-10 m-4 ">
            <div className="income border-1 pt-2.5 p-15 pb-2.5 rounded-2xl">
                <div className="name">
                    <h1>INCOME</h1>
                </div>
                <div className="incomemoney flex w-full -ml-4.5">
                    <i class="ri-arrow-up-line text-xl font-bold"></i>
                    <h1 className='text-2xl text-green-500'>${totalincome}</h1>
                </div>
            </div>
            <div className="expense border-1 pt-2.5 p-15 pb-2.5 rounded-2xl">
                <div className="name ">
                    
                    <h1>EXPENSE</h1>
                </div>
                <div className="expensemoney flex w-full -ml-4.5 ">
                    <i class="ri-arrow-down-line text-xl font-bold"></i>
                    <h1 className='text-2xl text-red-400'>${totalexpense}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Balance