import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { CiSearch, CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag, MdOutlineMenu } from "react-icons/md";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link';
  


function Navbar(){
    return(
        <>
        <header className='hidden sm:block'>
            <div className="header-top w-full h-12 bg-stone-950 flex justify-between px-28 py-4">
                <div className="text-box">
                    <p className="text-white text-sm">Free shipping, 30-day return or refund guarantee.</p>
                </div>
                <div className="btn-box text-sm flex items-center space-x-4">
                    <button className="text-white mx-4">SIGN IN</button>
                    <button className="text-white mx-4">FAQS</button>
                    <button className="text-white mx-4 space-x-2 flex items-center">
                        <select name="currency" className='bg-transparent border-none cursor-pointer'>
                            <option value="1" className='bg-white text-gray-900'>USD</option>
                            <option value="2" className='bg-white text-gray-900'>PKR</option>
                            <option value="3" className='bg-white text-gray-900'>BTC</option>
                        </select>
                        <FontAwesomeIcon icon={faChevronDown} className="text-lg" />
                    </button>
                </div>
            </div>

            <nav className='w-full h-24 bg-white py-7 text-slate-950 shadow-2xl'>
                <div className="navbar-container mx-20 flex justify-between items-center">

                    <div className="logo-box font-bold text-3xl font-sans">
                        <p>MENS WEAR</p>
                    </div>

                    <ul className='flex space-x-8 text-xl '>
                        <li className="hover:underline hover:decoration-solid hover:decoration-red-600 cursor-pointer">Home</li>
                        <li className="hover:underline hover:decoration-solid hover:decoration-red-600 cursor-pointer">Shop</li>
                        <li className="hover:underline hover:decoration-solid hover:decoration-red-600 cursor-pointer">Pages</li>
                        <li className="hover:underline hover:decoration-solid hover:decoration-red-600 cursor-pointer">Blog</li>
                        <li className="hover:underline hover:decoration-solid hover:decoration-red-600 cursor-pointer">Contacts</li>
                    </ul>
            

                
                    <ul className=" items-center space-x-6 flex justify-start" >
                        <li className='text-xl font-light cursor-pointer '>
                            <CiSearch />
                        </li>
                        <li className='text-xl font-light cursor-pointer '>
                            <CiHeart />
                        </li>
                        <li className='text-xl font-light cursor-pointer flex '>
                          <MdOutlineShoppingBag /> <span className='text-sm ml-1 font-semibold'> $0.00</span>
                        </li>    
                    </ul> 
                </div>
            </nav>
        </header>

        <header className='sm:block lg:hidden logo-box h-[60px] bg-slate-200 text-gray-900 w-full py-4 px-4'>
            <nav>
                <div className="text-start font-bold text-xl font-sans float-start">
                    <p>MENS WEAR</p>
                </div>
                <Sheet>
                    <SheetTrigger className="float-end"> <MdOutlineMenu className="text-xl" /> </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetTitle>
                            <div className="text-center font-bold text-xl font-sans">
                                <p>MENS WEAR</p>
                            </div>      
                        </SheetTitle>
                        <SheetDescription>
                            <div className="sm-btn flex justify-around text-gray-900 my-5">
                                <button>SIGN IN</button>
                                <button>FAQS</button>
                                <button>
                                    <select name="usd" id="currency">
                                        <option value="1" className='bg-gray-900 text-white'>USD</option>
                                        <option value="2" className='bg-gray-900 text-white'>EUR</option>
                                        <option value="3" className='bg-gray-900 text-white'>PKR</option>
                                    </select>
                                </button>
                            </div>

                            <div className="sm-icons flex justify-around text-xl text-gray-900">
                                <CiSearch />
                                <CiHeart />
                                <MdOutlineShoppingBag /><span className='flex text-sm -ml-8'>$0.00</span>
                            </div>

                            <ul className='text-lg my-5 text-start text-gray-900'>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/">Shop</Link></li>
                                <li><Link href="/">Pages</Link></li>
                                <li><Link href="/">Blog</Link></li>
                                <li><Link href="/">Contact</Link></li>
                            </ul>

                            <div className="detail text-start tex-gray-900">
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dicta.</span>
                            </div>
                        </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </nav>
        </header>
        </>
    );
};

export default Navbar;