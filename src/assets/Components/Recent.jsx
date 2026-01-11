import React, { useEffect } from 'react'
import Card from './Card'
const Recent = ({recenttrans,setfilter,filter,income,exp,Home,Entertainment,Coffe,Food,Drinks}) => {
  
  return (
    <div className='max-h-2.5/3 w-2/3 bg-[#1D2025] m-2.5 rounded-2xl shadow-md shadow-gray-400 '>
      <div className="recenttittle flex justify-around p-2 items-center">
        <div className="tittle">
            <h1 className='text-2xl'>Recent Transactions</h1>
        </div>
        <div className="filter text-l flex justify-center items-center p-0.5 ">
            <select className='text-white bg-[#1D2025] border-0'defaultValue={"All"} onChange={(Event)=>{
              setfilter(Event.target.value);
            }} >
                <option  value={"All"} > All</option>
                <option value={"Expenses"} >Expenses</option>
                <option value={"Income"}>Income</option>
                <option value={"Home"}>Home</option>
                <option value={"Coffe"}>Coffe</option>
                <option value={"Entertainment"}>Entertainment</option>
                <option value={"Food"}>Food</option>
                <option value={"Drinks"}>Drinks</option>
            </select>
        </div>
      </div>
      <div className="track h-10/13 m-3 overflow-scroll overflow-x-hidden">
        {filter==="All" && recenttrans && recenttrans.map((item, index) => (
          // 3. Pass data to Card and add a unique key
          <Card key={index} data={item} />))}
        
        {filter==="Expenses" && exp && exp.map((item, index) => (
          // 3. Pass data to Card and add a unique key
          <Card key={index} data={item} />))}
        
        {filter==="Income" && income && income.map((item, index) => (
          // 3. Pass data to Card and add a unique key
        <Card key={index} data={item}/>))}
        {filter==="Home" && Home && Home.map((item, index) => (
          // 3. Pass data to Card and add a unique key
        <Card key={index} data={item} />))}
        {filter==="Entertainment" && Entertainment && Entertainment.map((item, index) => (
          // 3. Pass data to Card and add a unique key
        <Card key={index} data={item} />))}
        {filter==="Coffe" && Coffe && Coffe.map((item, index) => (
          // 3. Pass data to Card and add a unique key
        <Card key={index} data={item} />))}
        {filter==="Food" && Food && Food.map((item, index) => (
          // 3. Pass data to Card and add a unique key
        <Card key={index} data={item} />))}
        {filter==="Drinks" && Drinks && Drinks.map((item, index) => (
          // 3. Pass data to Card and add a unique key
        <Card key={index} data={item} />))}
        
        
      </div>
    </div>
  )
}

export default Recent
