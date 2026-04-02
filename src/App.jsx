import NavBar from './components/NavBar.jsx'
import Banner from './components/Banner.jsx'
import Footer from './components/Footer.jsx'
import Models from './components/Models.jsx'
import Cart from './components/Cart.jsx'
import './App.css'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';

const getModels = async()=>{
  const res=await fetch("/data.json")
  return res.json()
}
 const modelPromise=getModels();

function App() {
 
  const [activeTab,isActiveTab]=useState("model");
const[carts,setCarts]=useState([])
console.log(carts)
  return (
    <>
  <NavBar></NavBar>
   <Banner></Banner>
   {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center m-5 p-5">
  <input type="radio" name="my_tabs_1"    className={`tab ${activeTab === "model" ? "bg-red-500 text-white font-bold" : ""}`} aria-label="Model" 
  onClick={()=>isActiveTab("model") }
  defaultChecked />

  <input type="radio" name="my_tabs_1"    className={`tab ${activeTab === "cart" ? "bg-red-500 text-white font-bold" : ""}`} aria-label="Cart"  onClick={()=>isActiveTab("cart")} />
  </div>


 {activeTab ==="model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models>}
{ activeTab ==="cart" &&<Cart carts={carts} setCarts={setCarts}></Cart>}
   <Footer></Footer>    
    </>
  )
}

export default App
