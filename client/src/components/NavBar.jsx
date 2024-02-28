
import logo from '../assets/imgs/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SignInButton } from '@clerk/clerk-react';
import { UserButton} from '@clerk/clerk-react';




const NavBar = () => {

    const [nav, setNav] = useState(false)
   

   

    const links = [
        {
            id: 1,
            link: "Planes"
        },
        {
            id: 2,
            link: "Horarios"
        },
        {
            id: 3,
            link: "Contacto"
        }
    ];
    

    return (
       
          
                
                <div className='flex justify-between items-center w-full bg-gradient-to-b bg-black to-gray-500 text-white h-20' >
                    <div className="flex items-center justify-between h-16">
                        <img src={logo} alt="logo" className="h-20 ml-6 cursor-pointer" />
                    </div>

                    <div className=' nav-links md:static absolute bg-black md:min-h-fit min-h-60 mt-4 left-0  top-[-100%] md:w-auto w-full flex items-center px-5'>
                        <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-lg '>
                            {links.map(({id, link}) => (
                                <li key={id} className="hover:text-gray-500 cursor-pointer"><NavLink to={link} smooth duration={500}> {link} </NavLink></li>
                            ))}
                        </ul>

                    </div>
                    
                    <div className='flex items-center gap-6 mr-6 '>
                      
                            <button 
                                className='bg-transparent  text-white px-7 py-1 rounded-full transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-200' >
                                    <SignInButton mode='modal' redirectUrl="/dashboard"/>
                            </button>
                            <button><UserButton/></button>                    
                     
                        <div onClick={()=>setNav(!nav)} className="cursor-pointer z-10 text-white-500 md:hidden">
                            {nav ? < FaTimes size={30} /> : < FaBars size={30} /> }
                           
                        </div>
                    </div>

                    {nav && (
                        <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
                            {links.map(({id, link}) => (
                                <li key={id} className=' px-4 cursor-pointer capitalize py-6 text-4xl'> <NavLink onClick={()=> setNav(!nav)} to={link} smooth duration={500}> {link} </NavLink></li>
                            ))}
                        </ul>
                    )}

                </div>

           
          
    );
};

export default NavBar;