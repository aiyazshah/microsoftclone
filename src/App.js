import search from './img/search.png'
import microsoft from './img/microsoft.png'
import surfacepro from './img/surfacepro.jpg'
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

function App() {
  return (
    <>

      <div className="flex justify-between">
        <div className="flex md:hidden">
          <div className="flex flex-col pt-2 pl-2 w-8 ">
            <hr className="h-[2px] bg-gray-800 m-[2px]" />
            <hr className="h-[2px] bg-gray-800 m-[2px]" />
            <hr className="h-[2px] bg-gray-800 m-[2px]" />
          </div>
          <div className="w-4 pt-2 mx-4 ">
            <img src={search} />
          </div>
        </div>


        <div className=' flex w-20 pt-2 md:order-1 md:ml-3'>
          <img src={microsoft} alt="" />
          <div className="hidden md:nav md:flex">
            <div className=' border border-1 mx-3 border-zinc-900 h-6 w-0.5 md:block'></div>
            <ul className='flex w-max space-x-3'>
              <li className='flex'><p>Computers</p><RiArrowDropDownLine size={25} /></li>
              <li className='flex'><p>Computers for business</p><RiArrowDropDownLine size={25} /></li>
              <li className='flex'><p>Accessories</p><RiArrowDropDownLine size={25} /></li>
              <li className='flex'><p>More</p><RiArrowDropDownLine size={25} /></li>
            </ul>
          </div>
        </div>
        <div className='flex mr-1 pt-2 space-x-5 md:order-last'>
          <div className=" hidden w-4 pt-1 md:block ">
            <img src={search} />
          </div>
          <AiOutlineUser size={20} />
          <AiOutlineShoppingCart size={20} />
        </div>
      </div>
      <div className='mt-4'>
        <hr />
      </div>
      <div className='md:relative'>
        <div className='mt-4 md:order-1'>
          <img src={surfacepro}></img>
        </div>
        <div className='pt-2 text-center mx-4  md:absolute md:mx-10  md:top-40 md:text-left md:w-2/5'>
          <h1><span className='bg-yellow-300'>New</span></h1>
          <h1 className=' pt-1 font-bold text-gray-800 text-xl'>The most powerful Pro</h1>
          <p className='pt-3 font-sans'>Surface Pro 8 is the first consumer laptop-to-tablet PC based on the Intel® Evo™ platform for i5 and i7 options with storage 256GB and above and designed to light up the best of Windows 11. Laptop, tablet, or portable digital canvas.</p>
          <div className='inline-flex text-[#0067b8]'><BsFillPlayFill size={20} className="mt-1" /><span> See it in action</span></div>
        </div>
      </div>


    </>
  );
}

export default App;
