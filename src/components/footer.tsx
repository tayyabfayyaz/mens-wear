import Link from "next/link";

function Footer() {
    return(
        <>
        <footer className="bg-gray-800 h-[320px] w-full mt-20 lg:flex lg:flex-row gap-5 justify-center hidden">
            <div className="w-[600px] h-[300px] pt-5 text-white px-20 block">
                <div className="logo-box font-bold text-3xl font-sans mb-5 mt-10">
                    <p>MENS WEAR</p>
                </div>
                <p className="text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, sit?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, error?
                </p>
            </div>
            <div className="w-[300px] h-[300px] pt-5">
                <ul>
                    <li className="text-white font-semibold text-xl mt-10 mb-5">SHOPPING</li>
                    <li className="text-gray-400 cursor-pointer my-2">Clothing Store</li>
                    <li className="text-gray-400 cursor-pointer my-2">Trending Shoes</li>
                    <li className="text-gray-400 cursor-pointer my-2">Accessories</li>
                    <li className="text-gray-400 cursor-pointer my-2">Sale</li>
                </ul>
            </div>
            <div className="w-[300px] h-[300px] pt-5">
                <ul>
                    <li className="text-white font-semibold text-xl mt-10 mb-5">SHOPPING</li>
                    <li className="text-gray-400 cursor-pointer my-2">Contact Us</li>
                    <li className="text-gray-400 cursor-pointer my-2">Payment Method</li>
                    <li className="text-gray-400 cursor-pointer my-2">Delivary</li>
                    <li className="text-gray-400 cursor-pointer my-2">Return & Exchange</li>
                </ul>
            </div>
            <div className="w-[600px] h-[300px] pt-5">
                <p className="text-white text-xl font-semibold mt-10 mb-5">NEWLETTER</p>
                <p className="text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptas quaerat assumenda blanditiis, amet voluptatem?</p>
                <input type="text" name="email" id="email" placeholder="Email Now" className="w-80 h-12 bg-transparent border-b-2 border-gray-400 px-5 py-5 mt-10 text-white" />
            </div> 
        </footer>

        <div className="copywrite-box w-full h-[50px] bg-gray-800 border-t-4 border-gray-400 hidden lg:block">
            <h2 className="text-white text-xl text-center my-2">
                &copy; Designed & Developed By 
                <Link href="/" className="underline cursor-pointer hover:text-blue-700"> Tayyab Fayyaz</Link>
                . All Rights Reserve
            </h2>
        </div>


        <footer className="bg-gray-900 text-white h-[60px] w-full block md:block lg:hidden xl:hidden mt-[1350px]">
            <h2 className="text-white text-sm text-center py-2 my-2">
                &copy; Designed & Developed By 
                <Link href="/" className="underline cursor-pointer hover:text-blue-700"> Tayyab Fayyaz</Link>
                . All Rights Reserve
            </h2>
        </footer>
        </>
    );
};

export default Footer;