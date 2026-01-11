import React from 'react'

const Quickadd = ({isexpense,setamount,setcat, addtrans,amount,expensebtn,setexpensebtn,incomebtn,setincomebtn}) => {
  return (
    <div className="max-h-2.5/3 w-2/3 bg-[#1D2025] m-2.5 rounded-2xl shadow-md shadow-gray-400 ">
        <div className="heading w-full text-center m-1.5">
            <h1 className='text-3xl'>QUICK ADD TRANSACTION</h1>

        </div>
      <div className="type  ">
        <label className='flex justify-around mt-1.5'>
            <button className={`border-1 p-2.5 rounded-2xl cursor-pointer text-xl ${incomebtn ? "bg-white text-black": "bg-black text-white"}`} onClick={()=>{isexpense(false);
              setincomebtn(true) ; setexpensebtn(false);
            }} >INCOME</button>
            <button className={`border-1 p-2 rounded-2xl cursor-pointer text-xl ${expensebtn ? "bg-white text-black" : "bg-black text-white"}`} onClick={()=>{{isexpense(true);
              setexpensebtn(true); setincomebtn(false)
            }}} >EXPENSE</button>
        </label>
      </div>
      <div className="amounttrans p-13 pt-1 pb-0">
        
        <h1 className='text-xl'>Amount</h1>
        <span className='pr-1.5 text-2xl'>$</span><input type='number' value={amount} placeholder='Amount' className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-2xl border-transparent focus:outline-none pl-1 placeholder-gray-100" onChange={(e)=>{
          setamount(e.target.value);
        }}></input>

        <div className="category flex pt-1.5 pb-1.5 gap-2 ">
            <div className="titlecat pr-1.5 border-1 border-l-0 p-2 mt-2.5 rounded-xl ">
                <h1>Category</h1>
            </div>
            <div className="selection pl-1.5 p-2 border-0 mt-2.5">
                <select className='text-white bg-[#1D2025]' defaultValue={"Home"} onChange={(e)=>{
                  setcat(e.target.value); 
                }}>
                    <option value="Home">Home</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Coffe">Coffe</option>
                    <option value="Food">Food</option>
                    <option value="Drinks">Drinks</option>
                </select>
            </div>
        </div>  

        <button className='w-11/12 p-3 bg-amber-700 rounded-2xl mt-3 ' onClick={()=>addtrans()
        }>Add Transaction</button>
      </div>

    </div>
  )
}

export default Quickadd
