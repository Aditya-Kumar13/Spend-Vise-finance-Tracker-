import React, { useEffect, useState } from 'react'
import Nav from './assets/Components/Nav'
import Balance from './assets/Components/Balance'
import Recent from './assets/Components/Recent'
import Quickadd from './assets/Components/Quickadd'
const App = () => {

  const [recenttrans,setrecenttrans]=useState([]);

  const [total,settotal]=useState(0)

  const [totalincome,settotalincome]= useState(0);

  const [totalexpense,settotalexpense]=useState(0);

  const [exp,setexp]=useState([]);

  const [income,setincome]=useState([]);

  const [expensebtn,setexpensebtn] = useState(true);

  const [incomebtn,setincomebtn]= useState(false);


  const [isexpense,setexpense]=useState(false);


  const [amount,setamount]=useState("")

  const [cat,setcat]=useState("Home");

  const [filter,setfilter]= useState("All");

  const [Home,sethome]=useState([])

  const [Entertainment,setEntertainment]=useState([])

  const [Coffe,setCoffe]=useState([])

  const [Food,setFood]=useState([])

  const [Drinks,setDrinks]=useState([])

  const month = new Date().toLocaleString('default',{month:"long"});
  const year = new Date().toLocaleString('default',{year:"numeric"})

  const addtrans= ()=>{
    const entry ={
      id: Date.now(),
      cat:cat,
      type: isexpense? "Expenses": "Income",
      amount:parseFloat(amount),
    }
    setrecenttrans((prev)=>[entry,...prev]);
    console.log(recenttrans)
    setamount("")
  }

  const dlt = (dltindex)=>{
    const item = recenttrans.filter((t)=>t.id !== dltindex)
    setrecenttrans(item);
  }

  useEffect(()=>{
    if(recenttrans){
      const out = recenttrans.filter(item => item.type==="Expenses");
      const inmoney = recenttrans.filter(item => item.type==="Income")

      const aa = out.reduce((sum,t)=>sum + t.amount,0)

      settotalexpense(aa)

      const ii = inmoney.reduce((sum,t)=>sum + t.amount,0)

      settotalincome(ii)

      if (out){
        setexp(out);
        
        
      }
       if(inmoney){
        setincome(inmoney);
        
      }
    }
  },[recenttrans])


  useEffect(()=>{
    if (totalincome==0 && totalexpense==0){
      settotal(0)
    } 
    else {
      settotal(totalincome - totalexpense)
    }
  })

  useEffect(()=>{
    if (recenttrans){
      const homes = recenttrans.filter(item => item.cat==="Home");
      const Entertainment = recenttrans.filter(item => item.cat==="Entertainment");
      const Coffe = recenttrans.filter(item => item.cat==="Coffe");
      const Food = recenttrans.filter(item => item.cat==="Food");
      const Drinks = recenttrans.filter(item => item.cat==="Drinks");

      if (homes){
        sethome(homes)
        console.log(homes)
      }
      if(Entertainment){
        setEntertainment(Entertainment)
      }
      if (Coffe){
        setCoffe(Coffe)
      }
      if (Food){
        setFood(Food)
      }
      if (Drinks){
        setDrinks(Drinks)
      }

    }
  },[recenttrans]);



  return (
    <div className="h-full">
      <div className="navbar">
        <Nav month={month} year={year}/>
      </div>
      <div className="Balanceupdate h-85 w-full flex justify-center items-center ">
        <Balance totalexpense={totalexpense} totalincome={totalincome} total={total}/>
      </div>
      <div className="lastsection flex w-full">
        <div className="transctions w-1/2  h-80 flex justify-center">
          <Recent recenttrans={recenttrans} setfilter={setfilter} filter={filter} income={income} exp={exp} Home={Home}
          Entertainment={Entertainment} Coffe={Coffe} Food={Food} Drinks={Drinks} dlt={dlt}/>
        </div>
        <div className="newadd w-1/2  h-80 flex justify-center">
          <Quickadd isexpense={setexpense} setamount={setamount} setcat={setcat} addtrans={addtrans} amount={amount} expensebtn={expensebtn} incomebtn={incomebtn} setexpensebtn={setexpensebtn} setincomebtn={setincomebtn}/>
        </div>
      </div>
    </div>
  )
}

export default App
